export class Utilties {
    static localString = (number) => {
        // console.log(number.toLocaleString("pl-PL"))
        return number.toLocaleString("pl-PL", {
            style: 'currency',
            currency: 'PLN'
        })
    }
}