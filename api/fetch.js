var fetchURL = require('fetch').fetchUrl;
const fetch = (url) => {
    return new Promise((resolve, reject) => {
        fetchURL(url, function (error, meta, body) {
            if (error)
                reject(error)
            else
                resolve(JSON.parse(body.toString()))
        })
    })
}

module.exports = fetch;