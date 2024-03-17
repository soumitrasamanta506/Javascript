// for each methods of array executes a provided function once for each array element

const programming = ["js", "rb", "py", "cpp", "java"]
/*
programming.forEach(function (item){
    console.log(item);
})
*/

/*
programming.forEach((val) => {
    console.log(val);
})
*/

/*
// another method

function printMe(item){
    console.log(item);
}

programming.forEach(printMe);
*/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})