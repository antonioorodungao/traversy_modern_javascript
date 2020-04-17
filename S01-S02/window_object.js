// window is global object in the browser(global environment), javascript runtime running as standalone in desktop(nodejs)
//WINDOW METHOD / OBJECTS/ PROPERTIES

// window.console.log(123);
// alert(123);

//Prompt
// const input = prompt();
// alert(input);

//Confirm
// if (confirm("Are you sure?")) {
//   console.log("YES");
// } else {
//   alert("NO");
// }

// Height and Width of the Windows

let outerheight = window.outerHeight;
console.log(outerheight);
let innerHeight = window.innerHeight;
console.log(innerHeight);

//Scroll - 0 value means there is no scroll
console.log(window.scrollX);

console.log(window.location);

console.log(window.location.search);
// window.location.href = "http://www.google.com";

//History Object

// window.history.go(-1);
// console.log(window.history.length);

//Navigator Object
console.log(window.navigator);
console.log(window.navigator.appVersion);
