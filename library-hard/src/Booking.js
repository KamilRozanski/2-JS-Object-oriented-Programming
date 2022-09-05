import {
    Validator
} from "./Validator.js";

import {
    v4 as uuidv4
} from 'uuid';

import {
    User
} from "./User.js";

import {
    Book
} from "./Book.js";

// Booking dostaje użytkownika w constructorze

// Ma mieć: datę wypożyczenia, datę zwrotu (+7d od wypożyczenia), listę wypożyczonych książek, kara

// Ma umożliwiać: 
// - usuwanie i dodawanie książki do listy wyporzyczonych książek
// - zwrot - jeśli odbędzie się terminowo kara jest 0 - jesli nie - 
// każdy dzień zwłoki to naliczenie jakiejś kary. 


export class Booking {
    constructor(user) {
        Validator.isInstanceOfClass(user, User)
        this.user = user
        this.borrowedBookDate = new Date()
        this.returnBookDate = ""
        this.forHowManyDaysBookCanBeBorrowed = 7
        this.borrowedBooks = []
        this.penalty = 0
        this.id = uuidv4()
    }

    addBookToBookingList = (addBook) => {
        Validator.isInstanceOfClass(addBook, Book)
        Validator.throwErrorIfBookAlreadyExists(addBook, this.borrowedBooks)

        this.borrowedBooks.push(addBook)
        this.borrowedBookDate = new Date("August 2, 2022") // Przykładowa data
    }

    removeBookFromBookingList = (removeBook) => {
        Validator.isInstanceOfClass(removeBook, Book)
        Validator.throwErrorIfBookNotExists(removeBook, this.borrowedBooks)

        this.borrowedBooks = this.borrowedBooks.filter(book => book.id !== removeBook.id)
    }

    returnBook = (returnBook) => {
        Validator.isInstanceOfClass(returnBook, Book)
        Validator.throwErrorIfBookNotExists(returnBook, this.borrowedBooks)
        //Po zwrocie ksiazek po terminie kara jest naliczana tylko za jedną ksiazke.
        this.borrowedBooks = this.borrowedBooks.filter(borroweedBook => borroweedBook.id !== returnBook.id)
        this.returnBookDate = new Date() // Date.now() Jaka to róznica??

        this.calculatePenalty() // Łamie solid?
        this.getPenaltyAmount()
    }

    changeForHowManyDaysBookCanBeBorrowed = (days) => {
        Validator.isNumber(days)

        this.forHowManyDaysBookCanBeBorrowed = days
    }

    howLongInDaysBookWasBorrowed = () => {
        return Math.round((this.returnBookDate - this.borrowedBookDate) / 1000 / 60 / 60 / 24)
    }

    setPenatly = (penalty) => {
        Validator.isNumber(penalty)

        return this.penalty = penalty
    }

    changePenalty = (newPenalty) => {
        Validator.isNumber(newPenalty)
        this.penalty = newPenalty
    }

    calculatePenalty = () => {
        this.doYouHaveToPayPenalty = this.howLongInDaysBookWasBorrowed() > this.forHowManyDaysBookCanBeBorrowed

        if (this.doYouHaveToPayPenalty) {
            this.penalty = (this.howLongInDaysBookWasBorrowed() - this.forHowManyDaysBookCanBeBorrowed) * this.setPenatly(5)
        }
    }

    getPenaltyAmount = () => {
        return this.penalty
    }

    getBorrowedBooks = () => {
        return this.borrowedBooks
    }
}