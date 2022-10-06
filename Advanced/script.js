"use strict";
class Vehicles {
    constructor(specification, name, horsepower, yearOfProduction, price) {
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
    constructor(specification, name, horsepower, yearOfProduction, price, kilometersLeft, numberOfSeats, fuelType) {
        super(specification, name, horsepower, yearOfProduction, price);
        this.kilometersLeft = kilometersLeft;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
    }
}
let input1 = new Motorbikes("Motorbike", "Ducati", 214, 1988, 155000, 15000, 1, "Petrol");
console.table(input1);
class Trucks extends Vehicles {
    constructor(specification, name, horsepower, yearOfProduction, price, maxLoad, numberOfSeats, fuelType) {
        super(specification, name, horsepower, yearOfProduction, price);
        this.maxLoad = maxLoad;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
    }
}
let input2 = new Trucks("Transporting Truck", "Iveco S-Way", 154, 2003, 65000, 20000, 2, "Diesel");
console.table(input2);
