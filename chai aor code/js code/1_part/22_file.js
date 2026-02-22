const coding=['java','python','c++','js']

// const values=coding.forEach((item)=>{
//     return item //this will not return ant value 
// })

// console.log(values);


const myNums=[1,2,3,4,5,7,8,6,8]

// const newNums=myNums.filter((num)=> num>4)

// console.log(newNums);

// // const newNums=myNums.filter((num)=> {num>4}) // this will give an empty array because the condition is not met

// console.log(newNums);

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);

