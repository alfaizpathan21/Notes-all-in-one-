async function getData(){
    return new Promise((resolve, reject )=>{
        setTimeout(() => {
           resolve(455) 
        }, 3500);
    })
                            
}

console.log("loading modules ")

console.log("do somethong else")
 

console.log("load data  ")
let data=getData();
console.log(data)


console.log("process data ")
