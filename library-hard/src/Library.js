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
        this.allAvaiableBooks = []
        this.allBorrowedBooks = []
    }

    addUser = (user) => {
        Validator.isInstanceOfClass(user, User)
        Validator.throwErrorIfUserAlreadyExists(user, this.allUsers)
        this.allUsers.push(user)
    }

    removeUser = (user) => {
        Validator.isInstanceOfClass(user, User)
        Validator.throwErrorIfUserNotExists(user, this.allUsers)

        this.allUsers = this.allUsers.filter(existUser => existUser.id !== user.id)
    }

    addBook = (book) => {
        Validator.isInstanceOfClass(book, Book)
        Validator.throwErrorIfBookAlreadyExists(book, this.allBooks)

        this.allBooks.push(book)
    }

    removeBook = (removeBook, quantity = 1) => {
        Validator.throwErrorIfBookNotExists(removeBook, this.allBooks)
        Validator.isInstanceOfClass(removeBook, Book)
        Validator.isNumber(quantity)
        Validator.throwErrorIfQuantityIsSmallerThanZero(quantity)

        return this.allBooks.find(bookInArray => {
            if (bookInArray.id === removeBook.id) {
                let updatedQuantity = bookInArray.quantity - quantity
                bookInArray.changeQuantity(updatedQuantity)
            }
        })
    }

    createBooking = (user, book) => {
        Validator.isInstanceOfClass(user, User)
        Validator.throwErrorIfUserNotExists(user, this.allUsers)
        Validator.isInstanceOfClass(book, Book)
        Validator.throwErrorIfBookNotExists(book, this.allBooks)

        const isBookingAlreadyExists = this.allBookings.find(bookingsArray => {
            if (bookingsArray.user.id === user.id) {
                bookingsArray.addBookToBookingList(book) // przepuszcza duble
                return true
            }
            return false
        })

        if (!isBookingAlreadyExists) {
            const createdBooking = new Booking(user)
            createdBooking.addBookToBookingList(book)
            this.allBookings.push(createdBooking)
        }
    }

    removeBooking = (user) => {
        Validator.isInstanceOfClass(user, User)
        Validator.throwErrorIfUserNotExists(user, this.allUsers)
        Validator.throwErrorIfBookingNotExists(user, this.allBookings)

        this.allBookings = this.allBookings.filter(booking => booking.user.id !== user.id)
    }

    removeBookFromBooking = (user, book) => {
        Validator.isInstanceOfClass(user, User)
        Validator.throwErrorIfUserNotExists(user, this.allUsers)
        Validator.throwErrorIfBookingNotExists(user, this.allBookings)
        Validator.isInstanceOfClass(book, Book)
        Validator.throwErrorIfBookNotExists(book, this.allBooks)

        this.allBookings.find(booking => {
            if (booking.user.id === user.id) {
                booking.removeBookFromBookingList(book)
            }
        })
    }

    returnBook = (user, returnBook) => {
        Validator.isInstanceOfClass(user, User)
        Validator.isInstanceOfClass(returnBook, Book)
        Validator.throwErrorIfBookNotExists(returnBook, this.allBooks)


        this.allBookings.find(booking => {
            if (booking.user.id === user.id) {
                booking.returnBook(returnBook)
            }
        })
    }
    getAllUsers = () => {
        return this.allUsers
    }

    getAllBookings = () => {
        return this.allBookings
    }

    getAvaiableBooks = () => {
        this.allAvaiableBooks = this.allBooks
    }

    getAllBorrowedBooks = () => {
        return this.borrowing.getBorrowedBooks()
    }

    getAllBooks = () => {
        return this.allBooks
    }
}