import {
    Switch
} from "./Switch.js"

const formChecker = new Switch();
const testValue = "Hello"

console.log(formChecker.add(typeof testValue !== "string", () => {
    console.error("Value is not a string")
}))


console.log(formChecker.isValid())