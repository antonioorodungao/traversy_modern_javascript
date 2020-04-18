const el_fetch_text = document.querySelector("#fetch_text");
const el_fetch_API = document.querySelector("#fetch_API");
const el_fetch_JSON = document.querySelector("#fetch_JSON");
const el_output = document.querySelector("#output");

el_fetch_text.addEventListener("click", handleListener);
el_fetch_API.addEventListener("click", handleListener);
el_fetch_JSON.addEventListener("click", handleListener);

function handleListener(e) {
  switch (e.srcElement.id) {
    case "fetch_text":
      fetch("text.txt")
        .then((res) => {
          console.log(res);
          return res.text();
        })
        .then((data) => {
          console.log(data);
          el_output.innerHTML = data;
        });
      break;
    case "fetch_API":
      fetch("https://api.github.com/users")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          content = "";
          data.forEach((element) => {
            content = content + `<li>${element.login} ${element.url}</li>`;
          });
          el_output.innerHTML = content;
        });
      break;
    case "fetch_JSON":
      fetch("sampleJSON.json")
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          content = "";
          data.forEach((element) => {
            content = content + `<li>${element.id} ${element.body}</li>`;
          });
          el_output.innerHTML = content;
        });
      break;
  }
}
