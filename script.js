const inputField = document.getElementById("to-do-input");
const AddButton = document.getElementById("to-do-btn");
const listContainer = document.querySelector(".display-list");
const listTasks = document.querySelector(".item");

const dateToday = document.querySelector(".date");

// Display Current date
const date = new Date().toLocaleDateString();
dateToday.innerHTML = date;
