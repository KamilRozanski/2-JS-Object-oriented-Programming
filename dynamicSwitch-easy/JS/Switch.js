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
        this.cases.find((obj, index) => {
            console.log(index)
            for (const el in obj) {
                if (!obj.condition) {

                    return obj.callback()
                }
            }
        })
    }

}