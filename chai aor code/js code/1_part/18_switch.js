// // switch 
//  switch (key) {
//     case value:
        
//         break;
 
//     default:
//         break;
//  }

 const month=3
 switch (month) {
    case 1:
        console.log("january")
        
        break;
    case 2:
        console.log("feb")
        
        break;
    case 3:
        console.log("march")
        
        break;
    case 4:
        console.log("april")
        
        break;
    default:
        console.log("fuck that");
        
        break;
 }
 const month1="march" 
 switch (month1) {
    case "jan":
        console.log("january")
        
        break;
    case 'feb':
        console.log("feb")
        
        break;
    case 'march':
        console.log("march")
        
        break;
    case "apriil":
        console.log("april")
        
        break;
    default:
        console.log("fuck that");
        
        break;
 }

 const userEmail =""
 if (userEmail){
    console.log("user email is valid")// this will executed even if space is there
 }else{
    console.log("user email is invalid")
 }

 //fasy values

//  false, 0,-0,BigInt 0n, "",null undefined,NaN

//truthy values
// ture ,"0",'false', " ",[],{},function(){}

if (userEmail.length===0) {
    console.log("array is empty ");  
}

const emptyObhj={
}
if(Object.keys(emptyObhj).length===0){
    console.log("object is empty");
}