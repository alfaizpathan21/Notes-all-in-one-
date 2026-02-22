// let myname="string     "

// console.log(myname.truelength);

let Myheros=["thor",'spiderman']

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getpspidermanPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.alfaiz=function(){
    console.log(`alfaiz is present in all object `);
    
}

Array.prototype.heyalfaiz=function(){
    console.log(`alfaiz says hello`);
    
}
heroPower.alfaiz()
// heroPower.heyalfaiz()
Myheros.heyalfaiz()


//
const User={
    name:"chai",
    email:'chai@gamil.com'

}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupoort={
    makeAssignment:'js assignment',
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

// modern way 
Object.setPrototypeOf(TeachingSupport,Teacher)

let anoitherUsername='chaiaourcode   '
String.prototype.truelength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True lenght is: ${this.trim().length}`);
    
}
anoitherUsername.truelength()
"alfaiz".truelength()
