import {
    v4 as uuidv4
} from 'uuid';





class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
    constructor(name, lastName, email) {
        const date = () => {
            return new Date()
        }

        this.name = name
        this.lastName = lastName
        this.email = email
        this.creationDate = `${date().getDate()}/${date().getMonth() + 1}/${date().getFullYear()}`
        this.modificationDate = false
        this.id = uuidv4()
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


class Group {
    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
    constructor() {
        this.contacts = []
        this.group = []
        this.groupID = uuidv4()
    }

    addContact = (contact) => {
        this.contacts.push(contact)
    }

    showAllContacts = () => {
        return this.contacts
    }

}

const males = new Group()
const females = new Group()
males.addContact(new Contact("kamil", "rozanski", "mail@mail.com"))
females.addContact(new Contact("dominika", "rozanska", "dominika@mail.com"))
females.addContact(new Contact("Weronika", "rozanska", "weronika@mail.com"))

// console.log(males)
// console.log(females)
console.log(females.showAllContacts())

class AddressBook {
    // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
    // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}