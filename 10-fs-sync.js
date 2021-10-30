// Built-in module => 'fs' module
//readFileSync and writeFileSync methodes
const { readFileSync, writeFileSync } = require('fs');// opt 1
console.log('start');
/* 
const fs = require('fs');// opt 2
fs.readFileSync;
*/
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
//console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'});//flag: 'a' => append
console.log('done with this task');
console.log('starting the next one');