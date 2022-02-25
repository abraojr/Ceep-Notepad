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
    const time = date.format("HH:mm");
    const formatedDate = date.format('DD/MM/YYYY');
    const finished = false;

    const data = {
        value,
        formatedDate,
        time,
        finished
    }

    const updatedTasks = [...tasks, data]

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    input.value = "";

    renderTask();

}

export const Task = ({ value, time, finished }, id) => {

    const task = document.createElement("li");
    const content = `<p class="content">${time} * ${value}</p>`;

    if (finished) task.classList.add("done");

    task.classList.add("task");
    task.innerHTML = content;

    task.appendChild(FinishButton(renderTask, id));
    task.appendChild(DeleteButton(renderTask, id));

    return task;
}