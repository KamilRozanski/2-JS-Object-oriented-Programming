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

    borrowBook = (user, book) => {
        Validator.throwErrorIfInstanceOfClassIsIncorrect(user, User)
        Validator.throwErrorIfUserNotExists(user, this.allUsers)
        Validator.throwErrorIfInstanceOfClassIsIncorrect(book, Book)
        Validator.throwErrorIfReturnedBookNotExists(book, this.allBooks)

        const createdBooking = new Booking(user)
        createdBooking.borrowedDate = new Date("2022-10-01")
        createdBooking.addBookToBooking(book)
        this.allBookings.push(createdBooking)
        this.removeBook(book)

    }


    returnBooks = (...booksToReturn) => {
        Validator.isInstanceOfClassMultipleArguments(booksToReturn, Book)
        Validator.throwErrorIfReturnedBookNotExistsMultipleArguments(booksToReturn, this.allBookings)

        this.allBookings.filter(booking => {
            booking.getBorrowedBooks().forEach(borrowedBook => {
                if (this.getBooksToReturnIDs(booksToReturn).includes(borrowedBook.id)) {
                    booking.removeBookFromBooking(borrowedBook)
                    this.calculatePenalty(booking.borrowedDate)
                    this.addBook(borrowedBook)
                }
            })
        })
    }

    calculatePenalty = (borrowedDate, fee = 1) => {
        Validator.throwErrorIfValueIsNotAPositiveNumber(fee)
        Validator.throwErrorIfInstanceOfClassIsIncorrect(borrowedDate, Date)

        const howLongBookWasBorrowed = Math.floor((new Date() - borrowedDate) / (24 * 60 * 60 * 1000));
        if (this.howLongBookCanBeBorrowed < howLongBookWasBorrowed) {
            console.log(`You returned book with delay. You should pay $${fee * howLongBookWasBorrowed - this.howLongBookCanBeBorrowed} fee.`)
        }
    }

    getAllBooks = () => {
        return this.allBooks
    }

    getBooksToReturnIDs(booksToReturn) {
        return booksToReturn.map(bookToReturn => {
            return bookToReturn.id
        })
    }

    getAllBookings = () => {
        return this.allBookings
    }
}