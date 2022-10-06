interface Vehicles {
    specification: string,
    name: string,
    horsepower: number,
    yearOfProduction: number,
    price: number
}

class Vehicles {
    constructor(specification: string, name: string, horsepower: number, yearOfProduction: number, price: number,) {
        this.specification = specification;
        this.name = name;
        this.horsepower = horsepower;
        this.yearOfProduction = yearOfProduction;
        this.price = price;
    }
}

let input = new Vehicles("Car", "SUV", 154, 1998, 55000);
console.table(input);


class Motorbikes extends Vehicles {
    kilometersLeft: number;
    numberOfSeats: number;
    fuelType: string;
    
    constructor(specification: string, name: string, horsepower: number, yearOfProduction: number, price: number, kilometersLeft: number, numberOfSeats: number, fuelType: string) {
    super(specification, name, horsepower, yearOfProduction, price)
    this.kilometersLeft = kilometersLeft;
    this.numberOfSeats = numberOfSeats;
    this.fuelType = fuelType;
    }
}

let input1 = new Motorbikes("Motorbike", "Ducati", 214, 1988, 155000, 15000, 1, "Petrol");
console.table(input1);

class Trucks extends Vehicles {
    maxLoad: number;
    numberOfSeats: number;
    fuelType: string;
    
    constructor(specification: string, name: string, horsepower: number, yearOfProduction: number, price: number, maxLoad: number, numberOfSeats: number, fuelType: string) {
    super(specification, name, horsepower, yearOfProduction, price)
    this.maxLoad = maxLoad;
    this.numberOfSeats = numberOfSeats;
    this.fuelType = fuelType;
    }
}

let input2 = new Trucks("Transporting Truck", "Iveco S-Way", 154, 2003, 65000, 20000, 2, "Diesel");
console.table(input2);