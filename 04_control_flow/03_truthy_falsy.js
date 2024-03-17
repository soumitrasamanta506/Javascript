const userEmail = "sou@js.com"

if(userEmail)
{
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

/*
// falsy values

false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

/*

// Nullish coalescing operator (??): null undefined
// (??) it's return the first argument if it's not null/undefined. otherwise, the second one.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 20
val1 = null ?? undefined


console.log(val1);
*/

/*
// Terniary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice >=80 ? console.log("more than 80") : console.log("less than 80")
*/