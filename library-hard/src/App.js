import {
    User
} from "./User.js";
import {
    Book
} from "./Book.js";

import {
    Booking
} from "./Booking.js";
import {
    Library
} from "./Library.js";


const user = new User("Kamil", "Rózański")
const bookOne = new Book("title", "author", "photoOfTheBook", "description")
const bookTwo = new Book("title Two", "author Two", "photoOfTheBook Two", "description Two")
const bookThree = new Book("title Three", "author Three", "photoOfTheBook Three", "description Three")
const borrowing = new Booking(user)
// console.log(bookOne)

borrowing.borrowBook(bookOne)
borrowing.borrowBook(bookTwo)
borrowing.returnBook(bookOne)

const library = new Library(bookOne, bookTwo, bookThree)
console.log(library)