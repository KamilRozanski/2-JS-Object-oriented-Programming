// class NewCar {
//     constructor(carName) {
//         this.allCars = []
//         this.carName = carName
//         this.pushCarToArr = () => {
//             this.allCars.push(this.carName)
//             console.log(this.allCars)
//         }
//         this.pushCarToArr()
//     }
// }
// // const bmwF10 = new NewCar("bmwF10")
// // const bmwE30 = new NewCar("bmwE30")


// class GroupCars {
//     constructor(groupName) {
//         this.groupName = groupName
//         this.allCarsInGroup = []
//     }

//     addCarToGroup(carName) {
//         this.allCarsInGroup.push(carName)
//     }

//     showCarsInGroup() {
//         console.log(this.allCarsInGroup)
//     }
// }

// const bmw = new GroupCars("BMW")
// bmw.addCarToGroup(bmwF10)
// bmw.addCarToGroup(bmwE30)

// const audi = new GroupCars("Audi")
// audi.addCarToGroup("Audi C7")
// audi.addCarToGroup("Audi C8")


// class SearchCar {
//     constructor(carName, groupCars) {
//         this.carName = carName
//         this.groupCars = groupCars
//         this.allCars = []
//     }

//     showAllCars() {
//         //pokazuje wszystkie auta BMW I Audi ???? z tablicy this.allCars
//     }
//     showAllGroupCars() {
//         //pokazuje wszystkie auta z danej grupy
//         console.log(this.carName, this.groupCar)
//     }
// }

// const searchCar = new SearchCar(bmwF10, bmw)
// console.log(searchCar.showAllGroupCars(bmw))





class Car {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}

class CarRepository {
    constructor() {
        this.cars = [];
    }

    add(car) {
        this.cars.push(car);
    }

    getCarByName(name) {
        return this.cars.find(car => car.name === name);
    }

    getCarsByBrand(brand) {
        return this.cars.filter(car => car.brand === brand);
    }

}

const carRepository = new CarRepository();

const bmwF10 = new Car("BMW F10", "BMW");
carRepository.add(bmwF10);

const bmwE30 = new Car("BMW E30", "BMW");
carRepository.add(bmwE30);

const audiC7 = new Car("Audi C7", "Audi");
carRepository.add(audiC7);

const audiC8 = new Car("Audi C8", "Audi");
carRepository.add(audiC8);

// Usage

console.log(carRepository.getCarByName("BMW F10")); // Wyszukiwiwanie konkretnego auta po nazwie

console.log(carRepository.getCarsByBrand("BMW")); // Wyszukiwiwanie wszystkich aut danej marki