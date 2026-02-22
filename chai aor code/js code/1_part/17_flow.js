// if 

if (     true) {
    console.log("this will executed ");
    
}

if(false){
    console.log("not executed");
    
}

const isUserLoggedIn= true
if(isUserLoggedIn){
    console.log("user is logged in");
}

const temp =41
if(temp==41){
    console.log("temperature is less then 50 ");
    
}
// <,> <= ,>=, ==, ===, !=, !==, 

const score =200
if(score>100){
    const power="fly"
    console.log(`user power: ${power}`);
    
}

// 
const balance = 1000
if(balance<500){
    console.log("less then 500");
} else if(balance<750){
    console.log("less then 750 ");
}
else{
    console.log("less then 1200");
    
}
//
const userLoggedin = true
const debitcard = true
const loggedUInfromGoogle=false
const LogedInFormEmail=true


if(userLoggedin && debitcard && 2==2){
    console.log("user logged in and debit card is available");}

if(loggedUInfromGoogle || LogedInFormEmail ){
    console.log("user logged in from google or email");
}

//nullish coalescing operator (??): null defined 

let vall;
vall= 5??10 
vall=null??10
vall=undefined??55
vall =null??10??15


console.log(vall);

// // terniary operator 
// conditon ? true : false

const iceTeaPrice=100
iceTeaPrice>=80? console.log("ice tea is expensive"):console.log("ice tea is cheap")