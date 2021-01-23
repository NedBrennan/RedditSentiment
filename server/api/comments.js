const router = require('express').Router();
const { scrapeSubreddit } = require('./redditInfo')
const { analyzeSentiment } = require('./sentiment')

router.get('/', async (req, res, next) => {
    try {
        const comments = await scrapeSubreddit(req.query.ticker)
        const html = comments[0].title.split(' ').join('%20')
        const sentiment = await analyzeSentiment(html)
        console.log(sentiment)
        res.json(sentiment)
    } catch (error) {
        next(error)
    }
})

module.exports = router;