var express = require('express');
var passport = require('passport');
var router = express.Router();
var checkNotAuthenicated = require('../controller/auth/checkNotAuthenticated');
var DB = require('../models/DB');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

/* Login page */
router.get('/login', checkNotAuthenicated, (req, res) => {
  res.render('login', {title: 'Login'})
})

const loginSetting = {
  successRedirect: "/",
  failureRedirect: '/login',
  failureFlash: true
};
router.post('/login', DB.checkUserLogin, passport.authenticate('local', loginSetting));

/* Register page */
router.get('/register', checkNotAuthenicated, (req, res) => {
  res.render('register', {title: 'Register'})
})

/* Log out */
router.get('/logout', (req, res)=>{
  req.logout();
  res.redirect('/');
});

module.exports = router;
