const router = require('express').Router();
const { scrapeSubreddit } = require('./redditInfo')

router.get('/', async(req, res, next) => {
    try {
        console.log('backend route hit | body -> ', req.body)
        const comments = await scrapeSubreddit(req.body.ticker)
        console.log(comments)
        res.send(comments)     
    } catch (error) {
        next(error)
    }
})