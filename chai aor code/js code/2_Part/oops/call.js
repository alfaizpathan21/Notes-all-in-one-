function SetUserName(username) {
    this.username = username
    console.log("called");
    
}

function createuser(username, eamil, password) {
    SetUserName.call(this,username)

    this.eamil = eamil
    this.password = password
}

const chai = new createuser("chai", "chia@gmail.com", "123")
console.log(chai);
