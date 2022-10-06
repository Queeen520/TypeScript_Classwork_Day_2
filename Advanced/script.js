"use strict";
class Vehicle {
    constructor(name, horsepower, yearOfProduction, price) {
        this.name = name;
        this.horsepower = horsepower;
        this.yearOfProduction = yearOfProduction;
        this.price = price;
    }
}
let input = new Vehicle("SUV", 154, 1998, 55000);
console.table(input);
class Motorbikes extends Vehicle {
    constructor(name, horsepower, yearOfProduction, price, numberOfSeats, fuelType) {
        super(name, horsepower, yearOfProduction, price);
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
        this.drivingLicenceNedded = true;
    }
}
let input1 = new Motorbikes("Ducati", 214, 1988, 155000, 1, "Petrol");
console.table(input1);
class Trucks extends Vehicle {
    constructor(name, horsepower, yearOfProduction, price, maxLoad, numberOfSeats, fuelType) {
        super(name, horsepower, yearOfProduction, price);
        this.maxLoad = maxLoad;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
        this.drivingLicenceNedded = true;
    }
}
let input2 = new Trucks("Iveco S-Way", 154, 2008, 65000, 5000, 2, "Diesel");
console.table(input2);

// checkbox is checked or not
// checked property of the checkbox element if checked = true else false

const RadioCheckBoxYes = document.querySelector('#yes');
console.log(checkBoxYes.checked); // returns true if checked else returns false

const RadioCheckBoxNo = document.querySelector('#no');
console.log(checkBoxNo.checked); // returns true if checked else returns false

const checkBoxMore = document.querySelector('#more');
console.log(checkBoxMore.checked); // returns true if checked else returns false7

