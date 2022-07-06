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
    static priceSmallerThenDiscount = (price, discount) => {
        if (price <= discount) {
            throw new Error("Discount is bigger than price")
        }
    }
}