/*
API server: https://jsonplaceholder.typicode.com/
Package gửi request: https://www.npmjs.com/package/fetch

1. Gởi request 1, lấy 5 bài post ngẫu nhiên
2. Gởi các request tiếp theo, lấy comment đầu tiên của mỗi post.
(commentID đầu tiên = (postid - 1) * 5 + 1

Thực hiện theo cả callback và promise
 */

var fetchUrl = require('fetch').fetchUrl;
const fetch = (url) => {
    return new Promise((resolve, reject) => {
        fetchUrl(url, function (error, meta, body) {
            if (error)
                reject(error)
            else
                resolve(body)
        })
    })
}

//Retrieve the random 5 posts from API server
let idList = [];
for (i=0; i<5; i++){
    idList[i] = Math.floor(Math.random()*100);
}

idList.map(id => {
    // console.log(id);
    let url = "https://jsonplaceholder.typicode.com/posts/" + id.toString();

    fetch(url).then( response => {
        console.log('--------------------------------------')
        console.log("Post of ID "+id)
        console.log(response.toString('utf-8'))

        //Fetch the first comment of the post
        let commentUrl = "https://jsonplaceholder.typicode.com/comments/" + ((id-1)*5+1).toString();
        return fetch(commentUrl);

    }).then( response => {

        console.log("The first comment:")
        console.log(response.toString('utf-8'))

        }
    ).catch(
        err => console.log(err.message)
    )
})

