const FinishButton = () => {
    const finishButton = document.createElement("button");

    finishButton.classList.add("check-button");
    finishButton.innerText = "finish";

    finishButton.addEventListener("click", finishTask);

    return finishButton;
}

const finishTask = (event) => {
    const finishButton = event.target;

    const completedTask = finishButton.parentElement;

    completedTask.classList.toggle("done");
}

export default FinishButton;