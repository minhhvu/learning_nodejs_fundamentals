var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

/* Login page */
router.get('/login', (req, res) => {
  res.render('login', {title: 'Login'})
})

/* Register page */
router.get('/register', (req, res) => {
  res.render('register', {title: 'Register'})
})

module.exports = router;
