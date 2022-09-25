export class Validator {
    static throwErrorIfValueIsNotAString = (value) => {
        if (typeof value !== "string") {
            throw new Error("It is not a string value")
        }
    }

    static throwErrorIfStringHasOnlyWhiteCharacters = (string) => {
        if (string.trim().length === 0) {
            throw new Error("You should provide a letters, numbers or special characters")
        }
    }

    static throwErrorIfValueIsNotAInteger = (value) => {
        if (!Number.isInteger(value)) {
            throw new Error("The value must be an integer value")
        }
    }

    static throwErrorIfValueisNotAPositiveNumber = (value) => {
        if (value < 0 && typeof value !== "number" || isNaN(value)) {
            throw new Error("The number must be bigger than zero")
        }
    }

    static throwErrorIfValueHasIncorrectInstance = (item, instance) => {
        if (!item instanceof instance) {
            throw new Error("Incoret class insatnce")
        }
    }

    static throwErrorIfDiscountCodeNotExists(providedCode, array) {
        const checkCodes = obj => Object.values(obj).includes(providedCode)
        if (!array.some(checkCodes)) {
            throw new Error("Discount code not exists")
        }
    }

    static throwErrorIfItemNotExists = (item, array) => {
        const result = array.some(el => item.id === el.id)
        if (!result) {
            throw new Error("Item not exists")
        }
    }

    static throwErrorIfIncorrectDiscountPercentage = (discount) => {
        if ((discount < 0) || (discount > 100)) {
            throw new Error("Acceptable discount is between 0% and 100%")
        }
    }
}