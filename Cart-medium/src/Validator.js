export class Validator {
    static isString = (value) => {
        if (typeof value !== "string") {
            throw new Error("It is not a string value")
        }
    }

    static isNumber = (value) => {
        if (typeof value !== "number" || isNaN(value)) {
            throw new Error("The value must be and number")
        }
    }

    static isIntegerNumber = (value) => {
        if (!Number.isInteger(value)) {
            throw new Error("The value must be an integer value")
        }
    }
    static isPositiveNumber = (value) => {
        if (value < 0) {
            throw new Error("The number must be bigger than zero")
        }
    }
    static isQuantityPositiveNumber = (value) => {
        if (value < 0) {
            throw new Error("Quantity can not be smaller than zero")
        }
    }

    static isInstanceOf = (item, instance) => {
        if (!item instanceof instance) {
            throw new Error("Incoret class insatnce")
        }
    }

    static isArray(array) {
        if (!Array.isArray(array)) {
            throw new Error("Input is not Array")
        }
    }

    static throwErrorIfQuantitySmallerThanZero = (quantity) => {
        if (quantity <= 0 && Number.isInteger(quantity)) {
            throw new Error("Quantity must be bigger than 0, and must be a integer number")
        }
    }

    static throwErrorIfDiscountCodeNotExists(code, array) {
        const allCodes = []
        array.filter(({
            code,
        }) => {
            allCodes.push(code)
        })
        if (!allCodes.includes(code)) {
            throw new Error("Code not exists")
        }
    }

    static isItemAlreadyExists = (item, array) => {
        const result = array.some(el => item.id === el.id)
        if (result) {
            throw new Error("Item already exists")
        }
    }

    static throwErrorIfItemNotExists = (item, array) => {
        const result = array.some(el => item.id === el.id)
        if (!result) {
            throw new Error("Item not exists")
        }
    }

    static throwErrorIfDiscountIsNotAcceptable = (discount) => {
        //poprawic nazwe
        if ((discount < 0) || (discount > 100)) {
            throw new Error("Acceptable discount is between 0% and 100%")
        }
    }

    static throwErrorIfDiscountCodeValueIsIncorrect = (discount, totalCartAmount) => {
        if ((discount < 0) || (discount > totalCartAmount)) {
            throw new Error(`Acceptable discount is between 0 and total cart amount `)
        }
    }

    static throwErrorIfStringCharactersAreIncorrect = (string) => {
        const regex = /^\w+(\s+\w+)*$/gi;
        if (!regex.test(string)) {
            throw new Error(`You should provide between 2-20 characters. No special characters`)
        }
    }

}