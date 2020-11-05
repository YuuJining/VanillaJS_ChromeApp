const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = 'toDos';

function paintToDo(text) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const toDos = localStorage.getItem(TODO_LS);
    if(toDos !== null) {

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();