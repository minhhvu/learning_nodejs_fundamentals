module.exports = {
    checkUserLogin: (username, pass) => {
        if (username == 'admin' && pass == '123') {
            return true;
        }
        return false;
    },

    getUserInfo: (username) => {
        return {
            id: '111',
            username: 'admin',
            email: 'user@test.com'
        }
    },

    getUserById: (id) => {
        return {
            id: id,
            username: 'admin',
            email: 'user@test.com'
        }
    }
}