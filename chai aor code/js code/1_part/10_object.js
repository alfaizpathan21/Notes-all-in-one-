// object is imp for webb dep 
//singleton pattern means that only one object of a class can be created and same object can be used everywhere in the application

// object literals save data in key:value pair ]

const mysyn= Symbol("mykey1")
const jsUser={
    name:"alfaiz",
    [mysyn]:"mykey1", // [] use to give symbol data type
    age:18,
    loaction:"nagpur",
    email:"alfaiz786pathan@gmail.com",
    isLoggedIn:false
}

console.log(jsUser.email);

console.log(jsUser["email"]);

console.log(typeof(jsUser[mysyn]));


jsUser.email="alfaiz@gamil.com"

// Object.freeze(jsUser)
jsUser.email="patha@gamil.com"
console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello Js user ");
    
}
jsUser.greetingtwo=function(){
    console.log(`hello js User , ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());

