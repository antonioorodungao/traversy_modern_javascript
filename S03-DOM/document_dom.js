let val;

val = document;
val = document.all;
val = document.all[7];
val = document.all.length; //counts the number of elements in the dom.
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.forms[0].id;
val = document.forms[0].action;
val = document.forms[0].method;
val = document.links;
val = document.links[0].classList;
val = document.links[0].classList[1];
val = document.images;
val = document.scripts;
val = document.scripts[2];
val = document.scripts[2].getAttribute("src");

let scripts = document.scripts;
console.log(typeof scripts);
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(x => console.log(x));
console.log(val);
