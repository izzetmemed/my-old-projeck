// function Employee(name,age){
//     this.name = name;
//     this.age = age;
// }

// Employee.prototype.toString = function(){
//     console.log(this.name + " " +  this.age);
// }

// let person1 = new Employee("Mirza",35);
// person1.toString();

// class Employee{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     toString(){
//         console.log(this.name + " " + this.age);
//     }

//     workHard(){
//         console.log(this.name  + " works hard");
//     }
// }

// const person1 = new Employee("Mirza",35);

// person1.toString();
// person1.workHard();
// console.log(person1);

// class MathOperations {

//     static plus(a, b) {
//         console.log(a + b);
//     }

//     static minus(a, b) {
//         console.log(a - b);
//     }
// }

// MathOperations.plus(5, 3);
// MathOperations.minus(3, 5);

class Human {  // base class,main class,parent class
    constructor(name, age, eyeColor, height, weight) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
        this.height = height;
        this.weight = weight;
    }

    getClassInfo() {
        console.log("this is Human class");
    }

}

class Employee extends Human { // derived class,child class, subClass
    constructor(name, age, eyeColor, height, weight, salary, position, workYears) {

        super(name, age, eyeColor, height, weight);
        this.salary = salary;
        this.position = position;
        this.workYears = workYears;
    }

    getClassInfo() {
        // console.log("this is Employee class"); // name hiding
        super.getClassInfo();
    }
}

class Developer extends Employee {
    constructor(name, age, eyeColor, height, weight, salary, position, workYears, type) {
        super(name, age, eyeColor, height, weight, salary, position, workYears);
        this.type = type;
    }
}

// ana ata ve ogul arasindaki aile zencirini qur

class Father{

}

class Mother extends Father{

}

class Child extends Mother{

}
