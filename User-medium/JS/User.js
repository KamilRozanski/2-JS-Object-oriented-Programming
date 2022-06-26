import {
    Validator
} from "./Validator.js"

export class User {
    constructor(firstName, secondName, dateOfBirth, password, gender, emailAddress) {
        Validator.isString(firstName)
        Validator.isString(secondName)
        Validator.firstNameProvided(firstName)
        Validator.firstNameProvided(secondName)
        Validator.checkPasswordFormat(password)
        Validator.checkGender(gender)
        Validator.checkEmailFormat(emailAddress)
        Validator.checkDate(dateOfBirth)

        this.firstName = firstName
        this.secondName = secondName
        this.dateOfBirth = dateOfBirth
        this.password = password
        this.gender = gender
        this.emailAddress = emailAddress
        this.accessLevel = "user"
    }

    changeName = (firstName) => {
        Validator.isString(firstName)
        this.name = firstName
    }

    changeSecondName = (secondName) => {
        Validator.isString(secondName)
        this.secondName = secondName
    }

    changeEmail = (email) => {
        Validator.isString(email)
        Validator.checkEmailFormat(email)
        this.emailAddress = email
    }

    changeDateOfBirth = (dateOfBirth) => {
        this.dateOfBirth = dateOfBirth
    }

    changeGender = (gender) => {
        Validator.checkGender(gender)
        this.gender = gender
    }

    changePassword = (password) => {
        Validator.checkPasswordFormat(password)
        this.password = password;
    }
}