`use strict`
import {
    Validator
} from "./Validator.js"


export class Switch {
    constructor() {
        this.cases = [];
    }

    addCase = (condition, callback) => {
        Validator.isBoolean(condition)
        Validator.isFunction(callback)
        this.cases.push({
            condition,
            callback
        })
    }

    isValid() {
        const resultArr = this.cases.filter(({condition, callback}) => {
            if (condition) {
                callback()
            }
        })
        this.cases = []
        return resultArr.length === 0
    }

    isEmpty = () => {
        return this.cases.length === 0
    }
}