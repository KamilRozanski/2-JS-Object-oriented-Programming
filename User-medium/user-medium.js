`use strict`
class Validates {
    static isString(value) {
        if (typeof value !== "string") {
            throw new Error("it is not a string value")
        }
    }
    static ValidateEmail(email) {
        if (!email.includes("@") || !email.includes(".")) {
            throw new Error("Email address has a wrong format!");
        }
    }
    static ValidatePassword(password) {
        const minPasswordLength = 8
        if (password.length < minPasswordLength) {
            throw new Error(`Your password is to short. (Minimum ${minPasswordLength}th characters)`);
        }
    }
}
class User {
    constructor(name, secondName, dateOfBirth, password, gender, emailAddress, accessLevel) {
        //brak walidacji
        Validates.isString(name)
        Validates.isString(secondName)
        Validates.isString(dateOfBirth)
        Validates.isString(password)
        Validates.ValidatePassword(password)
        Validates.isString(gender)
        Validates.isString(emailAddress)
        Validates.ValidateEmail(emailAddress)
        Validates.isString(accessLevel)
        this.name = name
        this.secondName = secondName
        this.dateOfBirth = dateOfBirth
        this.password = password
        this.gender = gender
        this.emailAddress = emailAddress
        this.accessLevel = accessLevel.toLowerCase()
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