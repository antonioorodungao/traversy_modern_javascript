//Storage Controller
const storageCtrl = (function () {
  return {};
})();

//Item Controller
const itemCtrl = (function () {
  //Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  const data = {
    total_calories: 0,
    items: [
      new Item(0, "Steak Dinner", 1200),
      new Item(1, "Cookies", 300),
      new Item(2, "Eggs", 400),
    ],
  };

  let current_item = null;

  return {
    getItems: function () {
      return data.items;
    },
    getData: function () {
      return data;
    },
    insertItem: function (item) {
      item.id = data.items.length;
      console.log(`Pushed ${item.id}  ${item.name}  ${item.calories}`);
      data.items.push(item);
    },
    updateTotalCalories: function () {
      data.total_calories = data.items.reduce((sum, x) => {
        return sum + parseInt(x.calories);
      }, 0);
    },
    getCurrentItem: function () {
      return current_item;
    },
    Item: Item,
  };
})();

//UI Controller
const UICtrl = (function () {
  let UISelector = {
    items_col_id: "#items",
    btn_add: ".add-btn",
    btn_update: ".update-btn",
    btn_delete: ".delete-btn",
    item_calories: "#item-calories",
    item_name: "#item-name",
    total_calories: ".total-calories",
    list_items: "#items",
    btn_back: ".back-btn",
  };

  let UIElements = {
    el_addbutton: document.querySelector(UISelector.btn_add),
    el_deletebutton: document.querySelector(UISelector.btn_delete),
    el_updatebutton: document.querySelector(UISelector.btn_update),
    meal_desc: document.querySelector(UISelector.item_name),
    calories: document.querySelector(UISelector.item_calories),
    el_total_calories: document.querySelector(UISelector.total_calories),
    el_list_items: document.querySelector(UISelector.list_items),
    el_btn_back: document.querySelector(UISelector.btn_back),
  };

  const refreshUIItemsList = function (items, total_calories) {
    let html = "";
    items.forEach((item) => {
      html += `<li class="collection-item" id="item-${item.id}">
      <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
    </li>`;
    });
    document.querySelector(UISelector.items_col_id).innerHTML = html;
    UIElements.el_total_calories.innerText = total_calories;
  };

  const loadItemForEdit = function (current_item) {
    UIElements.meal_desc.value = current_item.name;
    UIElements.calories.value = current_item.calories;
  };

  const editMode = function () {
    UIElements.el_deletebutton.style.display = "inline";
    UIElements.el_updatebutton.style.display = "inline";
    UIElements.el_addbutton.style.display = "none";
    UIElements.el_btn_back.style.display = "inline";
  };

  const addMode = function () {
    UIElements.el_deletebutton.style.display = "none";
    UIElements.el_updatebutton.style.display = "none";
    UIElements.el_addbutton.style.display = "inline";
    UIElements.el_btn_back.style.display = "none";
  };

  return {
    refreshUIItemList: refreshUIItemsList,
    clearfield: function () {
      UIElements.meal_desc.value = "";
      UIElements.calories.value = "";
    },
    loadItemForEdit: loadItemForEdit,
    UISelector: UISelector,
    UIElements: UIElements,
    editMode: editMode,
    addMode: addMode,
  };
})();

//App Controler
const appCtrl = (function (itemCtrl, UICtrl) {
  UICtrl.UIElements.el_addbutton.addEventListener("click", handleAddEvent);
  UICtrl.UIElements.el_list_items.addEventListener("click", handleItemEdit);
  UICtrl.UIElements.el_btn_back.addEventListener("click", handleBackButton);

  function handleItemEdit(e) {
    if (e.target.classList.contains("edit-item")) {
      console.log("Edit item is clicked");
      //load the clicked item
      let index = e.target.parentElement.parentElement.id.split("-")[1];
      itemCtrl.current_item = itemCtrl.getItems()[index];
      UICtrl.loadItemForEdit(itemCtrl.current_item);
      UICtrl.editMode();
      e.preventDefault();

      //refresh the edit field
      //display the edit buttons
    }
  }

  function handleAddEvent(e) {
    console.log("Add is clicked");
    let item = new itemCtrl.Item(
      null,
      UICtrl.UIElements.meal_desc.value,
      UICtrl.UIElements.calories.value
    );
    console.log(item);
    if (item.name != "" && item.calories != "") {
      itemCtrl.insertItem(item);
      itemCtrl.updateTotalCalories();
    }
    data = itemCtrl.getData();
    console.log(itemCtrl.getItems());
    UICtrl.refreshUIItemList(data.items, data.total_calories);
    UICtrl.clearfield();
    e.preventDefault();
  }

  function handleBackButton(e) {
    init();
    e.preventDefault();
  }

  let init = function () {
    data = itemCtrl.getData();
    console.log(itemCtrl.getItems());
    itemCtrl.updateTotalCalories();
    UICtrl.refreshUIItemList(data.items, data.total_calories);
    UICtrl.addMode();
    UICtrl.clearfield();
  };

  return {
    init: init,
  };
})(itemCtrl, UICtrl);

appCtrl.init();
