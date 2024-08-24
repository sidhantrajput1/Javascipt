// modeule.exports
const C = require("./test-module.js")
const calc1 = new C()
console.log(calc1.add(5, 6))


// exports

const {add, multiply, divide} = require("./test-module-2.js")
console.log(multiply(5, 4));
console.log(divide(5, 4));


// caching
require('./test-module-3.js')();
require('./test-module-3.js')();
require('./test-module-3.js')();

