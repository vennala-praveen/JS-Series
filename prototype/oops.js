//polymorphism
class Payment {
  processPayment(amount) {
    console.log(`Processing payment of ₹${amount}`);
  }
}


class CreditCardPayment extends Payment {
  processPayment(amount) {
    console.log(`Paid ₹${amount} using Credit Card`);
  }
}


class UPIPayment extends Payment {
  processPayment(amount) {
    console.log(`Paid ₹${amount} using UPI`);
  }
}


class PayPalPayment extends Payment {
  processPayment(amount) {
    console.log(`Paid ₹${amount} using PayPal`);
  }
}


const payments = [
  new CreditCardPayment(),
  new UPIPayment(),
  new PayPalPayment()
];

payments.forEach(payment => {
  payment.processPayment(500); 
});


//Abstraction, Encapsulation, Inheritance, class, & object

//constructor fun

// function employee(name, id){
//   this.name= name;
//   this.id = id;
// }

// let empl = new employee("Praveen", 1225161);
// console.log(empl.id);


//Prototype --> Every object will have a property that is prototype which can be null or pointing to any other particular object


