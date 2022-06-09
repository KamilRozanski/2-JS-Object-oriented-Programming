import {
    Validator
} from "./Validator.js"

class User {
    constructor(name, secondName, dateOfBirth, password, gender, emailAddress) {
        Validator.isStrings(name, secondName)
        Validator.paraIsNotEmpty(name, secondName) //do poprawy.
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
        this.accessLevel = "user"
    }
    changeName = (name) => {
        //dodac walidacje do metod
        this.name = name

    }
    changeSecondName = (value) => {
        this.secondName = value
    }
    changeDateOfBirth = (value) => {
        this.dateOfBirth = value
    }
    changeGender = (value) => {
        this.gender = value
    }
}

export {
    User
}