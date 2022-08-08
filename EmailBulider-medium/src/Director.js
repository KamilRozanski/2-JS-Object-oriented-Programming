import {
    EmailBuilder
} from "./EmailBulider.js"


export class Director {
    constructor(builder) {
        this.builder = builder
    }

    basicEmail = () => {
        console.log(this.builder)
        return this.builder
    }
    fullEmail = () => {
        return this.builder(to, from).setCC("setCC").setBcc("Bcc").setTitle("Title").setHTML("HTML").bulid()
    }
}