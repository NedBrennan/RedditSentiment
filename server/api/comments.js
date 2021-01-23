const router = require('express').Router();
const { scrapeSubreddit } = require('./redditInfo')

router.get('/', async (req, res, next) => {
    try {
        const comments = await scrapeSubreddit(req.query.ticker)
        res.send(comments)     
    } catch (error) {
        next(error)
    }
})

module.exports = router;