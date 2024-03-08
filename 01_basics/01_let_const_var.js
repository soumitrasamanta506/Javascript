const accountId = 144553
let accountEmail = "soumitra@google.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;
// accountId = 242769 // not allowed because this is a constant

accountEmail = "sou@outlook.com"
accountPassword = "54321"
accountCity = "medinipur"

console.log(accountId)
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])