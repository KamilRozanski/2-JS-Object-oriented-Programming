export class Validator {
    static isString = (value) => {
        if (typeof value !== "string") {
            throw new Error("Input should be a string value")
        }
    }

    static isNumber = (value) => {
        if ((typeof value !== "number") || (isNaN(value))) {
            throw new Error("Input should be a number value")
        }
    }

    static isInstanceOfClass = (value, instance) => {
        if (!(value instanceof instance)) {
            throw new Error("Incorrect class instance")
        }
    }


    static throwErrorIfUserAlreadyExists = (newUser, usersArray) => {
        const result = usersArray.some(existUser => newUser.id === existUser.id)
        if (result) {
            throw new Error("User does not exists")
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

    static throwErrorIfBookAlreadyExists = (book, array) => {
        // przepuszcza duble
        const result = array.some(bookInArray => {
            bookInArray.id === book.id
        })
    }

    static throwErrorIfBookingNotExists = (user, bookingsArray) => {
        const result = bookingsArray.some(bookingInArray => bookingInArray.user.id === user.id)
        if (!result) {
            throw new Error("The booking not exists")
        }
    }
}