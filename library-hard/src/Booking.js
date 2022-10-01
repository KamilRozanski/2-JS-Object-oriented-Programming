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
        Validator.throwErrorIfInstanceOfClassIsIncorrect(user, User)

        this.user = user
        this.borrowedBookDate = ""
        this.returnBookDate = ""
        this.forHowManyDaysBookCanBeBorrowed = 7
        this.borrowedBooks = []
        this.penalty = 1
        this.id = uuidv4()
    }

    addBooksToBookingList = (addBook) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(addBook, Book)
        Validator.throwErrorIfBookAlreadyExists(addBook, this.borrowedBooks)

        // addBook.BorrowedDate = new Date()
        this.borrowedBooks.push(addBook)
    }

    removeBooksFromBookingList = (booksToRemove) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(booksToRemove, Book)
        Validator.throwErrorIfBookNotExists(booksToRemove, this.borrowedBooks)
        console.log(booksToRemove)
        this.borrowedBooks = this.borrowedBooks.filter(borroweedBook => borroweedBook.id !== booksToRemove.id)
    }

    returnBook = (returnBook) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(returnBook, Book)
        Validator.throwErrorIfBookNotExists(returnBook, this.borrowedBooks)

        this.borrowedBooks = this.borrowedBooks.filter(borroweedBook => borroweedBook.id !== returnBook.id)
        this.returnBookDate = new Date()

        this.calculatePenalty() // Łamie solid?
    }

    changeForHowManyDaysBookCanBeBorrowed = (days) => {
        Validator.throwErrorIfValueIsNotAPositiveNumber(days)

        this.forHowManyDaysBookCanBeBorrowed = days
    }

    howLongInDaysBookWasBorrowed = () => {
        return Math.round((this.returnBookDate - this.borrowedBookDate) / 1000 / 60 / 60 / 24)
    }

    changePenalty = (newPenalty) => {
        Validator.throwErrorIfValueIsNotAPositiveNumber(newPenalty)

        this.penalty = newPenalty
    }

    calculatePenalty = () => {
        if (this.howLongInDaysBookWasBorrowed() > this.forHowManyDaysBookCanBeBorrowed) {
            this.penalty += (this.howLongInDaysBookWasBorrowed() - this.forHowManyDaysBookCanBeBorrowed) * this.penalty
        }
    }

    getPenaltyAmount = () => {
        // I don use this mothod
        return this.penalty
    }

    getBorrowedBooks = () => {
        // I don use this mothod
        return this.borrowedBooks
    }
}