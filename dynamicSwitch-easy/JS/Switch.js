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
        Validator.isFunction(callback)
        this.cases.push({
            condition,
            callback
        })
    }
    isValid() {
        this.cases = this.cases.filter(el => {
            if (el.condition) {
                el.callback()
                return el
            }
        })
        return this.cases.length === 0
    }


    isEmpty = () => {
        // console.log(this.cases.length)
        return this.cases.length === 0
    }
}