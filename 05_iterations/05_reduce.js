const myNums = [1, 2, 3]

const initialValue = 3
/*
const myTotal = myNums.reduce(function (accumulator, currentValue){
    console.log(`acc: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue
}, initialValue)
*/

// using arrow function
const myTotal = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

console.log(myTotal);

const shoppingCart = [
    {
        courseName: "js course",
        price: 1999
    },
    {
        courseName: "web development course",
        price: 3999
    },
    {
        courseName: "mobile development course",
        price: 5999
    },
    {
        courseName: "data science course",
        price: 12999
    }    
]

const totalPriceToPay = shoppingCart.reduce(function (accumulator, currentItem){
    return accumulator + currentItem.price
}, 0)

console.log(totalPriceToPay);