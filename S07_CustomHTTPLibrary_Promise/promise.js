const el_button_get = document.querySelector("#button_get");
const el_button_put = document.querySelector("#button_put");
const el_button_post = document.querySelector("#button_post");
const el_button_delete = document.querySelector("#button_delete");
el_button_get.addEventListener("click", clickEventHandler);
el_button_put.addEventListener("click", clickEventHandler);
el_button_post.addEventListener("click", clickEventHandler);
el_button_delete.addEventListener("click", clickEventHandler);

const el_output = document.querySelector("#output");

const http = new easyHTTP();

function clickEventHandler(e) {
  switch (e.srcElement.id) {
    case "button_get":
      console.log("Get button is clicked.");
      http
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => (el_output.textContent = res.body))
        .catch((err) => (el_output.textContent = err));

      break;
    case "button_put":
      console.log("Put button is clicked");
      http
        .put("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
          el_output.textContent = res.id;
        })
        .catch((err) => {
          el_output.textContent = err;
        });

      break;
    case "button_post":
      console.log("Post button is clicked.");
      const data = { title: "Custom Post", body: "This is a custom post" };
      http
        .post("https://jsonplaceholder.typicode.com/posts", data)
        .then((res) => {
          el_output.textContent = res.body;
        })
        .catch((err) => {
          el_output.textContent = err;
        });

      break;
    case "button_delete":
      console.log("Delete button is clicked");
      break;
  }
}
