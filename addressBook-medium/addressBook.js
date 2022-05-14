// import {
//     v4 as uuidv4
// } from 'uuid';

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
        // this.id = uuidv4()
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

const contactOne = new Contact("Kamil", "Rozanski", "mail@mail.com")
const contactTwo = new Contact("Patryk", "Rozanski", "mail@mail.com")
const contactThree = new Contact("Dominika", "Rozanska", "dominika@mail.com")
const contactFour = new Contact("Weronika", "Rozanska", "weronika@mail.com")


class Group {
    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
    constructor(groupName) {
        this.group = []
        this.groupName = groupName
        // this.groupID = uuidv4()
    }

    addContact = (contact) => {
        this.group.push(contact)
    }

    removeContact = (contactName) => {
        //do poprawy usuwanie uzytkownika. Mozna usunac go nie tylko po imieniu.
        this.group = this.group.filter(el => el.name !== contactName)
    }


    checkIfContactIsInGroup = (contactDetail) => {
        const result = this.group.find((obj, index) => Object.keys(obj).some(key => {
            // console.log(obj[key])
            if (typeof obj[key] !== "function") {
                // console.log(obj[key], index)
                return obj[key] === contactDetail
            }
            // return console.log(obj[key], index + "out")
        }))
        return result
    }

    showAllContacts = () => {
        return this.group
    }

    changeGroupName = (newName) => {
        this.groupName = newName
    }
}

const males = new Group("males")
const females = new Group("females")

males.addContact(contactOne)
males.addContact(contactTwo)
females.addContact(contactThree)
females.addContact(contactFour)

console.log(males)
console.log(females)
class AddressBook {
    // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
    // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
}