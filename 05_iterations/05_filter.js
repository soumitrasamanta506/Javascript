/*

const coding = ["js", "rb", "py", "cpp", "java"]

const values = coding.forEach((item) => {
    return item
})

console.log(values);    // undefined
// forEach loop doesn't return any value

*/


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNums.filter((num) => num%2==0)  // it returns implicitly

let newNums = myNums.filter((num) => {
    if(num%2 == 0)
        return num
})

console.log(newNums)


