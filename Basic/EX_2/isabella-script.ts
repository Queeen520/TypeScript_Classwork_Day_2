/* Create a class based on the Person class and add some other properties 
like salary, jobLocation and a function that will call the function that 
is inside the Person class and add “and I get (salary) 
every month, and I work in (jobLocation)” */

let person: {
    fname : string,
    lname: string,
    age: number,
    jobTitel: string,
    printInfo: Function
  } = {
    fname: "John",
    lname: "Doe",
    age: 33,
    jobTitel: "Developer",
    printInfo: function(){
        return `My name is ${this.fname} ${this.lname} and I am ${this.age} years old, and I am a ${this.jobTitel}`
    }
  }

  document.write(person.printInfo());


  /* class Employee extends person { 
        jobLocation: string;
        salary: number;
        

        constructor(fname:string, lname: string, age: number, jobTitel: string, jobLocation: string, salary: number) {
            super(fname, lname, age, jobTitel); 
            
            this.jobLocation = jobLocation;
            this.salary = salary;
        }
    } */