export class Validator {
    static throwErrorIfValueIsNotAString = (value) => {
        if (typeof value !== "string") {
            throw new Error("Input should be a string value")
        }
    }

    static throwErrorIfValueIsNotANumber = (value) => {
        if ((typeof value !== "number") || (isNaN(value))) {
            throw new Error("Input should be a number value")
        }
    }

    static throwErrorIfInstanceOfClassIsIncorrect = (value, instance) => {
        if (!(value instanceof instance)) {
            throw new Error("Incorrect class instance")
        }
    }

    static isInstanceOfClassMultipleArguments = (value, instance) => {
        //nazwa do poprawy
        value.forEach(el => {
            if (!(el instanceof instance)) {
                throw new Error("Incorrect class instance")
            }
        });
    }


    static throwErrorIfUserAlreadyExists = (newUser, usersArray) => {
        const result = usersArray.some(existUser => newUser.id === existUser.id)
        if (result) {
            throw new Error("User already not exists")
        }
    }

    static throwErrorIfUserNotExists = (user, usersArray) => {
        const result = usersArray.some(existUser => user.id === existUser.id)
        if (!result) {
            throw new Error("User does not exists")
        }
    }

    static throwErrorIfBookNotExists = (book, booksArray) => {
        const result = booksArray.some(borrowedBook => borrowedBook.id === book.id)
        if (!result) {
            throw new Error("The book not exists")
        }
    }

    static throwErrorIfBookNotExistsMultipleArguments = (books, allBorrowedBooksArray) => {
        const allBorrowedBooksId = []
        allBorrowedBooksArray.forEach(book => {
            allBorrowedBooksId.push(book.id)
        })

        books.forEach(removedBook => {
            if (!allBorrowedBooksId.includes(removedBook.id)) {
                throw new Error(`This book does not exists`)
            }
        });
    }

    static throwErrorIfBookAlreadyExists = (book, array) => {
        const result = array.some(bookInArray => {
            return bookInArray.id === book.id
        })

        if (result) {
            throw new Error("The book already exists")
        }
    }

    static throwErrorIfBookAlreadyExistsMultipleArguments = (books) => {
        let allProvidedBooksId = []
        books.some(book => {
            let isBookAlreadyHasBeenAdded = allProvidedBooksId.includes(book.id)
            if (isBookAlreadyHasBeenAdded) {
                throw new Error("The book already exists on your list")
            }
            allProvidedBooksId.push(book.id)
        });
    }

    static throwErrorIfBookingNotExists = (user, bookingsArray) => {
        const result = bookingsArray.some(bookingInArray => bookingInArray.user.id === user.id)
        if (!result) {
            throw new Error("The booking not exists")
        }
    }
    static throwErrorIfBookingAlreadyExists = (user, book, bookingsArray) => {
        const result = bookingsArray.some(bookingInArray => {
            if (bookingInArray.user.id === user.id) {
                console.log(bookingInArray.getBorrowedBooks())
            }
        })
        if (result) {
            throw new Error("The booking already exists")
        }
    }

    static throwErrorIfProvidedQuantityIsSmallerThanZero = (quantity) => {
        if (quantity < 0) {
            throw new Error(`Quantity must be a positive number`)
        }
    }
}











// static throwErrorIfBooksHasEnd = (quantity) => {
//     if (quantity < 0) {
//         throw new Error(`Quantity must be a positive number`)
//     }
// }