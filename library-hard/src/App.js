import {
    User
} from "./User.js";
import {
    Book
} from "./Book.js";

import {
    BooksStorage
} from "./BooksStorage.js";

import {
    Booking
} from "./Booking.js";

import {
    Library
} from "./Library.js";


const kamil = new User("Kamil", "Rózański")
const dominika = new User("Dominika", "Rózańska")
const krystian = new User("Krystian", "Rózański")

const bookOne = new Book("title One", "author One", "photoOfTheBook One", "description One")
const bookTwo = new Book("title Two", "author Two", "photoOfTheBook Two", "description Two")
const bookThree = new Book("title Three", "author Three", "photoOfTheBook Three", "description Three")


const bookingKamil = new Booking(kamil)
const bookingDominika = new Booking(dominika)

bookingKamil.addBookToBookingList(bookOne)
bookingKamil.addBookToBookingList(bookTwo)
// console.log(bookingKamil)
// bookingKamil.removeBookFromBookingList(bookOne)


const library = new Library()

library.addUser(kamil)
library.addUser(dominika)

library.addBook(bookOne)
library.addBook(bookTwo)
library.addBook(bookThree)

<<<<<<< HEAD
library.borrowBook(kamil, bookOne)

bookingKamil.addBookToBookingList(bookOne)
// bookingKamil.removeBookFromBookingList(bookOne)
console.log(bookingKamil)
=======
library.createBooking(kamil, bookOne)
library.createBooking(kamil, bookTwo)
library.createBooking(dominika, bookThree)
library.removeBooking(kamil, bookOne)


// console.log(library)
>>>>>>> 673ef6c808a1f61bfa7cd242381aed4ab600bc40
