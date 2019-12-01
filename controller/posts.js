var fetch = require('../api/fetch');

const  index = (req, res, next) => {
    //Retrieve all posts from server
    let url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url).then (
        data => {
            const viewData ={
                title: 'Listing Posts',
                posts: data
            }
            res.render('posts', viewData);
        }
    ).catch(
        err => {

        }
    )
}

const detail = (reg, res, next) => {
    const pid = reg.params.pid;

    //Retrieve the post with the pid
    url = 'https://jsonplaceholder.typicode.com/posts/'+ pid.toString();
    fetch(url).then(
        data => {
            const viewData = {
                title: 'Post Detail',
                post: data
            }
            res.render('post_detail', viewData);
        }
    ).catch(
        err => {

        }
    )
}

const add_post = (reg, res, next) => {
    const viewData = {
        title: 'Add a Post'
    }
    res.render('post_add', viewData)
}

const command_add_post = (reg, res, next) => {
    const viewData = {
        title: 'Update Posts',
        hasNewPost: true,
        newPost: reg.body.content
    }
    res.render('post_add', viewData)
}

var Post = {
    index: index,
    detail: detail,
    add_post: add_post,
    command_add_post: command_add_post
}

module.exports = Post;