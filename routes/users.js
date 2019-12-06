var express = require('express');
var router = express.Router();

var User = require('../models/User');

/* GET users listing. */
router.get('/', async function(req, res, next) {

  try {

    let user = new User({name: 'admin', email: 'test@admin.com', password: '123456'});
    await user.save();
    res.send('respond with a resource');

  } catch (e) {

    console.error(e.message);
    res.status(500).send('Server Error');

  }
});

module.exports = router;
