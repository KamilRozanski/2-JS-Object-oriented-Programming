import {
    Validator
} from "./Validator.js";

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
        this.forHowManyDaysBookCanBeBorrowed = 7
        this.borrowedBooks = []
        this.penalty = 1
    }

    addBooksToBookingList = (addBook) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(addBook, Book)
        Validator.throwErrorIfBookAlreadyExists(addBook, this.borrowedBooks)

        const book = {
            book: addBook.title,
            bookId: addBook.id,
            borrowedDate: new Date("2022 / 09 / 2"),
            returnedDate: ""
        }

        this.borrowedBooks.push(book)
    }

    removeBooksFromBookingList = (bookToRemove) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(bookToRemove, Book)
        // Validator.throwErrorIfBookNotExists(returnBook, this.borrowedBooks)

        this.borrowedBooks.forEach(obj => {
            if (obj.bookId === bookToRemove.id) {
                return obj.returnedDate = new Date()
            }
        })
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
}