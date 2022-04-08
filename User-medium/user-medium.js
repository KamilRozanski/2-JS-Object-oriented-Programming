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
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-](.{7,32})+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9].{1,3})*$/g
        if (!regex.test(email)) {
            throw new Error("Email address has a wrong format!");
        }
    }

    static ValidatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%^&*()<>?])+.{9,32}$/g
        if (!regex.test(password)) {
            throw new Error(`Invalid password. Password must have from 8 to 32 characters, includes at least one capital letter, one number and one special character  `);
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

    static checkAccessLevel = (accLevel) => {
        if (!accLevel.toLowerCase() === "admin" || accLevel.toLowerCase() === "user") {
            throw new Error(`Access level is not an "admin" or "user"`)
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
        this.accessLevel = accessLevel.toLowerCase()
    }

    changePassword = (newPassword) => {
        Validates.isString(newPassword)
        Validates.ValidatePassword(newPassword)
        if (this.accessLevel === "admin") {
            return this.password = newPassword
        } else {
            throw new Error("You can not change a password")
        }

    }
    changeEmail = (newEmail) => {
        Validates.isString(newEmail)
        Validates.ValidateEmail(newEmail)
        if (this.accessLevel === "admin") {
            return this.emailAddress = newEmail
        } else {
            throw new Error("You can not change an email Address")
        }
    }

    setAccessLevel = (level) => {
        Validates.isString(level)
        Validates.checkAccessLevel(level)
        this.accessLevel = level
    }
}

class App {
    constructor() {
        this.allUsers = []
    }
    createUser(user) {
        return this.allUsers.push(user)
    }
    showAllUsers = () => {
        return this.allUsers
    }
}


const userKamil = new User("Kamil", "Rozanski", "27/02/1986", "Anglia15!", "male", "motomcC#1@gmail.com", "user")
const userPatryk = new User("Patryk", "Rozanski", "27/02/1989", "Anglia15!", "male", "jajoJAJO#@gmail.com", "admin")
console.log(userPatryk.changePassword("dupa"))

// const app = new App
// console.log(app.createUser(newKamil))
// console.log(app.showAllUsers())