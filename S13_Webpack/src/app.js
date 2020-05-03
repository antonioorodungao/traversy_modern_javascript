let el_button = document.querySelector("#show_secret_button");
let el_h1 = document.querySelector("#secret");

el_button.addEventListener("click", showSecret);
function showSecret() {
  console.log("button is clicked");

  if (el_h1.style.display === "none") {
    el_h1.style.display = "block";
  } else {
    el_h1.style.display = "none";
  }
}
