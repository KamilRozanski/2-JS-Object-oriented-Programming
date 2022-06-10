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
        Validator.isString(newPassword)
        Validator.isEmptyString(newPassword)
        Validator.checkPasswordFormat(newPassword)
        console.log(user.accessLevel === "user")
        if (user.accessLevel === "user") {
            user.password = newPassword
        } else {
            throw new Error("You can not change a password")
        }
    }
    setEmail = (user, newEmail) => {
        Validator.isString(newEmail)
        Validator.isEmptyString(newEmail)
        Validator.checkEmailFormat(newEmail)
        if (user.accessLevel === "user") {
            user.emailAddress = newEmail
        } else {
            throw new Error("You can not change an email")
        }
        this.emailAddress = newEmail
    }
    setAccessLevel = (user, accLevel) => {
        // console.log(app.allUsers[0].setAccessLevel(app.allUsers[2], "admin"))
        if (user.accessLevel === "user") {
            user.accessLevel = accLevel
        } else {
            throw new Error("You can not change a level access")
        }
    }

}

export {
    Admin
}