const ui = new UI();
const github = new Github();
const profile_list = [];

const search_button = document.querySelector("#search_button");
search_button.addEventListener("click", handleEvent);
const profile_table = document.querySelector("#profile_table");
const search_input = document.querySelector("#search_input");
const error_display = document.querySelector("#error");

function handleEvent(e) {
  console.log("Search is clicked.");
  const search_key = search_input.value;
  if (search_key !== "") {
    profile_table.innerHTML = "";
    profile_table.innerHTML = `<thead class="thead-dark" style="width: 100%;">
    <tr>
      <th>Login</th>
      <th>Avatar</th>
      <th>URL</th>
      <th>Repos</th>
      <th>Type</th>
    </tr>
  </thead>`;
    github.getUser(search_key).then((result) => {
      if (result.total_count === 0) {
        error_display.style = "display: block";
        setTimeout(() => (error_display.style = "display:none"), 3000);
      }
      result.items.forEach((element) => {
        const tr = document.createElement("tr");

        const td_login = document.createElement("td");
        td_login.textContent = element.login;

        const td_avatar = document.createElement("td");
        td_avatar.innerHTML = `<img src=${element.avatar_url} style="width: 50px; height:50px"></img>`;

        const td_url = document.createElement("td");
        td_url.innerHTML = `<a href='${element.url}'>${element.url}</a>`;

        const td_repos_url = document.createElement("td");
        td_repos_url.innerHTML = `<a href='${element.repos_url}'>${element.repos_url}</a>`;

        const td_type = document.createElement("td");
        td_type.textContent = element.type;

        tr.appendChild(td_login);
        tr.appendChild(td_avatar);
        tr.appendChild(td_url);
        tr.appendChild(td_repos_url);
        tr.appendChild(td_type);

        profile_table.appendChild(tr);
      });
    });
  }
}
