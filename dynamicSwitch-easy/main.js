`use strict`

class Switch {
    constructor() {
        this.cases = [];
        this.conditions = [];
    }

    add = (condition, callback) => {
        if (!Validate.validateBoolean(condition)) {
            throw new Error("it is not a Boolean value")
        }
        if (!Validate.validateFunction(callback)) {
            throw new Error("it is not a Function")
        }
        this.conditions.push(condition)
        this.cases.push(callback)
    }

    isValid = () => {
        const isValidChecker = this.conditions.map((el, index) => {
            if (el) {
                this.cases[index]()
                return el
            }
            return false
        })
        this.cases = []
        this.conditions = []
        return isValidChecker.every(el => el === false)
    }

    isEmpty = () => {
        return this.conditions.length === 0 && this.cases.length === 0
    }
}

class Validate {
    static validateBoolean(value) {
        return typeof value === "boolean"
    }
    static validateFunction(value) {
        return typeof value === "function"
    }
}

const formChecker = new Switch();
const value = "test";


formChecker.add(24, () => {
    console.error("input is to short")
})
formChecker.add(value === "Kamil", () => {
    console.error("The input is not a Kamil")
})
formChecker.add(value !== "test", () => {
    console.error("The input is not a test")
})
// console.log(ValidateSwitch.validator())

console.log(formChecker.isEmpty() + " isEmpty") // false
console.log(formChecker.isValid() + " isValid"); // === false
console.log(formChecker.isEmpty() + " isEmpty") // === true