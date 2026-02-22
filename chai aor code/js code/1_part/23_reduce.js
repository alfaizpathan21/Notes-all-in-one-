 const array1=[1,2,3,4,7,6,]
 const initailvalue=0

//  const MyToatl =array1.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval ${currval}`);
    
//     return acc+currval
//  },0)

//  console.log(MyToatl);


 
const myTotyal=array1.reduce((acc,currval)=> acc+currval,0)
 console.log(myTotyal);
 