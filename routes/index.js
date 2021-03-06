var express = require('express');
var router = express.Router();
var checkNotAuthenicated = require('../controller/auth/checkNotAuthenticated');
var Authen = require('../controller/auth/authen');
var test = require('../respository/test');

/* Test */
router.get('/test', (req, res) => {
  test.test1();
  res.send('Testing');
})

/* GET home page. */
router.get('/', function(req, res, next) {
  // if (req.isAuthenticated) console.log(await req.user);
  res.render('index', { title: 'Homepage' });
});

/* Login page */
router.get('/login', checkNotAuthenicated, (req, res) => {
  res.render('login', {title: 'Login'})
})

router.post('/login', Authen.login);

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
