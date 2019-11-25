/**
 * Cách 1: 
 *   - fetch bài post1, fetch post2, ... post5
 *   - fetch comment của post1, comment của post2, ..., comment của post5
 * 
 * Cách 2:
 *   - Fetch post1
 *   - Fetch comment của post1
 *   - Lặp lại 5 lần như trên
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

const fetchPostAndItsComment = (pid) => {
    const postUrl = "https://jsonplaceholder.typicode.com/posts/" + pid.toString();
    const commentUrl = "https://jsonplaceholder.typicode.com/comments/" + ((pid-1)*5+1).toString();
    const dataResponse = {
        postId: pid,
        postTitle: null,
        comment: null
    };

    return new Promise((resolve, reject) => {
        fetch(postUrl).then( response => {
            dataResponse.postTitle = JSON.parse(response.toString()).title;

            return fetch(commentUrl);
        })
        .then( response => {
            dataResponse.comment = JSON.parse(response.toString()).body;

            resolve(dataResponse);
        })
        .catch ( err => {
            reject(err);
        })
    });
}

//======= Fetch data ========

// Generate the random 5 integers in [0,99] for Post IDs
let idList = [];
for (i=0; i<5; i++){
    idList[i] = Math.floor(Math.random()*100);
}

// Mảng kết quả
const result = [];

// Fetching
console.log('fetching 1st post ...');
fetchPostAndItsComment(idList[0])
.then( response => {
    result.push(response);

    console.log('fetching 2nd post ...');
    return fetchPostAndItsComment(idList[1]);
})
.then( response => {
    result.push(response);

    console.log('fetching 3rd post ...');
    return fetchPostAndItsComment(idList[2]);
})
.then( response => {
    result.push(response);

    console.log('fetching 4th post ...');
    return fetchPostAndItsComment(idList[3]);
})
.then( response => {
    result.push(response);

    console.log('fetching 5th post ...');
    return fetchPostAndItsComment(idList[4]);
})
.then( response => {
    result.push(response);

    //do something
    console.log(result);
})