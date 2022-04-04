`use strict`

class Switch {
    constructor() {
        this.cases = [];
        this.conditions = [];
    }

    add = (condition, callback) => {
        Validates.isBoolean(condition)
        Validates.isFunction(callback)
        this.conditions.push(condition)
        this.cases.push(callback)
    }


    isValid = () => {
        const isValidChecker = this.conditions.map((el, index) => {
            // console.log(el)
            if (el) {
                this.cases[index]()
                return el
            }
        })

        this.cases = []
        this.conditions = []
        return isValidChecker.every(el => el === false)
    }

    isEmpty = () => {
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


formChecker.add(value < 5, () => {
    console.error("input is to short")
})
formChecker.add(value === "Kamil", () => {
    console.error("The input is not a Kamil")
})
formChecker.add(value !== "test", () => {
    console.error("The input is not a test")
})


console.log(formChecker.isEmpty() + " isEmpty") // false
console.log(formChecker.isValid() + " isValid"); // === false
console.log(formChecker.isEmpty() + " isEmpty") // === true