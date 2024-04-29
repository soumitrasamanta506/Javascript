// objects literals
const user = {
    username: "soumitra",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log('Got user details from database');
    } 
}

// console.log(user.username);
// user.getUserDetails();

// Constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this
    // implicitly returns this context
}

const userOne = new User('soumitra', 12, true)
const userTwo = new User("priyangshu", 10, false)

console.log(userOne);
console.log(userTwo);