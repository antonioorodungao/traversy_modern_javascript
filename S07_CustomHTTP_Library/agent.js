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
  console.log("button is clicked");
  switch (e.srcElement.id) {
    case "button_get":
      console.log("Get button is clicked.");

      http.get("https://jsonplaceholder.typicode.com/posts/1", function (
        response
      ) {
        el_output.textContent = `Fetched: \nID: ${response.id} \nTitle: ${response.title} \nBody:${response.body}`;
      });

      break;
    case "button_put":
      console.log("Put button is clicked");
      http.put("https://jsonplaceholder.typicode.com/posts/1", function (
        response
      ) {
        el_output.textContent = response;
      });

      break;
    case "button_post":
      console.log("Post button is clicked.");
      const data = { title: "Custom Post", body: "This is a custom post" };
      http.post("https://jsonplaceholder.typicode.com/posts", data, function (
        response
      ) {
        el_output.textContent = `Posted : \nID: ${response.id} \nTitle: ${response.title} \nBody:${response.body}`;
      });

      break;
    case "button_delete":
      console.log("Delete button is clicked");
      http.delete("https://jsonplaceholder.typicode.com/posts/1", function (
        error,
        response
      ) {
        if (error === null) {
          el_output.textContent = `Deleted!`;
        } else {
          el_output.textContent = `Error : ${response}`;
        }
      });
      break;
  }
}
