`use strict`
class Validates {
    static isString(...value) {
        return value.find(el => {
            if (typeof el !== "string") {
                throw new Error("it is not a string value")
            }
            if (el.length === 0) {
                throw new Error("Provide a string value")
            }
        })
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

    static checkInputAccessLevel = (accLevel) => {
        if (!["admin", "user"].includes(accLevel.toLowerCase())) {
            throw new Error(`Access level is not an "admin" or "user"`)
        }
    }

}
class User {
    constructor(name, secondName, dateOfBirth, password, gender, emailAddress, accessLevel) {
        //brak walidacji
        Validates.isString(name, secondName, dateOfBirth, password, gender, emailAddress, accessLevel)
        Validates.checkInputAccessLevel(accessLevel)
        Validates.ValidatePassword(password)
        Validates.ValidateGender(gender)
        Validates.ValidateEmail(emailAddress)
        Validates.getFormattedDate(dateOfBirth) // dać tu domyślnie accLEvel = "user", mozliwosci podawania w argumencie konstrukora

        this.name = name
        this.secondName = secondName
        this.dateOfBirth = dateOfBirth
        this.password = password
        this.gender = gender
        this.emailAddress = emailAddress
        this.accessLevel = accessLevel.toLowerCase()
    }
    getAccessLevel = () => {
        return this.accessLevel
    }
}

class Admin extends User {
    constructor(name, secondName, dateOfBirth, password, gender, emailAddress, accessLevel) {
        super(name, secondName, dateOfBirth, password, gender, emailAddress, accessLevel)
    }

    setPassword = (user, newPassword) => {
        //zrobic walidacje ma user.
        Validates.isString(newPassword)
        Validates.ValidatePassword(newPassword)
        user.password = newPassword
    }
    setEmail = (user, newEmail) => {
        //zrobic walidacje ma user.
        Validates.isString(newEmail)
        Validates.ValidateEmail(newEmail)
        user.emailAddress = newEmail

    }
    setAccessLevel = (user, level) => {
        //zrobic walidacje ma user.
        Validates.isString(level)
        Validates.checkInputAccessLevel(level)
        user.accessLevel = level
    }

}

class App {
    constructor() {
        this.allUsers = []
    }
    createUser(user) {
        // ...
    }
    showAllUsers = () => {
        return this.allUsers
    }
}


const userAdmin = new Admin("Kamil", "Rozanski", "27/02/1986", "Anglia15!", "male", "motomcC#1@gmail.com", "Admin")
const userUser = new User("Patryk", "Rozanski", "27/02/1989", "Anglia15!", "male", "jajoJAJO#@gmail.com", "user")
// console.log(userAdmin.setAccessLevel(userUser, "Admin"))
console.log(userAdmin.setAccessLevel(userUser, "user"))

console.log(userAdmin)
console.log(userUser)


// const app = new App
// console.log(app.createUser(newKamil))
// console.log(app.showAllUsers())