const Chatroom = function () {
  let userlist = {};

  return {
    addUser: function (user) {
      userlist[user.name] = user;
      user.chatroom = this;
    },
    relay: function (to, from, message) {
      userlist[to].receiveMessage(to, from, message);
    },
  };
};

// Chatroom.prototype.addUser = function (user) {
//   this.userlist.push(user);
// };

// Chatroom.prototype.relay = function (username, message) {
//   this.userlist.forEach((member) => {
//     if (member.name === username) {
//       member.receiveMessage(username, message);
//     }
//   });
// };

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype.sendMessage = function (to, message) {
  console.log(`Sending message to ${to}, message ${message}`);
  this.chatroom.relay(to, this.name, message);
};

User.prototype.receiveMessage = function (from, message) {
  console.log(`received a message ${message} from ${from}`);
};

const chatroom = new Chatroom();

const user1 = new User("Antonio");
const user2 = new User("Adnan");

chatroom.addUser(user1);
chatroom.addUser(user2);

user1.sendMessage("Adnan", "Hello");
