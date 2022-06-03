import {
    Validator
} from "./Validator.js"
import {
    Contact
} from "./Contact.js";
import {
    Group
} from "./Group.js";



export class AddressBook {
    // Ma mieć: listę wszystkich kontaktów, listę grup kontaktów 
    // Ma umożliwiać: szukanie kontaktu po frazie, dodawanie/usuwanie/modyfikacje nowych kontaktów, dodawanie/usuwanie/modyfikacje nowych grup
    constructor() {
        this.allContacts = []
        this.allGroup = []

    }

    addContactToList = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        this.allContacts.push(contact)
    }

    removeContactFromList = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        this.allContacts = this.allContacts.filter(el => el.id !== contact.id)
    }

    searchContact = (contact) => {
        Validator.isInstanceOfClass(contact, Contact)
        return this.allContacts.find(el => el.id === contact.id)
    }

    showAllContacts = () => {
        //Why return dosent show the this.allContacts Arr in console
        return this.allContacts
    }

    addGroupToList = (group) => {
        Validator.isInstanceOfClass(group, Group)
        this.allGroup.push(group)
    }

    showAllGroups = () => {
        //Why return dosent show the this.allContacts Arr in console
        return this.allGroup
    }
}























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