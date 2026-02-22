// this and arrow function 

const user={
    username:  "alfaiz",
    price:99,
    welcomeMessage:function(){
        console.log((`${this.username}, wlcome to website`));
        // console.log(this);
        
    }
}
// user.welcomeMessage ();
// user.username="sam"
// user.welcomeMessage();

// console.log(this);

function chaui(){
    let username="alfaiz"
    console.log(this);
    
}
chaui()


// const chai = function(){
//     let username="alfaiz"
//     console.log(this.username);
// }

const chai =  ()=>{
    let username="alfaiz"
    console.log(this.username);
}

// basic arraow function

const addtwo = (num1,num2)=>{
    return num1+num2
}
console.log(addtwo(5,8));

const addtwoo =(num1,num2)=>(num1+num2)
console.log(addtwoo(5,5));
