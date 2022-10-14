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
        // console.log(booksToReturn)
        function findReturnedBook(borrowedBooksArr, returnedBooksArr) {
            return borrowedBooksArr.find(borrowedBookObj => {
                console.log(borrowedBookObj)
                return returnedBooksArr.some(returnedBookObj => {
                    // console.log(object1)
                    // console.log(object2.id + "returned")
                    return borrowedBookObj.bookId === returnedBookObj.id;
                });
            });
        }

        return this.allBookings.forEach(booking => {
            // console.log(booking.borrowedBooks)
            // console.log(booksToReturn)
            findReturnedBook(booking.borrowedBooks, booksToReturn)

        })
    }


    updateBooksList = (booksToUpdate) => {
        return this.allBooks = this.allBooks.filter(book => book.id !== booksToUpdate.id)
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