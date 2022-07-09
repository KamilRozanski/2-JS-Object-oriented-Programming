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
    static isItemExistsAdd = (item, array) => {
        const result = array.some(el => item.id === el.id)
        if (result) {
            throw new Error("Item already exists")
        }
    }
    static isItemExistsRemove = (item, array) => {
        const result = array.some(el => item.id === el.id)
        if (!result) {
            throw new Error("Item already exists")
        }
    }


    static checkPrice = (price) => {
        if (price <= 0) {
            throw new Error(`Price must be bigger than "
                0 "`)
        }
    }
    static checkDiscount = (discount) => {
        if (discount > 100) {
            throw new Error("Discount can not be bigger than 100%")
        }
        if (discount < 0) {
            throw new Error("Discount can not be smaller than 0%")
        }
    }
    static checkQuantity = (quantity) => {
        if (quantity < 0) {
            throw new Error("Quantity can not be smaller than 0")
        }
    }
}