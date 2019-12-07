const UserModel = require('../models/User');

const checkUserLogin = async (username, pass) => {
    let hasUser = await UserModel.findOne({name: username, password: pass}, '_id name email');
    return hasUser === null ? false : hasUser;
}

const getUserById = async (id) => {
    let user = await UserModel.findById(id, '_id name email');
    return user;
}

const addUser = (name, email, password) => {
    let user = new UserModel({name: name, email: email, password: password});
    try {
        user.save();
        return true;
    } catch (e) {
        return e;
    }

}

module.exports = {
    checkUserLogin,
    getUserById,
    addUser
}