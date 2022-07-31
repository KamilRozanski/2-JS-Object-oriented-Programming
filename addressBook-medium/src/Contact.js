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
        Validator.isStringHasRequiredCharacters(firstName)
        Validator.isStringHasRequiredCharacters(lastName)
        Validator.checkEmailFormat(email)

        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.dateOfCreate = new Date()
        this.dateOfModification = new Date()
        this.id = uuidv4()
    }

    changeFirstName = (firstName) => {
        Validator.isStringHasRequiredCharacters(firstName)
        this.firstName = firstName
        this.dateOfModification = new Date()
    }

    changeLastName = (lastName) => {
        Validator.isStringHasRequiredCharacters(lastName)
        this.lastName = lastName
        this.dateOfModification = new Date()
    }
    changeEmail = (email) => {
        Validator.checkEmailFormat(email)
        this.email = email
        this.dateOfModification = new Date()
    }

    searchPhrase = (phrase) => {
        Validator.isString(phrase)
        const regex = new RegExp(phrase, "gi");
        if (regex.test(Object.values(this))) {
            return this
        }
    }

    getDateOfCreate = () => {
        return this.dateOfCreate
    }

    getDateOfLastModification = () => {
        return this.dateOfModification
    }
}