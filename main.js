import { handleNewItem } from "./components/createTask.js";
import { renderTask } from "./components/renderTask.js";

const newTask = document.querySelector("[data-form-button]");
newTask.addEventListener("click", handleNewItem);
renderTask();