import {
    Validator
} from "./Validator.js"
import {
    v4 as uuidv4
} from 'uuid';
uuidv4()

export class User {
    constructor(firstName, secondName, dateOfBirth, password, gender, emailAddress) {
        Validator.isString(firstName)
        Validator.isString(secondName)
        Validator.checkFirstName(firstName)
        Validator.checkSecondName(secondName)
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
        this.id = uuidv4()
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
        Validator.checkEmailFormat(email)
        this.emailAddress = email
    }

    changeDateOfBirth = (dateOfBirth) => {
        Validator.checkDate(dateOfBirth)
        this.dateOfBirth = dateOfBirth
    }

    changeGender = (gender) => {
        Validator.checkGender(gender)
        this.gender = gender
    }

    changePassword = (password) => {
        Validator.checkPasswordFormat(password)
        this.password = password
    }
}