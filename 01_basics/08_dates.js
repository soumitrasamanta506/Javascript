// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  // return object

let myCreatedDate = new Date(2024, 0, 23)
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());

let myCreatedDate_1 = new Date(2023, 1, 24, 13, 48, 50);
// console.log(myCreatedDate_1.toLocaleString());

let myCreatedDate_2 = new Date("2024-03-08");
// console.log(myCreatedDate_2.toLocaleString());

let myTimeStamp = Date.now();   // return time in milisecond since 1971
// console.log(myTimeStamp);
// console.log(myCreatedDate_2.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());