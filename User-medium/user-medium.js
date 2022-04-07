`use strict`
class Validates {
    static isString(value) {
        if (value.length === 0) {
            throw new Error("Provide a string value")
        }
        if (typeof value !== "string") {
            throw new Error("it is not a string value")
        }
    }
    static ValidateEmail(email) {
        const regex = /(?=.{8,32})(?=.*[a-z])(?=.*[A-Z])(?=.*[!#$%^&*()<>?]).+@[a-z]+.[a-z].{1,3}/g
        if (!regex.test(email)) {
            throw new Error("Email address has a wrong format!");
        }
    }

    static ValidatePassword(password) {
        const minPasswordLength = 8
        if (password.length < minPasswordLength) {
            throw new Error(`Your password is to short. (Minimum ${minPasswordLength}th characters)`);
        }
    }
    static ValidateGender(gender) {
        if (!["male", "female"].includes(gender.toLowerCase())) {
            throw new Error("Gender, male or female only")
        }
    }

    // - data (nieważne jaka wejdzie) do konstruktora musi wejść w formacie MM/DD/YYYY
    // Czy taka walidacja jest ok??
    static getFormattedDate(date) {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/g
        const correctDate = regex.test(date)
        if (!correctDate) {
            throw new Error("Incorrect date format. Correct one is MM/DD/YYYY")
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
        Validates.isString(gender)
        Validates.isString(emailAddress)
        Validates.isString(accessLevel)

        Validates.ValidatePassword(password)
        Validates.ValidateGender(gender)
        Validates.ValidateEmail(emailAddress)
        Validates.getFormattedDate(dateOfBirth)

        this.name = name
        this.secondName = secondName
        this.dateOfBirth = new Date(dateOfBirth)
        this.password = password
        this.gender = gender
        this.emailAddress = emailAddress
        this.accessLevel = accessLevel
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
    createUser() {

    }

}


const newKamil = new User("Kamil", "Rozanski", "27/02/1986", "Anglia15", "male", "motomcC#1@gmail.com", "user")
const newPatryk = new User("Patryk", "Rozanski", "27/02/1989", "Anglia15", "male", "jajoJAJO#@gmail.com", "admin")
// newKamil.levelAccess("admin")
// newKamil.changeEmail("www@www.pl")
// newPatryk.levelAccess("user")
console.log(newKamil)
// console.log(newPatryk)

// const app = new App
// console.log(app.createUser("Kamil", "Rozanski", "27.02.1986", "Anglia15", "male", "motomc1@gmail.com", "user"))
// console.log(app.createAdmin("Krystian", "Rozanski", "27.02.1986", "Bialas", "male", "bialas@gmail.com", "admin"))
// console.log("list of users", app.listOfUsers())