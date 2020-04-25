function Atreus() {
  let instance;
  function init() {
    return {
      insidemethods: function () {
        console.log("inside method");
      },
    };
  }

  return {
    instance: function () {
      if (!instance) {
        instance = init();
      }
      return instance;
    },
  };
}

let at1 = new Atreus().instance();
let at2 = new Atreus().instance();

at1.insidemethods();
