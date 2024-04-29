/*
// create promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, crytography
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

// another syntax

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved")
})

// Third promise

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Soumitra99", email: "soumitra@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// promise four

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "soumitra99", password: "123"})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(message){
    console.log(message)
})
.finally(function(){
    console.log("The promise is either resolved or rejected")
})
*/
// promise five

const promiserFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "js", password: "123"})
        }
        else {
            reject('ERROR: js went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        // console.log("soumitra")
        const response = await promiserFive        
        console.log(responce);
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive()

/*
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // console.log(response)

        const data = await response.json()
        console.log(data)
    } catch (error){
        console.log(`E: ${error}`)
    }
}

getAllUsers()
*/
/*
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
*/