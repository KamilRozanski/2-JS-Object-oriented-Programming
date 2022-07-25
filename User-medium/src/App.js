import {
    Validator
} from "./Validator.js"

import {
    Utilities
} from "./Utilities.js"

import {
    User
} from "./User.js"
import {
    Admin
} from "./Admin.js"


class App {
    constructor() {
        this.usersAndAdmins = []
        this.users = []
        this.admins = []
    }

    createUser = (firstName, secondName, dateOfBirth, password, gender, emailAddress) => {
        //dodac oddzielna klasee dla pushowania Usera
        const newUser = new User(firstName, secondName, dateOfBirth, password, gender, emailAddress)
        Utilities.pushToArray(newUser, this.users)
        return newUser
    }

    createAdmin = (firstName, secondName, dateOfBirth, password, gender, emailAddress) => {
        const newAdmin = new Admin(firstName, secondName, dateOfBirth, password, gender, emailAddress)
        Utilities.pushToArray(newAdmin, this.admins)
        return newAdmin
    }

    changePassword = (admin, user, newPassword) => {
        //z set-a na change
        Validator.isAdmin(admin)
        Validator.isUser(user)
        Validator.checkPasswordFormat(newPassword)
        user.changePassword(newPassword)
    }

    changeEmail = (admin, user, newEmail) => {
        Validator.isAdmin(admin)
        Validator.isUser(user)
        Validator.checkEmailFormat(newEmail)
        user.changeEmail(newEmail)
    }

    showAllUsers = () => {
        this.usersAndAdmins.push(this.admins, this.users)
        return this.usersAndAdmins.flat()
        // return [...this.users, ...this.admins];
        // poprawic nazwe metody
    }
}

const app = new App()

const kamil = app.createAdmin("Kamil", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
const dominika = app.createAdmin("Dominika", "Rozanska", "11/09/1999", "Anglia15!", "female", "dominika!@gmail.com")

const patryk = app.createUser("Patryk", "Rozanski", "27/02/1989", "Anglia15!", "male", "Patryk1!@gmail.com")
const krystian = app.createUser("Krystian", "Rozanski", "27/02/1989", "Anglia15!", "male", "jajoJAJO#@gmail.com")

const user = new User("kamil", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
console.log(user)