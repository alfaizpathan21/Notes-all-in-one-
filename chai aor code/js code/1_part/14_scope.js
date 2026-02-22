// let a= 44
// const b=55
// var c=88

if(true){
let a= 44
const b=55
var c=88

}
// console.log(a);
// console.log(b);
console.log(c);

// console.log(d); // ReferenceError: d is not defined


// nested scope  '
function one (){
    const  username ="alfaiz"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website); this will throw error 
    // two()
    
}
one()

if(true){
     const username ="alfaiz"
     if(username==="alfaiz"){
        const website ="youtube"
        console.log(username + website);
        
     }
    //  console.log(website);
     
}
// console.log(username);

console.log(addone(5))
function addone(num){
    return num+1
} 


// addtwo(4) // this will throw error because addtwo is not defined
const addtwo= function(num){
    return num+2
}

addtwo(4) 
