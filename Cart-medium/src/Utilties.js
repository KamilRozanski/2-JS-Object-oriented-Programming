import {
    Validator
} from "./Validator.js"

export class Utilties {
    static localString = (number) => {
        // console.log(number.toLocaleString("pl-PL"))
        return number.toLocaleString("pl-PL", {
            style: 'currency',
            currency: 'PLN'
        })
    }
    static changePercentToAmount = (percentageDiscount, amount) => {
        Validator.isNumber(percentageDiscount)
        Validator.isNumber(amount)
        //checkDiscountPercentage nie
        // Validator.checkDiscountPercentage(percentageDiscount)

        return percentageDiscount / 100 * amount
    }

}