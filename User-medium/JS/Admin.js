import {
    Validator
} from "./Validator.js"
import {
    User
} from "./User.js"

class Admin {
    constructor(name, secondName, dateOfBirth, password, gender, emailAddress) {
        Validator.isStrings(name, secondName)
        Validator.paraIsNotEmpty(name, secondName)
        Validator.checkPassword(password)
        Validator.checkGender(gender)
        Validator.checkEmail(emailAddress)
        Validator.checkDate(dateOfBirth)

        this.name = name
        this.secondName = secondName
        this.dateOfBirth = dateOfBirth
        this.password = password
        this.gender = gender
        this.emailAddress = emailAddress
        this.accessLevel = "admin"
    }

    setPassword = (user, newPassword) => {
        Validator.checkPassword(newPassword)
        if (user.accessLevel === "user") {
            user.password = newPassword
        } else {
            throw new Error("You can not change a password")
        }
        this.password = newPassword
    }
    setEmail = (user, newEmail) => {
        Validator.checkEmail(newEmail)
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