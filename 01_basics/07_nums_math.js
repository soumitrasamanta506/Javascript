const score = 400
// console.log(score);

const balance = new Number(100) // explicitly define to be number
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));    // toFixed method return a string with exact digit after decimal point

const otherNum = 123.8966
// console.log(typeof otherNum.toPrecision(4));    // toPrecision method return a string(significant digit)   

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ************************************ Maths ****************************************************************

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(2.3));
// console.log(Math.floor(1.2));

console.log(Math.random()); // random value b/w (0, 1)
console.log(Math.random()*10);

const min = 10
const max = 20
console.log((Math.random()*(max-min+1)) + min);