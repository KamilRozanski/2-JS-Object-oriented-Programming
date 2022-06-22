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
        this.creationDate = new Date()
        this.modificationDate = new Date()
        this.id = uuidv4()
    }

    changeFirstName = (name) => {
        Validator.isString(name)
        this.name = name
        this.modificationDate = new Date()
    }

    changeLastName = (name) => {
        Validator.isString(name)
        this.lastName = name
        this.modificationDate = new Date()
    }
    changeEmail = (email) => {
        Validator.isString(email)
        Validator.checkEmail(email)
        this.email = email
        this.modificationDate = new Date()
    }

    creationDate = () => {
        return this.creationDate
    }

    dateOfLastModification = () => {
        return this.modificationDate
    }
}