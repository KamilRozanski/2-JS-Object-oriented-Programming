import {
    Validator
} from "./Validator.js"
`use strict`

class Switch {
    constructor() {
        this.cases = [];
        this.conditions = [];
    }

    addsValue = (condition, callback) => {
        Validator.isBoolean(condition)
        Validator.isFunction(callback)
        this.conditions.push(condition)
        this.cases.push(callback)
    }


    checkValues = () => {
        //jak uzyć tylko metody map?
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
        // console.log(isValidChecker)
        return isValidChecker
    }

    checkIfArrayIsEmpty = () => {
        return this.conditions.length === 0 && this.cases.length === 0
    }
}
// formChecker.addsValue(value.length > 5, () => {
//     console.error("input is to short")
// })
// formChecker.addsValue(value === "Kamil", () => {
//     console.error("The input is not a Kamil")
// })
// formChecker.addsValue(value !== "test", () => {
//     console.error("The input is not a test")
// })


// console.log(formChecker.checkIfArrayIsEmpty() + " isEmpty") // false
// console.log(formChecker.checkValues() + " checkValues"); // === false
// console.log(formChecker.checkIfArrayIsEmpty() + " isEmpty") // === true