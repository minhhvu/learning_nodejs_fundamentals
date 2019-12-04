var express = require('express');
var router = express.Router();
var Post = require('../controller/posts');
var checkAuthenticated = require('../controller/auth/checkAuthenticated');

//Post listing
router.get('/', checkAuthenticated, Post.index);

//Post Detail with pid
router.get('/view/:pid', Post.detail);

//Add post
router.get('/add', Post.add_post)
router.post('/command_add', Post.command_add_post)


module.exports = router;