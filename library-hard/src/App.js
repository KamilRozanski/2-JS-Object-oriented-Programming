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


const kamil = new User("Kamil", "Rozanski")
const dominika = new User("Dominika", "Rozanski")
const krystian = new User("Krystian", "Rozanski")

const bookOne = new Book("title One", "author One", "photoOfTheBook One", "description One")
const bookTwo = new Book("title Two", "author Two", "photoOfTheBook Two", "description Two")
const bookThree = new Book("title Three", "author Three", "photoOfTheBook Three", "description Three")
const bookFour = new Book("title Four", "author Fourhree", "photoOfTheBook Four", "description Four")

// const bookingKamil = new Booking(kamil)
// const bookingDominika = new Booking(dominika)

// bookingKamil.addBooksToBookingList(bookOne)
// bookingKamil.addBooksToBookingList(bookTwo)
// bookingDominika.addBooksToBookingList(bookThree)


// bookingKamil.removeBooksFromBookingList(bookOne)
// bookingKamil.removeBooksFromBookingList(bookTwo)



const library = new Library()

library.addUser(kamil)
library.addUser(dominika)

library.addBook(bookOne)
library.addBook(bookTwo)
library.addBook(bookThree)

library.borrowBooks(kamil, bookOne, bookTwo)

// console.log(library)