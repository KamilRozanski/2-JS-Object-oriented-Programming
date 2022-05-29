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
// console.log(contactOne.creationDate)
// contactOne.changeName("Roman")
// console.log(contactOne)


class Group {
    // Ma mieć: listę kontaktów oraz nazwę grupy oraz uuid
    // Ma umożliwiać: zmianę nazwy grupy, można dodać lub usunac kontakt z grupy, można sprawdzić czy kontakt istnieje w grupie
    constructor(groupName) {
        this.allGroupContacts = []
        this.groupName = groupName
        this.groupID = uuidv4()
        this.contact;
    }

    addContact = (name, lastName, email) => {
        this.contact = new Contact(name, lastName, email)
        this.allGroupContacts.push(this.contact)
    }

    removeContact = (contactName) => {
        //usówa tylko po imieniu
        return this.allGroupContacts = this.allGroupContacts.filter(el => el.name !== contactName)
    }


    checkIfContactExists = (contactDetails) => {
        const findContact = this.allGroupContacts.find(el => {
            for (const value in el) {
                if (typeof el[value] !== "function" && el[value] === contactDetails) {
                    return true
                }
            }
        })
        return findContact === undefined ? false : true
    }

    showAllGroupContacts = () => {
        // console.log(this.allGroupContacts, this.groupName)
        return this.allGroupContacts
    }

    changeGroupName = (newName) => {
        this.groupName = newName
    }
}

const males = new Group("males")
males.addContact("Kamil", "Róański", "kamil@wp.pl")
males.addContact("Patryk", "Rozanski", "patryk@mail.com")
// males.showAllGroupContacts()

const females = new Group("females")
females.addContact("Dominika", "Rozanska", "dominika@mail.com")
females.addContact("Weronika", "Rozanska", "weronika@mail.com")





class AddressBook {
    // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
    // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
    constructor(groupName) {
        this.allContacts = []
        this.groupName = groupName
        this.allGroupContacts = this.groupName

    }

    showAllContacts = () => {
        return console.log(this.allGroupContacts.showAllGroupContacts())
    }
}

const addressBook = new AddressBook(males)
console.log(addressBook.showAllContacts())














// class Store {
//     constructor(paymentProcessor) {
//         this.paymentProcessor = paymentProcessor
//     }

//     pay() {
//         return `
//             $ {
//                 this.paymentProcessor.pay(2, 20)
//             }
//             `
//     }
// }

// class AllegroPay {
//     constructor(user) {
//         this.user = user
//     }
//     pay(quantity, price) {
//         return `
//             $ {
//                 this.user
//             }
//             made a payment $ {
//                 quantity * price
//             }
//             PLN `
//     }
// }

// class AllegroPaymentProcessor {
//     constructor(user) {
//         this.allegroPay = new AllegroPay(user)
//     }

//     pay(quantity, price) {
//         return this.allegroPay.pay(quantity, price)
//     }
// }


// class MBankPay {
//     constructor(user) {
//         this.user = user
//     }
//     pay(quantity, price) {
//         return `
//             $ {
//                 this.user
//             }
//             made a payment by mBank $ {
//                 (quantity * price) * 100
//             }
//             groszy `
//     }

// }
// class MBankPaymentProcessor {
//     constructor(user) {
//         this.mBank = new MBankPay(user)
//     }

//     pay(quantity, price) {
//         return this.mBank.pay(quantity, price)
//     }
// }


// const store = new Store(new MBankPay("kamil"))