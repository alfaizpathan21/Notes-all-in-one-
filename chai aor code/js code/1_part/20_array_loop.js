// for of loop 

// ["","",'']

// const arr = [1, 2, 3, 4, 5]
// for (const val of arr) {
//     console.log(val)
// }

// const greetings = "hello world!"

// for (const greet of greetings) {
//     console.log(`each char is ${greet}`)

// }

// maps 
const map = new Map()
map.set('IN', 'india')
map.set('USA', "United state of America")
map.set('fr', 'france')
// console.log(map);

// for (const [key, value,] of map) {
//     console.log(key, ':-', value)

// }
for (const key in map) { // this will not get the value
    console.log(key, ':-', map.get(key))
     
}

// const myobject = {
//     'game1': 'NFS',
//     'game2': "spiderman"
// }

// const myobject = {
//     js: "javascrit",
//     cpp: 'c++',
//     rb: 'ruby',
//     swift: 'swift by apple '
// }

// for (const key in myobject) {
//    console.log(myobject[key])
// }

// const programming=['js,','cpp','py','java']

// for (const key in programming) {
//      console.log(programming[key])
// }