import {
    Validator
} from "./Validator.js"
import {
    User
} from "./User.js"
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
        // this.booksStorage = booksStorage
        this.allUsers = []
        this.allBooks = []
        this.allAvaiableBooks = []
        this.allBorrowedBooks = []
    }

    addUser = (user) => {
        Validator.isInstanceOfClass(user, User)

        this.allUsers.push(user)
    }

    addBook = (book) => {
        Validator.isInstanceOfClass(book, Book)

        this.allBooks.push(book)
    }

    
    getAvaiableBooks = () => {
        this.allAvaiableBooks = this.allBooks
        console.log(this.allBooks)
    }

    getAllBorrowedBooks = () => {
        return this.borrowing.getBorrowedBooks()
    }

    getAllBooks = () => {
        return this.allBooks
    }

}