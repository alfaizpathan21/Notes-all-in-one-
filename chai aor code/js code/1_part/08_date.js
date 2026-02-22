// date 

let mydate= new Date()

console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toISOString());
console.log(typeof(mydate));// date is and object 


// let myCreatedate=new Date(2023,0,25)

// console.log(myCreatedate.toString());


// let myTimeStamp= Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedate.getTime());

// console.log(Math.floor(Date.now()/100000));

let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth()+1);
// getMonth() returns 0-11 so we add 1 to get the month as

console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})