export class Validator {
    static isString = (value) => {
        if (typeof value !== "string") {
            throw new Error("It is not a string value")
        }
    }

    static checkStringCharacters = (string) => {
        const regex = /^\w+(\s+\w+)*$/gi;
        if (!regex.test(string)) {
            throw new Error(`You should provide between 2-20 characters. No special characters`)
        }
    }

    static isNumber = (value) => {
        if (typeof value !== "number" || isNaN(value)) {
            throw new Error("It is not a number value")
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

    static throwErrorIfItemExists = (item, array) => {
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

    static isPriceBiggerThanZero = (price) => {
        if (price <= 0) {
            throw new Error(`Price must be bigger than  "
                0 "`)
        }
    }

    static checkDiscountValue = (discount) => {
        if ((discount < 0) || (discount > 100)) {
            throw new Error("Acceptable discount is between 0% and 100%")
        }
    }

    static isQuantitySmallerThanZero = (quantity) => {
        if (quantity < 0) {
            throw new Error("Quantity must be gigger than 0")
        }
    }
}