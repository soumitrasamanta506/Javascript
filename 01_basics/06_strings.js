const name = "soumitra"
const repoCount = 3

// console.log(name + repoCount + " value");  // this is a older method, avoid it 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('soumitra-samanta')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   soumitra   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://soumitra.com/soumitra%20samanta"
console.log(url.replace('%20', '-'));