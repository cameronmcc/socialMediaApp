const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});
router.get('/users', (req, res) => {
  res.send('Welcome to the user page!');
});

module.exports = router;
