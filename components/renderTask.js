import { Task } from "./createTask.js";

export const renderTask = () => {
    const list = document.querySelector("[data-list]");

    const registeredTasks = JSON.parse(localStorage.getItem("tasks") || []);

    list.innerText = "";

    registeredTasks.forEach(task => {
        list.appendChild(Task(task));
    });
}