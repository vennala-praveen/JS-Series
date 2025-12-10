// OOP's --> Object-Oriented Programming (OOP) in JavaScript is a paradigm that organizes code into reusable objects containing properties (data) and methods (behavior).


//polymorphism --> Same method name behaves differently depending on the object (e.g., method overriding).

// class Payment {
//   processPayment(amount) {
//     console.log(`Processing payment of ₹${amount}`);
//   }
// }


// class CreditCardPayment extends Payment {
//   processPayment(amount) {
//     console.log(`Paid ₹${amount} using Credit Card`);
//   }
// }


// class UPIPayment extends Payment {
//   processPayment(amount) {
//     console.log(`Paid ₹${amount} using UPI`);
//   }
// }


// class PayPalPayment extends Payment {
//   processPayment(amount) {
//     console.log(`Paid ₹${amount} using PayPal`);
//   }
// }


// const payments = [
//   new CreditCardPayment(),
//   new UPIPayment(),
//   new PayPalPayment()
// ];

// payments.forEach(payment => {
//   payment.processPayment(500); 
// });



// Class → A blueprint for creating objects, defining properties and methods.

// Object → An instance of a class, representing a real entity with its own data and behavior.

// Class definition
// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
//   drive() {
//     console.log(`${this.brand} ${this.model} is driving...`);
//   }
// }

// Object creation (instance of Car)
// const myCar = new Car("Tesla", "Model S");
// myCar.drive();



// Constructor --> A constructor function in JavaScript is a special type of function used to create and initialize objects.
// It acts like a blueprint: you define properties and methods inside it, and when called with the new keyword, it produces a new object.
// By convention, constructor function names start with a capital letter (e.g., Car, Person).

// Constructor function
// function Car(brand, model) {
//   this.brand = brand;
//   this.model = model;
//   this.drive = function() {
//     console.log(`${this.brand} ${this.model} is driving...`);
//   };
// }

// Creating objects using the constructor
// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("BMW", "X5");

// car1.drive(); 
// car2.drive(); 


//constructor fun

// function employee(name, id){
//   this.name= name;
//   this.id = id;
// }

// let empl = new employee("Praveen", 1225161);
// console.log(empl.id);


//Prototype --> Every object will have a property that is prototype which can be null or pointing to any other particular object


// Inheritance --> Creating new classes that reuse and extend properties/methods of existing ones via extends.

// class Mobile{
//   constructor(model, make){
//     this.make = make
//     this.model = model
//   }

//   published(){
//     return `${this.make} is a mobile from ${this.model}`
//   }
// }

// class Phone extends Mobile{
//   mob(){
//     return `${this.model}: This is inheritance`
//   }
// }

// let myPhone = new Phone('Realme', '6pro');
// console.log(myPhone.published());
// console.log(myPhone.mob());


// Encapsulation --> Bundling data and methods together, restricting direct access using closures or class fields.

class Student {
  // private field (with #)
  #id;

  // setter
  setId(id) {
    this.#id = id;
  }

  // getter
  getId() {
    return this.#id;
  }
}

// Usage
const s = new Student();
s.setId("123521");          
console.log(s.getId());      


// Abstraction --> Hiding implementation details and exposing only necessary functionality (e.g., methods in a class).


// Abstract idea: all shapes have an area
class Shape {
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}

// Usage
const shapes = [new Circle(15), new Square(4)];

shapes.forEach(shape => {
  console.log("Area:", shape.area()); 
});
