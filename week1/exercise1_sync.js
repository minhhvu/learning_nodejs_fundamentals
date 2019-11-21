//console.log('Require file');
const fs = require('fs');
console.log('Start');
const content = fs.readFileSync('./text.txt', 'utf8');

console.log('Read file');
console.log(content);
console.log('Done');

console.log('End');