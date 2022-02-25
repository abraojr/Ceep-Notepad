const deleteTask = (update, id) => {

    const index = id;
    const registeredTasks = JSON.parse(localStorage.getItem("tasks"));

    registeredTasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(registeredTasks));

    update();
}

const DeleteButton = (update, id) => {
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => deleteTask(update, id));

    return deleteButton;
}

export default DeleteButton;