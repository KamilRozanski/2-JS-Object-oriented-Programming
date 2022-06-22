import {
    Validator
} from "./Validator.js"

export class Utilties {
    static checkDuplicatesInArray = (value, array) => {
        Validator.isArray(array)
      array.every(el => {
            if(value.id === el.id) {
               throw  new Error(`${value.id} already exists`)
             } 
         })
    }
}