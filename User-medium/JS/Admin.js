import {
    Validator
} from "./Validator.js"
import {
    User
} from "./User.js"

export class Admin extends User {
    constructor(firstName, secondName, dateOfBirth, password, gender, emailAddress) {
        super(firstName, secondName, dateOfBirth, password, gender, emailAddress)
        this.accessLevel = "admin"
    }

    setPassword = (user, newPassword) => {
        //set-y musi obsługiwany przez APP.js
        Validator.isString(newPassword)
        Validator.isUser(user)
        Validator.isInstanceOfUser(user)
        Validator.checkPasswordFormat(newPassword)
        user.changePassword(newPassword)
        //metoda usera
    }

    setEmail = (user, newEmail) => {
        Validator.isString(newEmail)
        Validator.isUser(user)
        Validator.isInstanceOfUser(user)
        Validator.checkEmailFormat(newEmail)
        user.changeEmail = newEmail
    }

    setAccessLevel = (user, accLevel) => {
        Validator.isInstanceOfUser(user)
        Validator.isUserOrAdmin(user)

        user.accessLevel = accLevel
    }

}