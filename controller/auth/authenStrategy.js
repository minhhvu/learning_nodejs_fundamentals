var path = require('path');
var localStrategy = require('passport-local').Strategy;
var DB = require('../../models/DB');

const strategyConfig = {usernameField: 'username', passwordField: 'password'};
const strategyHandler = (username, password, done) => {
    if (DB.checkUserLogin(username, password)) {
        let userInfo = DB.getUserInfo(username);
        return done(null, userInfo)
    }

    return done(null, false, {message: 'Invalid Password/Username'})
}

const authenStrategy = new localStrategy(strategyConfig, strategyHandler);

module.exports = authenStrategy;