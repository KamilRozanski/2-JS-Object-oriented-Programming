import {
    Validator
} from "./Validator.js"

export class Utilties {
    static isContactExistsInGroup = (contact, array) => {
        Validator.isArray(array)
   return array.every(el => {
            if(contact.id === el.id) {
               throw  new Error(`${value.id} already exists`)
             } 
             return true
         })
    }
}