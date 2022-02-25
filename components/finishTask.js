const finishTask = (update, id) => {
    const registeredTasks = JSON.parse(localStorage.getItem("tasks"));

    registeredTasks[id].finished = !registeredTasks[id].finished;

    localStorage.setItem("tasks", JSON.stringify(registeredTasks));

    update();
}

const FinishButton = (update, id) => {
    const finishButton = document.createElement("button");

    finishButton.classList.add("check-button");
    finishButton.innerText = "finish";

    finishButton.addEventListener("click", () => finishTask(update, id));

    return finishButton;
}

export default FinishButton;