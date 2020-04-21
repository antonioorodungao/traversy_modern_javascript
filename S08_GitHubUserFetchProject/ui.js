class UI {
  constructor(users) {
    this.users = users;
    this.profile_table = document.querySelector("#profile_table");
  }
  updateTable(profiles) {
    profiles.forEach((tr) => {
      this.profile_table.appendChild(tr);
    });
  }
}
