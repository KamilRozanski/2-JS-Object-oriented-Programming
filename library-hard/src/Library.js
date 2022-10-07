import {
    Validator
} from "./Validator.js"
import {
    User
} from "./User.js"
import {
    Booking
} from "./Booking.js";
import {
    Book
} from "./Book.js"

// Ma miec: listę książek, listę książek dostępnych (które nie zostały wypożyczone),
// lista wyporzyczeń, lista użytkowników

// Ma umożliwiać: 
// - dodawanie książek do listy
// - usuwanie książek z listy
// - wypożyczanie książki dla usera X
// - oddanie wypożyczania książki

export class Library {
    constructor() {
        this.allUsers = []
        this.allBooks = []
        this.allBookings = []
    }

    addUser = (user) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(user, User)
        Validator.throwErrorIfUserAlreadyExists(user, this.allUsers)
        this.allUsers.push(user)
    }

    removeUser = (user) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(user, User)
        Validator.throwErrorIfUserNotExists(user, this.allUsers)

        this.allUsers = this.allUsers.filter(existUser => existUser.id !== user.id)
    }

    addBook = (book) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(book, Book)
        Validator.throwErrorIfBookAlreadyExists(book, this.allBooks)

        this.allBooks.push(book)
    }

    removeBook = (bookToRemove) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(bookToRemove, Book)
        Validator.throwErrorIfBookNotExists(bookToRemove, this.allBooks)

        this.allBooks = this.allBooks.filter(bookInArray => bookInArray.id !== bookToRemove.id)
    }

    borrowBooks = (user, book) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(user, User)
        Validator.throwErrorIfUserNotExists(user, this.allUsers)
        // Validator.isInstanceOfClassMultipleArguments(book, Book)
        // Validator.throwErrorIfBookNotExistsMultipleArguments(books, this.allBooks)

        const isBookingExists = this.allBookings.find(booking => booking.user.id === user.id)

        if (!isBookingExists) {
            const createdBooking = new Booking(user)
            createdBooking.addBooksToBookingList(book)
            this.allBookings.push(createdBooking)
        }

        if (isBookingExists) {
            isBookingExists.addBooksToBookingList(book)
        }
    }

    returnBook = (user, bookToReturn) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(user, User)
        Validator.throwErrorIfInstanceOfClassIsIncorrect(bookToReturn, Book)
        Validator.throwErrorIfBookNotExists(bookToReturn, this.allBooks)

        this.allBookings.forEach(booking => {
            if (booking.user.id === user.id) {
                booking.returnBook(bookToReturn)
            }
        })

        this.upDateAllAvaiableBooks(bookToReturn)
    }

    getAllUsers = () => {
        return this.allUsers
    }

    getAllBooks = () => {
        return this.allBooks
    }

    getAllBookings = () => {
        return this.allBookings
    }

    getAvaiableBooks = () => {
        return this.allAvaiableBooks
    }
}