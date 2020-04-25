const el_button = document.querySelector("#next");
const el_name = document.querySelector("#name");
const el_gender = document.querySelector("#gender");

el_button.addEventListener("click", handleClick);

const data = [
  {
    name: "Antonio",
    gender: "male",
  },
  { name: "Adnan", gender: "male" },
  { name: "Mhona", gender: "female" },
];
let data_received = getName(data);

function handleClick(e) {
  user = data_received.next();
  if (user.value === undefined) {
    window.location.reload();
    return;
  }

  console.log(user);
  el_name.textContent = user.value.name;
  el_gender.textContent = user.value.gender;
}

function* getName(data) {
  let count = 0;
  while (count < data.length) {
    yield data[count];
    count++;
  }
}
