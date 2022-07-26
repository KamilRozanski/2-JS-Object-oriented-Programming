import {
    Validator
} from "./Validator.js"
import {
    v4 as uuidv4
} from 'uuid';

export class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
    constructor(name, lastName, email) {
        Validator.isString(name)
        Validator.isString(lastName)
        Validator.isString(email)
        Validator.checkEmail(email)

        this.name = name
        this.lastName = lastName
        this.email = email
        this.dateOfCreate = new Date()
        this.dateOfModification = new Date()
        this.id = uuidv4()
    }

    changeFirstName = (firstName) => {
        Validator.isString(firstName)
        this.name = firstName
        this.dateOfModification = new Date()
    }

    changeLastName = (lastName) => {
        Validator.isString(lastName)
        this.lastName = lastName
        this.dateOfModification = new Date()
    }
    changeEmail = (email) => {
        Validator.checkEmail(email)
        this.email = email
        this.dateOfModification = new Date()
    }


    getDateOfCreate = () => {
        return this.dateOfCreate
    }

    getDateOfLastModification = () => {
        return this.dateOfModification
    }
}