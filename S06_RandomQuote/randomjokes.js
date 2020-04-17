el_form = document.querySelector("#form");
el_form.addEventListener("submit", handleListener);
const http = new XMLHttpRequest();
const url = "http://api.icndb.com/jokes/random/";
el_output = document.querySelector("#jokes_list");

function handleListener(e) {
  const number = document.querySelector("#number_jokes").value;
  e.preventDefault();
  console.log(number);
  let list = "";
  if (number > 0) {
    console.log(`${url}${number}`);
    http.open("GET", `${url}${number}`, true);
    http.onload = function (callback) {
      if (this.status === 200) {
        console.log(JSON.parse(this.response));
        let response = JSON.parse(this.response);
        if (response.type === "success") {
          response.value.forEach((x) => {
            list = list + `<li>${x.joke}</li>`;
          });
        }
        el_output.innerHTML = list;
      }
    };

    http.send();
  }
}
