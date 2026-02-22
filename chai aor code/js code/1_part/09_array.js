// // arrays 

//     const myArray=[0,1,2,5,4,8,7,'alfaiz']

//     console.log(myArray);

//     console.log(myArray[2]);
// console.log(myArray.length);
    
// const  myArr2= new Array(1,2,3,4)
// console.log(myArr2);
// console.log(myArr2[3]);

// // method of array that help in programming 

// // myArray.push(6)
// // myArray.push(9)
// // myArray.pop()

// // myArray.unshift(1)
// // // myArray.shift()

// // console.log(myArray.includes(8))
// // console.log(myArray.indexOf(7));

// // const newarr= myArray.join()

// // console.log(myArray);

// // console.log(typeof(newarr));

// const my1=myArray.slice(1,4)

// console.log(my1);
// console.log("b", myArray);

// const my2=myArray.splice(1,4)

// console.log("c", myArray);
// console.log(my2);


/// more about array 
const marvel_hero=["thor","ironman","Spiderman"]
const dc_hero=["superman","flash","batman"]

// marvel_hero.push(dc_hero)
// // console.log(marvel_hero);
// console.log(marvel_hero[3][2]);

// const allheros=marvel_hero.concat(dc_hero)
// console.log(allheros);

const all_new_heros=[...marvel_hero,...dc_hero]

console.log(all_new_heros);


const another_array=[1,28,6,3,[54,6,4,[78,2,4,6]],8,5]

const real_another_array= another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("alfaiz"))
console.log(Array.from("alfaiz "));


let score=100
let score2=100
let score3=300
console.log(Array.of(score,score2,score3));
