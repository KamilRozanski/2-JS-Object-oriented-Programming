import {
    EmailBuilder
} from "./EmailBulider.js"


export class Director {
    constructor(builder) {
        this.builder = builder
    }

    basicEmail = () => {
        return this.builder
    }
    fullEmail = () => {
        return this.builder(to, from).setCC("setCC").setBcc("Bcc").setTitle("Title").setHTML("HTML").bulid()
    }
}