export class Validator {
    static isString = (value) => {
        if (typeof value !== "string") {
            throw new Error("It is not a string value")
        }
    }
    static isNumber = (value) => {
        if (typeof value !== "number" || isNaN(value)) {
            throw new Error("It is not a number value")
        }
    }
    static isQuantityBiggerThanZero = (value) => {
        if (value <= 0) {
            throw new Error("Quantity must be bigger than Zero ")
        }
    }

    static isInstanceOf = (item, instance) => {
        if (item instanceof instance === false) {
            throw new Error("Incoret class insatnce")
        }
    }
    static isArray(array) {
        if (!Array.isArray(array)) {
            throw new Error("Input is not Array")
        }
    }
    static isItemExists = (item, array) => {
        const result = array.some(el => item.id === el.id)
        if (!result) {
            throw new Error("Item not exists")
        }
    }
    static checkPrice = (price) => {
        if (price <= 0) {
            throw new Error(`Price must be bigger than "
                0 "`)
        }
    }
    static checkDiscountAmount = (price, discount) => {
        if (price <= discount) {
            throw new Error("Discount is bigger than price")
        }
    }
    static checkDiscountPercentage = (percentage) => {
        if (percentage >= 100) {
            throw new Error("Discount percentage is bigger or equal 100%")
        }
        if (percentage <= 0) {
            throw new Error("Discount percentage is smaller or equal 0%")
        }
    }
}