const {check, validationResult } = require('express-validator');
var User = require('../../respository/User');

// @route POST /register
// @desc submit register form
const registerCheck = [
    check('email').isEmail().withMessage('is invalid.'),
    check('username').notEmpty().withMessage(' is required.'),
    check('password').isLength({min: 6}).withMessage('requires at least 6 characters.'),
    check('re-password').custom((value, { req }) => value === req.body.password).withMessage('needs to the same as password.')
]

const registerValidator = (req, res, next) => {
    const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
        return `The ${param}: ${msg}`;
    };
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()){
        // console.log('------------2--------------');
        // console.log(errors);
        const viewData = {
            title: 'Register',
            hasError: true,
            errors: errors.array(),
        }
        res.render('register', viewData);
    }

    return next();
}

const register = (req, res) => {
    let add = User.addUser(req.body.username, req.body.email, req.body.paswword);
    if (add === true){
        res.redirect('/');
    } else {
        console.error(add)
        res.send('Failed to add user into DB!');
    }
}

//@route POST /login
//@desc submit login form

const loginCheck  = [
    check('password').notEmpty().withMessage(' is required.'),
    check('username').notEmpty().withMessage(' is required.'),
];

const loginValidator = (req, res, next) => {
    const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
        return `The ${param}: ${msg}`;
    };
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()){
        // console.log('------------2--------------');
        // console.log(errors);
        const viewData = {
            title: 'Login',
            hasError: true,
            errors: errors.array()
        }
        res.render('login', viewData);
    }

    return next();
}

var passport = require('passport');
const loginSetting = {
    successRedirect: "/",
    failureRedirect: '/login',
    failureFlash: true
};

const login = passport.authenticate('local', loginSetting);

const Authen = {
    register,
    registerCheck,
    registerValidator,
    login,
    loginCheck,
    loginValidator
}

module.exports = Authen;