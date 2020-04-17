const getSum2 = new Function("x", "y", "return x + y"); //!!Weird function definition

console.log(getSum2(3, 4));

//Prototypes

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

const mary = new Person("Mary", "Magdalene", "JAN-01-1980");
console.log(mary);
Person.prototype.setMarried = function (newLastName) {
  this.lastname = newLastName;
};
mary.setMarried("Batongbakal");
console.log(mary);
console.log("hasOwnProperty " + Person.prototype.hasOwnProperty("setMarried"));
