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
        Validator.isEmptyString(name, lastName, email)
        Validator.isStrings(name, lastName, email)
        Validator.checkEmail(email)
        this.addZero = (i) => {
            if (i < 10) {
                i = "0" + i
            }
            return i;
        }
        this.getDate = () => {
            const date = new Date()
            let day = this.addZero(date.getDate())
            let month = this.addZero(date.getMonth() + 1)
            let year = date.getFullYear()

            let hours = this.addZero(date.getHours())
            let minutes = this.addZero(date.getMinutes())
            let seconds = this.addZero(date.getSeconds())

            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
        }

        this.name = name
        this.lastName = lastName
        this.email = email
        this.creationDate = this.getDate()
        this.modificationDate = false
        this.id = uuidv4()
    }

    changeName = (value) => {
        Validator.isEmptyString(value)
        Validator.isStrings(value)
        this.name = value
        this.modificationDate = this.getDate()
    }

    changeLastName = (value) => {
        Validator.isEmptyString(value)
        Validator.isStrings(value)
        this.lastName = value
        this.modificationDate = this.getDate()
    }
    changeEmail = (value) => {
        Validator.isEmptyString(value)
        Validator.isStrings(value)
        Validator.checkEmail(email)
        this.email = value
        this.modificationDate = this.getDate()
    }

    creationDate() {
        return this.creationDate
    }

    dateOfLastModification() {
        return this.modificationDate
    }
}