const DeleteButton = () => {
    const deleteButton = document.createElement("button");

    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", deleteTask);

    return deleteButton;
}

const deleteTask = (event) => {
    const deleteButton = event.target;

    const completedTask = deleteButton.parentElement;

    completedTask.remove();

    return deleteTask;
}

export default DeleteButton;