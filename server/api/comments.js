const router = require('express').Router();
const { scrapeSubreddit } = require('./redditInfo')
const { analyzeSentiment } = require('./sentiment')

router.get('/', async (req, res, next) => {
    try {
        const comments = await scrapeSubreddit(req.query.ticker)
        const html = comments[0].selftext.split(' ').join('%20')
        const sentiment = await analyzeSentiment(html)
        console.log('sentiment returned --> ', sentiment)
        res.send(comments)
    } catch (error) {
        next(error)
    }
})

module.exports = router;