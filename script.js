const inputField = document.getElementById("to-do-input");
const AddButton = document.getElementById("to-do-btn");
const listContainer = document.querySelector(".display-list");
const listTasks = document.querySelector(".item");

const dateToday = document.querySelector(".date");

// Display Current date
const date = new Date().toLocaleDateString();
dateToday.innerHTML = date;

// Add new item in the list
const addNewItem = () => {
  let inputValue = inputField.value;
  console.log(inputValue);
  const singleListDisplay = `    
      <div class="single-task">
          <li class="item">${inputValue}</li>
          <div class="button-icons">
            <button><i class="fa-solid fa-square-check"></i></button>
            <button><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
`;

  listContainer.insertAdjacentHTML("beforeend", singleListDisplay);
  inputField.value = "";
};

// Event Listeners
AddButton.addEventListener("click", () => {
  addNewItem();
});

inputField.addEventListener("keydown", (event) => {
  if (event.code === "Backspace" || event.code === "Enter") {
    addNewItem();
  }
});
