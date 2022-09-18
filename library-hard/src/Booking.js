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
        this.borrowedBookDate = ""
        this.returnBookDate = ""
        //nadpisuje daty wypozyczonych ksiazek
        this.forHowManyDaysBookCanBeBorrowed = 7
        this.borrowedBooks = []
        this.penalty = 0
        this.id = uuidv4()
    }

    addBookToBookingList = (...addBook) => {
        Validator.isInstanceOfClassMultipleArguments(addBook, Book)
        Validator.throwErrorIfBookAlreadyExistsMultipleArguments(addBook)

        this.borrowedBooks.push(...addBook)
        this.borrowedBookDate = new Date(2022, 8, 1)
    }

    removeBookFromBookingList = (...booksToRemove) => {
        Validator.isInstanceOfClassMultipleArguments(booksToRemove, Book)
        Validator.throwErrorIfBookNotExistsMultipleArguments(booksToRemove, this.borrowedBooks)

        return this.borrowedBooks = this.borrowedBooks.filter(({
            id: borrowedBookID
        }) => !booksToRemove.some(({
            id: bookToRemoveID
        }) => bookToRemoveID === borrowedBookID));
    }

    returnBook = (returnBook) => {
        Validator.isInstanceOfClass(returnBook, Book)
        Validator.throwErrorIfBookNotExists(returnBook, this.borrowedBooks)

        this.borrowedBooks = this.borrowedBooks.filter(borroweedBook => borroweedBook.id !== returnBook.id)
        this.returnBookDate = new Date()

        this.calculatePenalty() // Łamie solid?
    }

    changeForHowManyDaysBookCanBeBorrowed = (days) => {
        Validator.isNumber(days)

        this.forHowManyDaysBookCanBeBorrowed = days
    }

    howLongInDaysBookWasBorrowed = () => {
        return Math.round((this.returnBookDate - this.borrowedBookDate) / 1000 / 60 / 60 / 24)
    }

    setPenatlyAmount = (penalty) => {
        Validator.isNumber(penalty)

        return this.penalty = penalty
    }

    changePenalty = (newPenalty) => {
        Validator.isNumber(newPenalty)

        this.penalty = newPenalty
    }

    calculatePenalty = () => {
        if (this.howLongInDaysBookWasBorrowed() > this.forHowManyDaysBookCanBeBorrowed) {
            this.penalty += (this.howLongInDaysBookWasBorrowed() - this.forHowManyDaysBookCanBeBorrowed) * this.setPenatlyAmount(5)
        }
    }

    getPenaltyAmount = () => {
        return this.penalty
    }

    getBorrowedBooks = () => {
        return this.borrowedBooks
    }
}