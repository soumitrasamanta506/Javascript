function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
    return number1 + number2;
}

const result = addTwoNumbers(3, 4)

// console.log(`Result : ${result}`);

function loginUserMessage(username){
    if(username === undefined)
    {
        console.log("Please enter a username");
        return;
    }
    else{
        return `${username} just logged in`
    }
}

// console.log(loginUserMessage("soumitra"));

function calculateCartPrice(...num){    // rest operator
    return num;
}

console.log(calculateCartPrice(200, 400, 500));