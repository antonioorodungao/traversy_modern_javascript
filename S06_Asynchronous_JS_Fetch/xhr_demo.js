const fetch_button = document.querySelector("#button");
const output = document.querySelector("#output");

fetch_button.addEventListener("click", fetchData);

function fetchData(e) {
  let xhr = new XMLHttpRequest();
  xhr.onprogress = function () {
    output.innerHTML =
      (output.innerHTML != "" ? output.innerHTML + "\n" : "") + xhr.readyState;
  };

  xhr.open("GET", "data.txt", true);

  xhr.onload = function () {
    output.innerHTML =
      (output.innerHTML != "" ? output.innerHTML + "\n" : "") + xhr.readyState;
    if (this.status === 200) {
      output.innerHTML =
        (output.innerHTML != "" ? output.innerHTML + "\n" : "") +
        xhr.responseText;
    }
  };

  xhr.onerror = function () {
    output.innerHTML =
      (output.innerHTML != "" ? output.innerHTML + "\n" : "") + "Error:";
  };

  xhr.send();
}
