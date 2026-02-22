console.log("function ")

function sayMyName(){
    console.log("A");
    console.log("l");
    console.log("f");
    console.log("a");
    console.log("i");
    console.log("z");

    
}
// sayMyName()

function addtwonumbers(num1,num2){
    console.log( num1+num2)
}
// const result=addtwonumbers(8,5)

// console.log(result); this will give O/t undefined bcoz will not used the return funcion



function addtwonumbers(num1,num2){
  let   result =num1+num2
  return result
  console.log("this will not print , return keyword is used bcoz");
  
    
}
const result=addtwonumbers(8,7)
console.log(result);
// console.log(addtwonumbers(4,5))

function loginUserMessage(username="sam"){ // we set the defautr value to ssam 

    if(!username){// this  if block will noot excuted
        console.log("please enter a user name ")
        return
    }

    return `${username} just logged in`

}

console.log(loginUserMessage("alfaiz"))
console.log(loginUserMessage());


function calculatecartprice(...num1){
    return num1
    
}
 console.log(calculatecartprice(3,84,64));
 
 const user={
    username:"alfaiz",
    age:25
 }
 function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
    
 }

 handleobject(user)
 handleobject({
    username:"bsdk",
    age:85
 })

 const myNewarray =[55,88,66,77]

 function returnsecondvalue(getarray){
    return getarray[2]
 }

 console.log(returnsecondvalue(myNewarray));
 console.log(returnsecondvalue([88,44,76]));
 
 