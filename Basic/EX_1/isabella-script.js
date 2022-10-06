"use strict";
/* Create a class constructor named Person that should hold information about
name, age,  jobTitle and have a function that will return a string
“Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)” */
let person = {
    fname: "John",
    lname: "Doe",
    age: 33,
    jobTitel: "Developer",
    printInfo: function () {
        return `My name is ${this.fname} ${this.lname} and I am ${this.age} years old, and I am a ${this.jobTitel}`;
    }
};
document.write(person.printInfo());
