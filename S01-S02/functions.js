//Functions inside object
let todo = {
  add: function() {
    console.log("adding");
  },
  edit: function(id) {
    console.log(`id is ${id}`);
  }
};

todo.delete = function() {
  console.log("deleting");
};

todo.delete();
todo.add();

//IEF - Immediately Executable Functions

(function(param) {
  console.log(`IFE is executed with param: ${param}`);
})("Parameter");
