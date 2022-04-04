`use strict`
class User {
    constructor(name, secondName, dateOfBirth, password, gender, emailAddress, accessLevel) {
        //brak walidacji
        this.name = name
        this.secondName = secondName
        this.dateOfBirth = dateOfBirth
        this.password = password
        this.gender = gender
        this.emailAddress = emailAddress
        this.accessLevel = accessLevel.toLowerCase()
        this.allUsers = []
    }

    changePassword = (newPassword) => {
        if (this.accessLevel === "admin") {
            this.password = newPassword
        } else {
            throw new Error("You can not change a password")
        }

    }
    changeEmail = (newEmail) => {
        if (this.accessLevel === "admin") {
            this.emailAddress = newEmail
        } else {
            throw new Error("You can not change an email Address")
        }
    }

    setAccessLevel = (level) => {
        this.accessLevel = level
    }

}

class App {
    constructor() {
       this.allUsers = []
    }

    listOfUsers = () => {
        return this.user
    }


    
}


const newKamil = new User("Kamil", "Rozanski", "27.02.1986", "Anglia15", "male", "motomc1@gmail.com", "user")
const newPatryk = new User("Patryk", "Rozanski", "27.02.1989", "Anglia15", "male", "jajo@gmail.com", "admin")
// newKamil.levelAccess("admin")
// newKamil.changeEmail("www@www.pl")
// newPatryk.levelAccess("user")
console.log(newKamil)
// console.log(newPatryk)






// const app = new App
// console.log(app.createUser("Kamil", "Rozanski", "27.02.1986", "Anglia15", "male", "motomc1@gmail.com", "user"))
// console.log(app.createAdmin("Krystian", "Rozanski", "27.02.1986", "Bialas", "male", "bialas@gmail.com", "admin"))
// console.log("list of users", app.listOfUsers())