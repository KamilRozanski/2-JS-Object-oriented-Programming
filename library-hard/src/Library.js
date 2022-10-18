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

    borrowBooks = (user, ...books) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(user, User)
        Validator.throwErrorIfUserNotExists(user, this.allUsers)
        Validator.isInstanceOfClassMultipleArguments(books, Book)
        Validator.throwErrorIfBookNotExistsMultipleArguments(books, this.allBooks)

        const isBookingExists = this.allBookings.find(booking => booking.user.id === user.id)

        if (!isBookingExists) {
            const createdBooking = new Booking(user)
            books.forEach(book => {
                createdBooking.addBookToBooking(book)
                this.updateBooksList(book)
            })
            this.allBookings.push(createdBooking)
        }

        if (isBookingExists) {
            books.forEach(book => {
                isBookingExists.addBooksToBooking(book)
                this.updateBooksList(book)
            })
        }
    }

    returnBooks = (...booksToReturn) => {
        Validator.isInstanceOfClassMultipleArguments(booksToReturn, Book)
        // Validator.throwErrorIfBookNotExistsMultipleArguments(booksToReturn, this.allBookings) does not works

        this.setReturnedBooksDate(booksToReturn)
        //caclulatePenalty
        this.calculatePenalty(booksToReturn)
        //removeBook from booking
        //add book to Library


    }

    setReturnedBooksDate = (booksToReturn) => {
        // Validator.isArray(booksToReturnArray)

        this.allBookings.filter(booking => {
            booking.borrowedBooks.some(el => {
                if (this.getReturnedBooksId(booksToReturn).includes(el.bookId)) {
                    el.returnedDate = new Date()
                }
            })
        })
    }


    calculatePenalty = (booksToReturn) => {
        this.allBookings.filter(booking => {
            booking.borrowedBooks.forEach(el => {
                console.log(booking)
            })
        })
    }

    updateBooksList = (booksToUpdate) => {
        return this.allBooks = this.allBooks.filter(book => book.id !== booksToUpdate.id)
    }

    getReturnedBooksId = (booksToReturn) => {
        // Validator.isArray(booksToReturnArray)

        return booksToReturn.map(returnedBook => {
            return returnedBook.id
        })
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
        return this.allBooks
    }
}