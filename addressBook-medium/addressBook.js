import {
    v4 as uuidv4
} from 'https://jspm.dev/uuid';
let id = uuidv4()



class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
    constructor(name, lastName, email) {
        this.name = name
        this.lastName = lastName
        this.email = email
        this.dateOfCreation = new Date()
        this.modificationDate = false
        this.id = id
    }

    changeName = (value) => {
        this.name = value
        this.modificationDate = new Date()
    }
    changeLastName = (value) => {
        this.lastName = value
        this.modificationDate = new Date()
    }
    changeEmail = (value) => {
        this.email = value
        this.modificationDate = new Date()
    }


}
const contact = new Contact("kamil", "rozanski", "@@@")
contact.changeName("Jakil")
console.log(contact)


class Group {
    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
}

class AddressBook {
    // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
    // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}