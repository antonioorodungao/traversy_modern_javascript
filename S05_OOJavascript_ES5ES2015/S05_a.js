function Person(name, dob) {
  this.name = name; //this means the current object.
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

const antonio = new Person("Antonio", "09-03-1983");
console.log("age: " + antonio.calculateAge());
