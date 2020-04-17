function Person(firstname, lastname, dob) {
  this.firstname = firstname; //this means the current object.
  this.lastname = lastname;
  this.birthday = new Date(dob);

  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    console.log("Birthday: " + this.birthday.getTime());
    console.log("Date Now: " + Date.now());

    const ageDate = new Date(diff);
    console.log(ageDate.getTime());

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

Person.prototype.greeting = function () {
  return `Hello there my name is ${this.firstname} ${this.lastname}`;
};

function Customer(firstname, lastname, dob, number) {
  Person.call(this, firstname, lastname, dob);
  this.number = number;
}

Customer.prototype = Object.create(Person.prototype); //Inheritance
Customer.prototype.constructor = Customer; //Setting the constructor
const customer1 = new Customer("Adnan", "Nazir", "11-01-1987", 123);
console.log(customer1);
console.log(customer1.greeting());
