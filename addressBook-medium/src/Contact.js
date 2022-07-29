import {
    Validator
} from "./Validator.js"
import {
    v4 as uuidv4
} from 'uuid';

export class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
    constructor(firstName, lastName, email) {
        Validator.isString(firstName)
        Validator.isString(lastName)
        Validator.checkEmail(email)

        this.firstName = firstName
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

    searchPhrase = (phrase) => {
        Validator.isString(phrase)
        const regex = /Kamil/g
        console.log(regex,phrase)
        console.log(regex.test(phrase))
        return Object.values(this).find(conatctPhrase => phrase === conatctPhrase)
    }

    getDateOfCreate = () => {
        return this.dateOfCreate
    }

    getDateOfLastModification = () => {
        return this.dateOfModification
    }
}