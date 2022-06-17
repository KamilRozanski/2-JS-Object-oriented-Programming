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
        this.allUsers = []
    }

    createUser = (firstName, secondName, dateOfBirth, password, gender, emailAddress) => {
        const newUser = new User(firstName, secondName, dateOfBirth, password, gender, emailAddress)
        this.allUsers.push(newUser)
        return newUser
    }

    createAdmin = (firstName, secondName, dateOfBirth, password, gender, emailAddress) => {
        const newAdmin = new Admin(firstName, secondName, dateOfBirth, password, gender, emailAddress)
        this.allUsers.push(newAdmin)
        return newAdmin
    }

    setPassword = (user, newPassword) => {
        //set-y musi obsługiwany przez APP.js
        Validator.isString(newPassword)
        Validator.isUser(user)
        Validator.isInstanceOfUser(user)
        Validator.checkPasswordFormat(newPassword)
        user.changePassword(newPassword)
    }

    setEmail = (user, newEmail) => {
        Validator.isString(newEmail)
        Validator.isUser(user)
        Validator.isInstanceOfUser(user)
        Validator.checkEmailFormat(newEmail)
        user.changeEmail(newEmail)
    }

    setAccessLevel = (user, accLevel) => {
        Validator.isInstanceOfUser(user)
        Validator.isUserOrAdmin(user)
        user.accessLevel = accLevel
    }

    showAllUsers = () => {
        return this.allUsers
    }
}

const app = new App()

const kamil = app.createAdmin("Kamil", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
const dominika = app.createAdmin("Dominika", "Rozanska", "11/09/1999", "Anglia15!", "female", "dominika!@gmail.com")

const patryk = app.createUser("Patryk", "Rozanski", "27/02/1989", "Anglia15!", "male", "motomc1M!@gmail.com")
const krystian = app.createUser("Krystian", "Rozanski", "27/02/1989", "Anglia15!", "male", "jajoJAJO#@gmail.com")

app.setPassword(kamil, "Radzy!min5b123")

console.log(app.showAllUsers())