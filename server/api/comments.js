const router = require('express').Router();
const { scrapeSubreddit } = require('./redditInfo')
const { analyzeSentiment } = require('./sentiment')

router.get('/', async (req, res, next) => {
    try {
        let comments = await scrapeSubreddit(req.query.subReddit, req.query.ticker)
        const html = comments.map(comments => {
            return comments.comments.reduce((body, comment) => {
                return body + comment.body.replace(/[^a-z0-9 ]/gi,'').split(' ').join('%20')
            }, '')
        })
        console.log(html)
        let sentiment = await analyzeSentiment(html)
        let post = {
            title: comments[0].title,
            selftext: comments[0].selftext,
            sentiment: sentiment.score_tag,
            confidence: parseInt(sentiment.confidence)
        }
        console.log(post)
        res.send(post)
    } catch (error) {
        next(error)
    }
})

module.exports = router;