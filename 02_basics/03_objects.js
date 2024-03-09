// object literals

const mySym = Symbol("key1")

const jsUser = {    // non-singleton object
    name: "soumitra",
    "full name": "Soumitra Samanta",
    [mySym]: "symbol1",     // to create key as a symbol
    age: 19,
    location: "kolkata",
    email: "soumitra@google.com",
    isLoggedIn: false
}

// console.log(jsUser.age);
// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mySym]); // to acces key whose type symbol

jsUser.age = 20
// console.log(jsUser);

// Object.freeze(jsUser)   // to lock a object (after lock we can't modify object)

Object.age = 19
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// console.log(jsUser);