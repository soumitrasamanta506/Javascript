// array

const myArr = [0, 1, 2, 3, 5]   // it can store different data types

// console.log(myArr[0]);

const another_arr = myArr   // shallow copy will be provide i.e direct reference
another_arr.pop();
// console.log(another_arr);
// console.log(myArr);

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[2]);

// Array methods

// myArr.push(6);  // add an element at the last
// myArr.push(7);
// myArr.pop();    //delete an element from the last

// myArr.unshift(9);   // add an element at the front
// myArr.shift();  // delete an element from the front

const newArr = myArr.join();    // bind all the elements and convert into a string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // first index included & last index excluded, without modify the reference array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);    // first index as well as last index included, and delete the element [l, r] from   the reference array

// console.log(myn2);
// console.log("C ", myArr);