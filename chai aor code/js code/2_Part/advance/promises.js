const promiseOne = new Promise(function (resolve, reject) {
    //do an async call task 
    // db calls cryptogrraphy, network call
    setTimeout(() => {
        console.log("Async task is complete ");
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log("Promise comsumed")
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("async task 2")
        resolve()

    }, 2000)
}).then(function () {
    console.log("Promise 2 consumed")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "alfaiz", email: "@gmail.com" })

    }, 3000);
})
promiseThree.then(function (user) {
    console.log(user)
    console.log("Promise 3 consumed")

})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject("error:js went wrong")
        }
    }, 4000);
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(() => {
    console.log("the promise is either resolved or reject ");

})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject("error:aysnc  went wrong")
        }
    }, 5000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch (error) {
        console.log(error)

    }
}
consumePromiseFive()

// async function getalluser() {
//     try {
//         const response = await fetch('https://www.youtube.com/watch?v=_TjtAyMkiTI&t=20090s')
//         const data = await response.json()
//         console.log(data);


//     } catch (error) {
//         console.log(error);

//     }
// }

// getalluser()

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log(e);

})