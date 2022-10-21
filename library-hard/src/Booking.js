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
        this.borrowedBooks = []
        this.penalty = 0
    }

    addBookToBooking = (addedBook) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(addedBook, Book)
        Validator.throwErrorIfBookAlreadyExists(addedBook, this.borrowedBooks)

        this.borrowedBooks.push(addedBook)
    }

    removeBookFromBooking = (bookToRemove) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(bookToRemove, Book)
        Validator.throwErrorIfReturnedBookNotExists(bookToRemove, this.borrowedBooks)

        this.borrowedBooks = this.borrowedBooks.filter(booking => booking.id !== bookToRemove.id)

    }

    setPenalty = (days) => {
        Validator.throwErrorIfValueIsNotAPositiveNumber(days)
        this.penalty += days
    }
}