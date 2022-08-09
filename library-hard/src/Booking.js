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
        Validator.isInstanceOfClass(user, User)
        this.user = user
        this.borrowedBookDate = new Date()
        this.returnBookDate = new Date() // + 7 days
        this.borrowedBooks = []
        this.penalty = 0
    }
    borrowBook = (book) => {
        Validator.isInstanceOfClass(book, Book)
        this.borrowedBooks.push(book)
    }
    returnBook = (book) => {
        Validator.isInstanceOfClass(user, Book)
        this.borrowedBooks.push(book)
    }

}