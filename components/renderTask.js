import { deleteRepeatedDates, sortDate } from "../services/date.js";
import { createDate } from "./createDate.js";

export const renderTask = () => {
    const list = document.querySelector("[data-list]");

    const registeredTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    list.innerHTML = "";
    const singleDates = deleteRepeatedDates(registeredTasks);
    sortDate(singleDates);

    singleDates.forEach(day => {
        list.appendChild(createDate(day));
    });
}