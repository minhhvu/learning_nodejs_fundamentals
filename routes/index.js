var express = require('express');
var router = express.Router();
var checkNotAuthenicated = require('../controller/auth/checkNotAuthenticated');
var DB = require('../models/DB');
var Authen = require('../controller/auth/authen')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

/* Login page */
router.get('/login', checkNotAuthenicated, (req, res) => {
  res.render('login', {title: 'Login'})
})

router.post('/login', Authen.loginCheck, Authen.loginValidator, Authen.login);

/* Register page */
router.get('/register', checkNotAuthenicated, (req, res) => {
  res.render('register', {title: 'Register'})
})

router.post('/register', Authen.register);

/* Log out page*/
router.get('/logout', (req, res)=>{
  req.logout();
  res.redirect('/');
});

module.exports = router;
