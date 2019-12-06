const {check, validationResult } = require('express-validator');

// @route POST /register
// @desc submit register form
const register = (req, res) => {

}

//@route POST /login
//@desc submit login form
const loginCheck  = [
    check('password').notEmpty().withMessage(' is required.'),
    check('username').notEmpty().withMessage(' is required.'),
];

const loginValidator = (req, res, next) => {
    const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
        return `${param}: ${msg}`;
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
    login,
    loginCheck,
    loginValidator
}

module.exports = Authen;