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

    addUser = (user) => {
       Validator.isUser(user)
        this.users.push(user)
    }

    addAdmin = (admin) => {
        Validator.isAdmin(admin)
        this.admins.push(admin)
    }

    changePassword = (admin, user, newPassword) => {
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
        return this.users
    }

    showAllAdmins = () => {
        return this.admins
    }

    showAllUsersAndAdmins = () => {
        this.usersAndAdmins.push(this.admins, this.users)
        return [...this.users, ...this.admins]
    }
}

const app = new App()

const kamil = new Admin("Kamil", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
const dominika = new Admin("Dominika", "Rozanska", "11/09/1999", "Anglia15!", "female", "dominika!@gmail.com")

const patryk = new User("Patryk", "Rozanski", "27/02/1989", "Anglia15!", "male", "Patryk1!@gmail.com")
const krystian = new User("Krystian", "Rozanski", "27/02/1989", "Anglia15!", "male", "jajoJAJO#@gmail.com")

app.addUser(patryk)

console.log(app.showAllUsersAndAdmins())