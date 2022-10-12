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
    }

    addBooksToBooking = (addBook) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(addBook, Book)
        Validator.throwErrorIfBookAlreadyExists(addBook, this.borrowedBooks)
        // console.log(addBook)
        const book = {
            book: addBook.title,
            bookId: addBook.id,
            forHowManyDaysBookCanBeBorrowed: 7,
            borrowedDate: new Date("2022 / 10 / 2"),
            returnedDate: ""
        }

        this.borrowedBooks.push(book)
    }

    removeBooksFromBooking = (bookToRemove) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(bookToRemove, Book)
        Validator.throwErrorIfReturnedBookNotExists(bookToRemove, this.borrowedBooks)

        this.borrowedBooks = this.borrowedBooks.filter(booking => {
            return booking.bookId !== bookToRemove.id
        })
    }

    // changeForHowManyDaysBookCanBeBorrowed = (days) => {
    //     Validator.throwErrorIfValueIsNotAPositiveNumber(days)

    //     this.forHowManyDaysBookCanBeBorrowed = days
    // }

    // howLongInDaysBookWasBorrowed = (borrowedDate, returnedDate) => {
    //     const days = Math.floor((returnedDate - borrowedDate) / (24 * 60 * 60 * 1000));
    //     //pracowac na Obj Date
    //     return days
    // }

    // changePenalty = (newPenalty) => {
    //     Validator.throwErrorIfValueIsNotAPositiveNumber(newPenalty)

    //     this.penalty = newPenalty
    // }

    // calculatePenalty = () => {
    //     console.log(this.howLongInDaysBookWasBorrowed(), this.forHowManyDaysBookCanBeBorrowed)
    //     const days = this.howLongInDaysBookWasBorrowed()
    //     if (this.howLongInDaysBookWasBorrowed() > this.forHowManyDaysBookCanBeBorrowed) {
    //         this.penalty += (this.howLongInDaysBookWasBorrowed() - this.forHowManyDaysBookCanBeBorrowed) * this.penalty
    //     }
    // }

    getAllBorroweedBooks = () => {
        return this.borrowedBooks
    }
}