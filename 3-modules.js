// CommonJS = every file is module (by default)
// Modules = encapsulated code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

console.log(data);
require('./7-mind-grenade');//addValues invoked by itself
sayHi('susan');//invoke the function
sayHi(names.john);//invoke the function
sayHi(names.rony);//invoke the function