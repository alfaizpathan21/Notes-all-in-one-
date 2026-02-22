let a= prompt("Enter a frist number ");
let b= prompt("Enter a frist number ");

if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("sorry this is not allowed ")
}

let  sum=parseInt(a)+ parseInt(b);

try {
console.log("the sum is" + sum);    
    
} catch (error) {
    
}


 