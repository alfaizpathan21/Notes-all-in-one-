class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(` a new course was added by ${this.username}`);
        
    }
}
const chai=new Teacher("chai","ff@gmail.com","789")

chai.addcourse()
chai.logme()
const masalachai= new user("masalachai")
masalachai.logme()