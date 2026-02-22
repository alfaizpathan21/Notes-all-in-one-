class user{
    constructor(username){
        this.username=username

    }
    logme(){
        console.log(`username: ${this.username}`);
        
    }
    static createId(){
        return `1345`
    }
}

const alfaiz=new user("alfaiz")
// console.log(alfaiz.createId());


class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const game= new Teacher("phone","phone@gmail.com")

console.log(game.createId());
