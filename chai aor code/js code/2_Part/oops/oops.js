// 
// const promiseOne=new Promise();

const date=new Date()

function user (username,loginedount,islogenIn){
    this.username=username;
    this.loginedount=loginedount;
    this.islogenIn=islogenIn;
    // return this  // no need to write to return values it
}

const userOne=new user ("alfaiz",88,false)
const userTwo=new user("chai",11,true)
console.log(userOne);
console.log(userTwo);
