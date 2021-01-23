const router = require('express').Router();
const { scrapeSubreddit } = require('./redditInfo')

router.get('/', async(req, res, next) => {
    try {
        console.log('backend route hit | body -> ', req.query)
        res.send('hello from comment section')     
    } catch (error) {
        next(error)
    }
})

module.exports = router;