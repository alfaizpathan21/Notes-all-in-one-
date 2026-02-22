// // for 

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log('5 is best number ');
//     }
//     console.log(element);
// }
// // console.log(element);

// // for (let i = 1; i <= 10; i++) {
// //     console.log(`outer loop value ${i}`);

// //     for (let j = 1; j <= 10; j++) {
// //         // console.log(`inner loop value ${j} outer loop ${i}`);
// //         console.log(i + '*' + j + '=' + (i * j));


// //     }
// // }

// let Myarray = ["flash", "batman", "Superman"]
// for (let index = 0; index < Myarray.length; index++) {
//     const element = Myarray[index];
//     console.log(element);
    
// }
// // break and continue 
// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log("Detected 5");
//         break;
//         continue;
//     }
//     console.log(`value of i is ${index}`);
    
    
// }
// for (let index = 1; index <=20; index++) {
//     if(index==5){
//         console.log("Detected 5");
//         continue;
//     }
//     console.log(`value of i is ${index}`);
// }

// // while loop 

let index =0
while (index<=10) {
    console.log(`Value of index isb ${index}`);
    index=index+2 
}
let Myarray = ["flash", "batman", "Superman"]
let arr=0
while(arr<Myarray.length){
    console.log(Myarray[arr]);
    arr++
}

let score=11

do{
    console.log(`Score is ${score}`);
    score++
}while(score<=10)