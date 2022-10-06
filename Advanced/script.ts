interface Vehicles {
    name: string,
    horsepower: number,
    yearOfProduction: number,
    price: number
}

class Vehicle implements Vehicles {
    name: string;
    horsepower: number;
    yearOfProduction: number;
    price: number;

    constructor(name: string, horsepower: number, yearOfProduction: number, price: number) {
        this.name = name;
        this.horsepower = horsepower;
        this.yearOfProduction = yearOfProduction;
        this.price = price;
    }
}   

let input = new Vehicle("SUV", 154, 1998, 55000);
console.table(input);


class Motorbikes extends Vehicle {
    numberOfSeats: number;
    fuelType: string;
    drivingLicenceNedded: true;
    
    constructor(name: string, horsepower: number, yearOfProduction: number, price: number, numberOfSeats: number, fuelType: string) {
    super(name, horsepower, yearOfProduction, price)
    this.numberOfSeats = numberOfSeats;
    this.fuelType = fuelType;
    this.drivingLicenceNedded = true;
    }
}

let input1 = new Motorbikes("Ducati", 214, 1988, 155000, 1, "Petrol");
console.table(input1);

class Trucks extends Vehicle {
    maxLoad: number;
    numberOfSeats: number;
    fuelType: string;
    drivingLicenceNedded: true;
    
    constructor(name: string, horsepower: number, yearOfProduction: number, price: number, maxLoad: number, numberOfSeats: number, fuelType: string) {
    super(name, horsepower, yearOfProduction, price)
    this.maxLoad = maxLoad;
    this.numberOfSeats = numberOfSeats;
    this.fuelType = fuelType;
    this.drivingLicenceNedded = true;
    }
}

let input2 = new Trucks("Iveco S-Way", 154, 2008, 65000, 5000, 2, "Diesel");
console.table(input2);