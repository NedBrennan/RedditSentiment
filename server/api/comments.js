const router = require('express').Router();
const { scrapeSubreddit } = require('./redditInfo')
const { analyzeSentiment } = require('./sentiment')
const limit = require('await-limit')

router.get('/', async (req, res, next) => {
    try {


        // Call to Snoowrap handling the subreddit scraping
        let comments = await scrapeSubreddit(req.query.subReddit, req.query.ticker)
        const html = comments.map(comments => {
            return comments.comments.reduce((body, comment) => {
                return body + comment.body.replace(/[^a-z0-9 ]/gi,'').split(' ').join('%20')
            }, '')
        })


        // Limit the number of calls to MeaningCloud API using
        // await-limit library
        const concurrency = 1
        
        const mapLoop = async () => {

            let sentiment = await limit.map(concurrency, html, async string => {
                const analysis = await analyzeSentiment(string)
                return analysis
            })
            const sentimentList = await Promise.all(sentiment)

            return sentimentList
        }
        const sentiment = await mapLoop()
        
        // Format response for front end
        comments = comments.map((post, index) => {
            if(sentiment[index]) {
            return {
                title: post.title,
                selftext: post.selftext,
                sentiment: sentiment[index].score_tag || 'UN',
                confidence: sentiment[index].confidence || 'UN'
            }}
            return {
                title: post.title,
                selftext: post.selftext,
                sentiment: 'UN',
                confidence: 'UN'
            }
        }).filter(post => !(post.sentiment === 'UN'))
        res.send(comments)
    } catch (error) {
        next(error)
    }
})

module.exports = router;