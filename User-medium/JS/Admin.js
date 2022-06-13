import {
    Validator
} from "./Validator.js"
import {
    User
} from "./User.js"

class Admin extends User {
    constructor(firstName, secondName, dateOfBirth, password, gender, emailAddress) {
        super(firstName, secondName, dateOfBirth, password, gender, emailAddress)
        this.accessLevel = "admin"
    }

    setPassword = (user, newPassword) => {
        //set-y musi obsługiwany przez APP.js
        Validator.isInstanceOfUser(user)
        Validator.isUser(user)
        Validator.isString(newPassword)
        Validator.isEmptyString(newPassword)
        Validator.checkPasswordFormat(newPassword)
        user.changePassword(newPassword)
        //metoda usera
    }

    setEmail = (user, newEmail) => {
        Validator.isInstanceOfUser(user)
        Validator.isUser(user)
        Validator.isString(newEmail)
        Validator.isEmptyString(newEmail)
        Validator.checkEmailFormat(newEmail)
        user.emailAddress = newEmail
    }

    setAccessLevel = (user, accLevel) => {
        Validator.isInstanceOfUser(user)
        Validator.isUserOrAdmin(user)

        user.accessLevel = accLevel
    }

}

export {
    Admin
}


