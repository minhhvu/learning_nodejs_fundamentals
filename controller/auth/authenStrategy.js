var path = require('path');
var localStrategy = require('passport-local').Strategy;
var User = require('../../respository/User');

const strategyConfig = {usernameField: 'username', passwordField: 'password'};
const strategyHandler = async (username, password, done) => {
    let userInfo = await User.checkUserLogin(username, password);
    if (userInfo !== null) {
        return done(null, userInfo)
    }

    return done(null, false, {message: 'Invalid Password/Username'})
}

const authenStrategy = new localStrategy(strategyConfig, strategyHandler);

module.exports = authenStrategy;