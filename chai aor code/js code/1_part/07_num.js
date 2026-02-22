const score=400
console.log(score);

const balance=new Number(100);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(4));  // get the num after decimal 

const otherNumber=26.549;

console.log(otherNumber.toPrecision(4));// round-off the give value with given prescision  

const hunderds=100000
console.log(hunderds.toLocaleString('en-In')); // get the number in indian standarad


//*******************math emetical operations ************//

console.log(Math);
console.log(Math.abs(-5252));
console.log(Math.round(25.62));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));



console.log(Math.min(54,45645,44,44,4545,4121,50));


console.log(Math.random());


// Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)

console.log(Math.random()*15);

const min=10
const max=20



console.log(Math.floor(Math.random()*(max-min +1)) + min); // get the random number between min and max value
