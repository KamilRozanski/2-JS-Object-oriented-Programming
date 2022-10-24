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
        this.howLongBookCanBeBorrowed = 14
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
        Validator.throwErrorIfInstanceOfClassIsIncorrect(book, Book)
        Validator.throwErrorIfReturnedBookNotExists(book, this.allBooks)

        const createdBooking = new Booking(user)
        createdBooking.borrowedDate = new Date()
        createdBooking.addBookToBooking(book)
        this.allBookings.push(createdBooking)
        this.removeBook(book)

    }


    returnBooks = (...booksToReturn) => {
        Validator.isInstanceOfClassMultipleArguments(booksToReturn, Book)
        Validator.throwErrorIfReturnedBookNotExistsMultipleArguments(booksToReturn, this.allBookings) //do poprawy

        this.allBookings.forEach(booking => {
            booking.borrowedBooks.forEach(book => {
                booksToReturn.map(bookToReturn => {
                    if (bookToReturn.id === book.id) {
                        booking.removeBookFromBooking(book)
                        this.addBook(book)
                        return this.calculatePenalty(book.borrowedDate, 1)
                    }
                })
            })
        })
    }

    calculatePenalty = (borrowedDate, fee) => {
        Validator.throwErrorIfValueIsNotAPositiveNumber(fee)
        Validator.throwErrorIfInstanceOfClassIsIncorrect(borrowedDate, Date)

        const howLongBookWasBorrowed = Math.floor((new Date() - borrowedDate) / (24 * 60 * 60 * 1000));
        if (this.howLongBookCanBeBorrowed < howLongBookWasBorrowed) {
            return fee * howLongBookWasBorrowed - this.howLongBookCanBeBorrowed
        }
    }

    getAllBooks = () => {
        return this.allBooks
    }

    getAllBookings = () => {
        return this.allBookings
    }
}