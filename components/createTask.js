import FinishButton from "./finishTask.js";
import DeleteButton from "./deleteTask.js"
import { renderTask } from "./renderTask.js";

export const handleNewItem = (event) => {

    event.preventDefault();

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const input = document.querySelector("[data-form-input]");
    const value = input.value;

    const calendar = document.querySelector("[data-form-date]");
    const date = moment(calendar.value);
    const formatedDate = date.format('DD/MM/YYYY');

    const data = {
        value,
        formatedDate
    }

    const updatedTasks = [...tasks, data]

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    input.value = "";

    renderTask();

}

export const Task = ({ value, formatedDate }) => {

    const task = document.createElement("li");
    task.classList.add("task");
    const content = `<p class="content">${formatedDate} * ${value}</p>`;

    task.innerHTML = content;

    task.appendChild(FinishButton());
    task.appendChild(DeleteButton());;

    return task;

}