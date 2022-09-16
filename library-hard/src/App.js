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


const kamil = new User("Kamil", "Rózański")
const dominika = new User("Dominika", "Rózańska")
const krystian = new User("Krystian", "Rózański")

const bookOne = new Book("title One", "author One", "photoOfTheBook One", "description One", 10)
const bookTwo = new Book("title Two", "author Two", "photoOfTheBook Two", "description Two", 10)
const bookThree = new Book("title Three", "author Three", "photoOfTheBook Three", "description Three", 10)
const bookFour = new Book("title Four", "author Fourhree", "photoOfTheBook Four", "description Four", 10)

const bookingKamil = new Booking(kamil)
const bookingDominika = new Booking(dominika)

bookingKamil.addBookToBookingList(bookOne, bookTwo, bookThree)
bookingDominika.addBookToBookingList(bookThree)

bookingKamil.removeBookFromBookingList(bookOne, bookTwo)

// console.log(bookingKamil.getBorrowedBooks())







// const library = new Library()

// library.addUser(kamil)
// library.addUser(dominika)

// library.addBook(bookOne)
// library.addBook(bookTwo)
// library.addBook(bookThree)

// library.borrowBooks(kamil, bookOne, bookTwo)
// library.borrowBooks(kamil, bookOne)
// library.createBooking(kamil, bookTwo)
// library.createBooking(dominika, bookThree)



// library.removeBookFromBooking(kamil, bookOne)
// library.removeBooking(kamil)
// library.removeBook(bookOne)
// library.returnBook(kamil, bookTwo)

// console.log(library.getAllBookings())