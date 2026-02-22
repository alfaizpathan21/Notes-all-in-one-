// const tinderuser =new object ()

const tinderUser ={}

tinderUser.name = "John"
tinderUser.id = 25
tinderUser.isLoggedin = false


// console.log(tinderuser)

const regularuser={
    email:"some@gamil.com",
    fullname:{
        userfulname:{
            first:"John",
            last:"Doe"
        }
    }
}

// console.log(regularuser );


const obj1={1:"a", 2:"f",3:"s"}
const obj2={4:"a", 5:"f",6:"s"}
//  const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"r@gmail.com"
    }
    ,{
        id:3,
        email:"g@gmail.com"
    },
    {
        id:4,
        email:"i@gmail.com"
    }

]
console.log(users);
users[1].email
console.log(tinderUser);

console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));




