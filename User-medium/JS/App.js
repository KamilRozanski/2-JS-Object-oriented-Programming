import {
    Validator
} from "./Validator.js"

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
        //sprawdzic kto zmienia haslo i komu.
        console.log(user)
        Validator.isAdmin(this)
        Validator.isUser(user)
        Validator.checkPasswordFormat(newPassword)
        user.changePassword(newPassword)
    }

    setEmail = (admin, user, newEmail) => {
        //Admin sam sobie powieniem miec mozliwosc zmiany email-a
        Validator.isAdmin(admin)
        Validator.isUser(user)
        Validator.checkEmailFormat(newEmail)
        user.changeEmail(newEmail)
    }

    setAdminAccessLevel = (newAdmin) => {
        // Validator.isUser(newAdmin)
        console.log(newAdmin.accessLevel)



        // this.users = this.users.filter(el => {
        //     // po id
        //     return el.emailAddress !== newAdmin.emailAddress
        // })
        // this.admins.push(new Admin(newAdmin.firstName, newAdmin.secondName, newAdmin.dateOfBirth, newAdmin.newAdmin.password, newAdmin.gender, newAdmin.emailAddress))
    }


    showAllUsers = () => {
        this.usersAndAdmins.push(this.admins, this.users)
        return this.usersAndAdmins.flat()
    }
}

const app = new App()

const kamil = app.createAdmin("Kamil", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
const dominika = app.createAdmin("Dominika", "Rozanska", "11/09/1999", "Anglia15!", "female", "dominika!@gmail.com")

const patryk = app.createUser("Patryk", "Rozanski", "27/02/1989", "Anglia15!", "male", "Patryk1!@gmail.com")
const krystian = app.createUser("Krystian", "Rozanski", "27/02/1989", "Anglia15!", "male", "jajoJAJO#@gmail.com")
// console.log(dominika)
app.setPassword(kamil, patryk, "Anglia15!!!!!")
console.log(app.showAllUsers())