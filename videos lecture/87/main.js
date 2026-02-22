const { error } = require("console")
const fs=require("fs")
console.log(fs)


console.log("staring")
// fs.writeFileSync("alfaiz.txt ", "alfaiz is a good boy ")

fs.writeFile("alfaiz2.txt", "this is a new file", () =>{
    console.log("done")
    fs.readFile("alfaiz2.txt", (error,date)=>{
        console.log(error,date.tostring())
    })
})

 console.log("ending")