/*
API server: https://jsonplaceholder.typicode.com/
Package gửi request: https://www.npmjs.com/package/fetch

1. Gởi request 1, lấy 5 bài post ngẫu nhiên
2. Gởi các request tiếp theo, lấy comment đầu tiên của mỗi post.
(commentID đầu tiên = (postid - 1) * 5 + 1

Thực hiện theo cả callback và promise

Solution 1: Use Parallel Async
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

const getPostAndComment = (id) => new Promise(
    (resolve, reject) => {
        let postUrl = "https://jsonplaceholder.typicode.com/posts/" + id.toString();
        let data = {
            id: id,
            post: null,
            comment: null,
        }
        fetch(postUrl).then( response => {

            data.post = response.toString('utf-8')

            //Fetch the first comment of the post
            let commentUrl = "https://jsonplaceholder.typicode.com/comments/" + ((id-1)*5+1).toString();
            return fetch(commentUrl);

        }).then( response => {
            data.comment = response.toString('utf-8')
            resolve(data)

        }).catch(
            err => reject(err.message)
        )
    }
)

//Generate the random 5 integers in [0,99] for Post IDs
let idList = [];
for (i=0; i<5; i++){
    idList[i] = Math.floor(Math.random()*100);
}

var promises = idList.map(id => {
    return getPostAndComment(id)
})

console.log(idList)

Promise.all(promises).then(data => {
    console.log('-----------------------------')
    console.log(data)
}).catch(err => {
    console.log('-----------------------------')
    console.log(err)
})

