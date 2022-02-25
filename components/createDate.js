import { Task } from "./createTask.js";

export const createDate = (date) => {

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const topDate = document.createElement("li");
    const dateMoment = moment(date, "DD/MM/YYYY");
    const content = `<p class="content-data">${dateMoment.format("DD/MM/YYYY")}</p>`;

    topDate.innerHTML = content;

    tasks.forEach(task => {
        const day = moment(task.formatedDate, "DD/MM/YYYY");
        const diff = dateMoment.diff(day);

        if (diff === 0) {
            topDate.appendChild(Task(task));
        }
    });

    return topDate;
}