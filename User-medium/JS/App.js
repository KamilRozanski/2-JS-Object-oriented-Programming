import {
    Validator
} from "./Validator.js"

import {
    User
} from "./User.js"
import {
    Admin
} from "./Admin.js"
// - [ ] Klasa App powinna zarządzać relacjami pomiędzy użytkownikami.
// - [ ] Zawiera listę użytkowników, pozwala tworzyć nowych użytkowników o różnych poziomach dostępu.
class App {
    constructor() {
        this.usersAndAdmins = []
        this.users = []
        this.admins = []
    }

    createUser = (firstName, secondName, dateOfBirth, password, gender, emailAddress) => {
        const newUser = new User(firstName, secondName, dateOfBirth, password, gender, emailAddress)
        this.users.push(newUser)
        return newUser
    }

    createAdmin = (firstName, secondName, dateOfBirth, password, gender, emailAddress) => {
        const newAdmin = new Admin(firstName, secondName, dateOfBirth, password, gender, emailAddress)
        this.admins.push(newAdmin)
        return newAdmin
    }

    setPassword = (user, newPassword) => {
        Validator.isString(newPassword)
        Validator.isUser(user)
        Validator.isInstanceOfUser(user)
        Validator.checkPasswordFormat(newPassword)
        user.changePassword(newPassword)
    }

    setEmail = (user, newEmail) => {
        //Admin sam sobie powieniem miec mozliwosc zmiany email-a
        Validator.isString(newEmail)
        Validator.isUser(user)
        Validator.isInstanceOfUser(user)
        Validator.checkEmailFormat(newEmail)
        user.changeEmail(newEmail)
    }

    setAccessLevel = (user, accLevel) => {
        Validator.isInstanceOfUser(user)
        Validator.isUserOrAdmin(user)
        Validator.isUserOrAdmin(accLevel)
        this.users = this.users.filter(el => {
            return el.emailAddress !== user.emailAddress
        })
        user.accessLevel = accLevel
        this.admins.push(user)
    }

    showAllUsers = () => {
        this.usersAndAdmins.push(this.admins, this.users)
        return this.usersAndAdmins.flat()
    }
}

const app = new App()

const kamil = app.createAdmin("Kamil", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
const dominika = app.createAdmin("Dominika", "Rozanska", "11/09/1999", "Anglia15!", "female", "dominika!@gmail.com")

const patryk = app.createUser("Patryk", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
const krystian = app.createUser("Krystian", "Rozanski", "27/02/1989", "Anglia15!", "male", "jajoJAJO#@gmail.com")


app.setAccessLevel(patryk, "admin")
// console.log(app.showAllUsers())