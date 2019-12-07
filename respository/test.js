var userTest = require('./User');

const titlePrint = (title) => {
    console.log('--------------------');
    console.log(title);
}

const test1 = async () => {
    titlePrint('Test 1 for User.CheckUserLogin')
    const getUser = await userTest.checkUserLogin('admin', '123456');
    console.log(getUser);
}

const test2 = () => {
    titlePrint('Test for User.addUser');
    const addUser = userTest.addUser('admin4', 'test4@admin.com', '123456');
    console.log(addUser);
}

const test3 = async () => {
    titlePrint('Test for User.getUserInfo');
    const user = await userTest.getUserInfo('admin');
    console.log(user);
}

module.exports = {
    test1,
    test2,
    test3
}