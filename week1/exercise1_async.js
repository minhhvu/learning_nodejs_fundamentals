//console.log('Require file');
const fs = require('fs');
console.log('Start');
const content = fs.readFile('./text.txt', 'utf8', (err, data) => {
    console.log('Read file');
    console.log(data);
    console.log('Done');
});
console.log('End');