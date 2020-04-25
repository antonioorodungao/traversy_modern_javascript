function MemberFactory() {
  let member;

  function createMembership(name, type) {
    switch (type) {
      case "simple":
        member = new SimpleMembership(name);
        break;
      case "double":
        member = new DoubleMembership(name);

      default:
        break;
    }

    member.name = name;
    member.define = function () {
      console.log(`${this.name}  ${this.cost}`);
    };
    return member;
  }

  return {
    createMembership: createMembership,
  };
}

function SimpleMembership(name) {
  this.cost = 20;
  this.name = name;
}

function DoubleMembership(name) {
  this.cost = 40;
  this.name = name;
}

let mf = new MemberFactory();
let member1 = mf.createMembership("Mark", "simple");
console.log(member1);
member1.define();
let member2 = mf.createMembership("John", "double");
console.log(member2);
