class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class UI {
  addBookToList(book) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td><td><button  class="close" href="#"><span id="close" aria-hidden="true">&times;</span></button></td>`;
    const list = document.querySelector("#book-table-body");
    list.appendChild(row);
  }

  functionshowAlert(message, className) {
    let el_error_box = document.querySelector("#error_box");
    switch (className) {
      case "error":
        message = "Error: " + message;
        break;
      case "success":
        message = "Success: " + message;
    }
    el_error_box.textContent = message;
    el_error_box.className = className;
    el_error_box.style = "display:block";

    setTimeout(() => {
      el_error_box.style = "display:none";
    }, 1000);
  }
  clearFields(target) {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }

  deleteBook(id) {
    const list = document.querySelector("#book-table-body");
    list.deleteRow(id - 1);
  }
}

book = new Book("My Title", "My Author", "My ISBN");
console.log(book.title);

el_submit = document.querySelector("#submit");
el_submit.addEventListener("click", handleEvents);
el_table = document.querySelector("#book-table");
el_table.addEventListener("click", handleEvents);

function handleEvents(e) {
  const ui = new UI();

  if (e.target.id === "close") {
    id = e.target.parentElement.parentElement.parentElement.rowIndex;
    ui.deleteBook(id);
  } else if (e.target.id === "submit") {
    if (document.querySelector("#title").value === "") {
      ui.functionshowAlert("Title is empty.", "error");
      return;
    }
    if (document.querySelector("#author").value === "") {
      ui.functionshowAlert("Author is empty.", "error");
      return;
    }
    if (document.querySelector("#isbn").value === "") {
      ui.functionshowAlert("ISBN is empty.", "error");
      return;
    }
    const book = new Book(
      document.querySelector("#title").value,
      document.querySelector("#author").value,
      document.querySelector("#isbn").value
    );

    console.log("Submit is clicked");
    ui.addBookToList(book);
    ui.functionshowAlert("Book is successfully added.", "success");
    ui.clearFields();
  }
}
