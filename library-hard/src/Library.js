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

    removeBook = (removeBook) => {
        Validator.isInstanceOfClass(removeBook, Book)
        Validator.throwErrorIfBookNotExists(removeBook, this.allBooks)

        this.allBooks = this.allBooks.filter(bookInArray => bookInArray.id !== removeBook.id)
    }

    borrowBooks = (user, ...books) => {
        Validator.isInstanceOfClass(user, User)
        Validator.throwErrorIfUserNotExists(user, this.allUsers)
        Validator.isInstanceOfClassMultipleArguments(books, Book)
        Validator.throwErrorIfBookNotExistsMultipleArguments(books, this.allBooks)

        const createdBooking = new Booking(user)
        createdBooking.addBookToBookingList(...books)
        this.allBookings.push(createdBooking)
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

    removeUserFromBooking = (user) => {
        Validator.isInstanceOfClass(user, User)
        // Validator.throwErrorIfBookingNotExists(booking, this.allBookings)
        // console.log(booking)
        this.allBookings = this.allBookings.filter(booking => booking.user.id !== user.id)
    }



    returnBook = (user, returnedBook) => {
        // returnBook nazwa do poprawy
        Validator.isInstanceOfClass(user, User)
        Validator.isInstanceOfClass(returnedBook, Book)
        Validator.throwErrorIfBookNotExists(returnedBook, this.allBooks)


        this.allBookings.find(booking => {
            if (booking.user.id === user.id) {
                booking.returnBook(returnedBook)
            }
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
        return this.allAvaiableBooks
    }

    getAllBorrowedBooks = () => {
        for (const booking of this.allBookings) {
            this.allBorrowedBooks.push(booking.getBorrowedBooks())
        }
        return this.allBorrowedBooks
    }
}







// Problemy
//removeBookFromBooking - metoda usuwa wszytskie ksiazki z tym samym ID. 