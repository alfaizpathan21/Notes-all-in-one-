const coding=['java','python','c++','js']

// coding.forEach(function(item)  {
//     console.log(item);
//     });

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myconding=[
    { laguangeName:"javascript",
        languageFileName:'js'
    },

    { laguangeName:"java",
        languageFileName:'java'
    },

    { laguangeName:"c++",
        languageFileName:'cpp'
    }
]
myconding.forEach((item)=>{
    console.log(item.laguangeName);
    
})
