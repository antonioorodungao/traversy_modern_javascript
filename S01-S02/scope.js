var a = 1; //a is a global within a block but not a function
let b = 2; //b cannot be redefined inside a block scope
const c = 3;

function scope() {
  var a = 10;
  var b = 12;
  const c = 13;
  console.log(`function scope a = ${a} b = ${b} c = ${c}`);
}

scope();

if (true) {
  var a = 100;
  let b = 200;
  const c = 300;
  console.log(`block scope a = ${a} b = ${b} c = ${c}`);
}

console.log(`global scope a = ${a} b = ${b} c = ${c}`);
