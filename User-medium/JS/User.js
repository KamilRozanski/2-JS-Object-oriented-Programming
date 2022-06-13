import {
    Validator
} from "./Validator.js"

class User {
    constructor(firstName, secondName, dateOfBirth, login, password, gender, emailAddress) {
        Validator.isString(firstName)
        Validator.firstNameProvided(firstName)
        Validator.isString(secondName)
        Validator.firstNameProvided(secondName)
        Validator.checkPasswordFormat(password)
        Validator.checkGender(gender)
        Validator.checkEmailFormat(emailAddress)
        Validator.checkDate(dateOfBirth)

        this.firstName = firstName
        this.secondName = secondName
        this.dateOfBirth = dateOfBirth
        this.credentials = {
            login: login, 
            password: password,
        }
        this.gender = gender
        this.emailAddress = emailAddress
        this.accessLevel = "user"
    }
    changeName = (firstName) => {
        Validator.isString(firstName)
        Validator.isEmptyString(firstName)
        this.name = firstName
    }
    changeSecondName = (secondName) => {
        Validator.isString(secondName)
        Validator.isEmptyString(secondName)
        this.secondName = secondName
    }
    changeDateOfBirth = (dateOfBirth) => {
        this.dateOfBirth = dateOfBirth
    }
    changeGender = (gender) => {
        this.gender = gender
    }
    changePassword = (password) => {
        this.credentials.password = password;
    }
}




export {
    User
}