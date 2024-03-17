const user = {
    username: "soumitra",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // {}

// function chai(){
//     let username = "soumitra"
//     console.log(this.username);

// }

// chai()

// const chai = function(){
//         let username = "soumitra"
//     console.log(this.username);
// }

// chai()

// const chai = () => {    // arrow function
//     let username = "soumitra"
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1+num2
// or
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4));