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
        this.allUsers.filter(existUser => {
            existUser.id !== user.id
        })
    }

    addBook = (book) => {
        Validator.isInstanceOfClass(book, Book)

        this.allBooks.push(book)
    }

    removeBook = (removeBook) => {
        Validator.isInstanceOfClass(removeBook, Book)

        this.allBooks = this.allBooks.filter(book => book.id !== removeBook.id)
    }

    createBooking = (user, book) => {
        // Validator.isBookExists
        // Validator.isUserExists

        const createdBooking = new Booking(user)
        createdBooking.addBookToBookingList(book)
        this.allBookings.push(createdBooking)
        // console.log(this.allBookings)
    }

    removeBooking = (user, book) => {
        // Validator.isBookExists
        // Validator.isUserExists
        this.allBookings.filter(booking => {
            if(booking.user.id === user.id){
                console.log(booking)
            }
        })
    }

    returnBook = (user, returnBook) => {
        // Validator.isBookExists
        // Validator.isUserExists

        // console.log(booking.returnBook(returnBook))
        // console.log(booking)
    }

    getAvaiableBooks = () => {
        this.allAvaiableBooks = this.allBooks
        // console.log(this.allBooks)
    }

    getAllBorrowedBooks = () => {
        return this.borrowing.getBorrowedBooks()
    }

    getAllBooks = () => {
        return this.booksStorage
    }
}