`use strict`

class Switch {
    constructor() {
        this.cases = [];
        this.conditions = [];
    }

    addsValue = (condition, callback) => {
        Validates.isBoolean(condition)
        Validates.isFunction(callback)
        this.conditions.push(condition)
        this.cases.push(callback)
    }


    checkValues = () => {
        const isValidChecker = this.conditions.map((el, index) => {
            console.log(el)
            if (el) {
                this.cases[index]()
                return el
            }
            return false
        })

        this.cases = []
        this.conditions = []
        console.log(isValidChecker)
        return isValidChecker.every(el => el === false)
    }

    checkIfArrayIsEmpty = () => {
        return this.conditions.length === 0 && this.cases.length === 0
    }
}

class Validates {
    static isBoolean(value) {
        if (typeof value !== "boolean") {
            throw new Error("it is not a Boolean value")
        }
    }
    static isFunction(value) {
        if (typeof value !== "function") {
            throw new Error("it is not a function")
        }
    }
}

const formChecker = new Switch();
const value = "test";


formChecker.addsValue(value < 5, () => {
    console.error("input is to short")
})
formChecker.addsValue(value === "Kamil", () => {
    console.error("The input is not a Kamil")
})
formChecker.addsValue(value !== "test", () => {
    console.error("The input is not a test")
})


console.log(formChecker.checkIfArrayIsEmpty() + " isEmpty") // false
console.log(formChecker.checkValues() + " isValid"); // === false
console.log(formChecker.checkIfArrayIsEmpty() + " isEmpty") // === true