let user1 = new User();
let user2 = new User();

if (user1 === user2) {
  console.log("user1 is equal to user2");
} else {
  console.log("user1 is equal to user2");
}

function User() {
  // the cached instance
  var instance;

  // rewrite the constructor
  User = function () {
    return instance;
  };

  // carry over the prototype
  User.prototype = this;

  // the instance
  instance = new User();

  // reset the constructor pointer
  instance.constructor = User;

  // all the functionality
  instance.firstName = "John";
  instance.lastName = "Doe";

  return instance;
}
