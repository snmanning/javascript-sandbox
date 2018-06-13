//CommonJS Module syntax
const math = require("./math.js");
//this will also work:
//const math = require('./math');

console.log("The module contains", math);

//a module can contain functions (also known as behaviors)
const sum = math.add(1, 2);
console.log("The sum is", sum);
const difference = math.sub(1, 2);
console.log("The difference is", difference);

//a module can also contain constant (special) values
console.log("The value of 'pi' is", math.PI);
console.log("The value of 'e' is", math.E);
