// Stack(Primitive), Heap(Non-Primitive)

let myFacebookname = "soumitrasamanta.com"

let anothername = myFacebookname;
anothername = "xyz.com"

console.log(myFacebookname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "soumitra@google.com"

console.log(userOne.email);
console.log(userTwo.email);