const router = require('express').Router();

console.log('hello')

router.get('/', (req, res, next) => {
    res.send('hello')
})

router.use('/comments', require('./comments'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
