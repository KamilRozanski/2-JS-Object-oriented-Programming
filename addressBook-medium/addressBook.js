import {
    v4 as uuidv4
} from 'uuid';





class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
    constructor(name, lastName, email) {
        const date = new Date()

        this.name = name
        this.lastName = lastName
        this.email = email
        this.creationDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
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
    constructor(groupName) {
        this.group = []
        this.groupName = groupName
        this.groupID = uuidv4()
    }

    addContact = (contact) => {
        this.group.push(contact)
    }

    removeContact = (contactDetail) => {
        //do poprawy usuwanie uzytkownika. Mozna usunac go nie tylko po imieniu.
        this.group = this.group.filter(el => el.name !== contactDetail)
    }


    checkIfContactIsInGroup = (contactDetail) => {
        const result = this.group.find(obj => Object.keys(obj).some(key => {
            if (typeof obj[key] !== "function") {
                return obj[key] === contactDetail
            }
        }))

        if (result) {
            return result
        } else {
            throw new Error(`${contactDetail} does not exist`)
        }
    }


    showAllContacts = () => {
        return this.group
    }

    changeGroupName = (newName) => {
        this.groupName = newName
    }
}

class AddressBook {
    // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
    // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}
const males = new Group("males")
const females = new Group("females")

males.addContact(new Contact("Kamil", "rozanski", "mail@mail.com"))
males.addContact(new Contact("Patryk", "rozanski", "mail@mail.com"))
males.checkIfContactIsInGroup("Kamil")
// males.removeContact("Kamil")
// console.log(males)

females.addContact(new Contact("Dominika", "rozanska", "dominika@mail.com"))
females.addContact(new Contact("Weronika", "rozanska", "weronika@mail.com"))
// console.log(females.showAllContacts())