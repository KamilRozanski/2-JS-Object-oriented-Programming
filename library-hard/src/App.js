import {
    User
} from "./User.js";
import {
    Book
} from "./Book.js";

import {
    BooksWarehouse
} from "./BooksWarehouse.js";

import {
    Booking
} from "./Booking.js";

import {
    Library
} from "./Library.js";


const kamil = new User("Kamil", "Rózański")
const dominika = new User("Dominika", "Rózańska")
const bookOne = new Book("title", "author", "photoOfTheBook", "description")
const bookTwo = new Book("title Two", "author Two", "photoOfTheBook Two", "description Two")
const bookThree = new Book("title Three", "author Three", "photoOfTheBook Three", "description Three")

const booksWarehouse = new BooksWarehouse(bookOne, bookTwo, bookThree)

const bookingKamil = new Booking(kamil)
const bookingDominika = new Booking(dominika)
// console.log(booksWarehouse)

bookingKamil.borrowBook(bookOne, bookTwo)
bookingDominika.borrowBook(bookThree)
// bookingKamil.returnBook(bookOne)

const library = new Library(bookingKamil)
console.log(library)