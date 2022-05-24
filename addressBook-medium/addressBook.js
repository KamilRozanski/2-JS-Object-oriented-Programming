import {
    v4 as uuidv4
} from 'uuid';


class Contact {
    // Ma mieć: Imie, Nazwisko, adres-emial, datę modyfikacji i utworzenia, uuid
    // Ma umożliwiać: aktualizację datę modyfikacji, pozwalac na modyfikację imienia, nazwiska oraz adresu email
    constructor(name, lastName, email) {
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
        this.name = value
        this.modificationDate = this.getDate()
    }

    changeLastName = (value) => {
        this.lastName = value
        this.modificationDate = this.getDate()
    }
    changeEmail = (value) => {
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

const contactOne = new Contact("Kamil", "Rozanski", "mail@mail.com")
const contactTwo = new Contact("Patryk", "Rozanski", "patryk@mail.com")
const contactThree = new Contact("Dominika", "Rozanska", "dominika@mail.com")
const contactFour = new Contact("Weronika", "Rozanska", "weronika@mail.com")
// console.log(contactOne.creationDate)
// contactOne.changeName("Roman")
// console.log(contactOne)


class Group {
    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
    constructor(groupName) {
        this.allContacts = []
        this.groupName = groupName
        this.groupID = uuidv4()
    }

    addContact = (contact) => {
        this.allContacts.push(contact)
    }

    removeContact = (contactName) => {
        //usówa tylko po imieniu
        return this.allContacts = this.allContacts.filter(el => el.name !== contactName)
    }


    checkIfContactExists = (contactDetails) => {
        const findContact = this.allContacts.find(el => {
            for (const value in el) {
                if (typeof el[value] !== "function" && el[value] === contactDetails) {
                    return true
                }
            }
        })
        return findContact === undefined ? false : true
    }

    showAllContacts = () => {
        return this.allContacts
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

// console.log(males.removeContact("Kamil"))
// console.log(males.checkIfContactExists("patryk@mail.com"))
// console.log(males)

class AddressBook {
    // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
    // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
    constructor(groupName) {
        this.allContacts = new Group(groupName)
    }
    show() {
        console.log(this.allContacts.showAllContacts())
    }

}

const addressBook = new AddressBook("elo")
// console.log(addressBook.show())














class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor
    }

    pay() {
        return `
            $ {
                this.paymentProcessor.pay(2, 20)
            }
            `
    }
}

class AllegroPay {
    constructor(user) {
        this.user = user
    }
    pay(quantity, price) {
        return `
            $ {
                this.user
            }
            made a payment $ {
                quantity * price
            }
            PLN `
    }
}

class AllegroPaymentProcessor {
    constructor(user) {
        this.allegroPay = new AllegroPay(user)
    }

    pay(quantity, price) {
        return this.allegroPay.pay(quantity, price)
    }
}


class MBankPay {
    constructor(user) {
        this.user = user
    }
    pay(quantity, price) {
        return `
            $ {
                this.user
            }
            made a payment by mBank $ {
                (quantity * price) * 100
            }
            groszy `
    }

}
class MBankPaymentProcessor {
    constructor(user) {
        this.mBank = new MBankPay(user)
    }

    pay(quantity, price) {
        return this.mBank.pay(quantity, price)
    }
}


const store = new Store(new MBankPay("kamil"))