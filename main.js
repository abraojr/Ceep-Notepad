import FinishButton from "./components/finishTask.js";
import DeleteButton from "./components/deleteTask.js"

const handleNewItem = (event) => {

    event.preventDefault();

    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const value = input.value;

    const calendar = document.querySelector("[data-form-date]");
    const date = moment(calendar.value);
    const formatedDate = date.format('DD/MM/YYYY');

    const data = {
        value,
        formatedDate
    }

    const task = createTask(data);

    list.appendChild(task);
    input.value = "";

}

const createTask = ({ value, formatedDate }) => {

    const task = document.createElement("li");
    task.classList.add("task");
    const content = `<p class="content">${formatedDate} * ${value}</p>`;

    task.innerHTML = content;

    task.appendChild(FinishButton());
    task.appendChild(DeleteButton());;

    return task;
}

const newTask = document.querySelector("[data-form-button]");

newTask.addEventListener("click", handleNewItem);;