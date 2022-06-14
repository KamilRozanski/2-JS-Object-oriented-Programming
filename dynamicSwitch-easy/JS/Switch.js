import {
    Validator
} from "./Validator.js"
`use strict`

export class Switch {
    constructor() {
        this.cases = [];
    }

    add = (condition, callback) => {
        Validator.isBoolean(condition)
        // Validator.isFunction(callback)
        this.cases.push([condition, callback])
        console.log(this.conditions)
    }
    isValid() {
        return this.cases
    }


    // checkValues = () => {
    //     //jak uzyć tylko metody map?
    //     const isValidChecker = this.conditions.map((el, index) => {
    //         console.log(el)
    //         if (el) {
    //             this.cases[index]()
    //             return el
    //         }
    //         return false
    //     })

    //     this.cases = []
    //     this.conditions = []
    //     return isValidChecker
    // }

    // checkIfArrayIsEmpty = () => {
    //     return this.conditions.length === 0 && this.cases.length === 0
    // }
}