const form = document.getElementById("tasks__form");
const tasksList = document.getElementById("tasks__list");
const input = document.getElementById("task__input");
let array;
let arrayTask;


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let divTask = document.createElement("div");
    tasksList.appendChild(divTask);
    divTask.classList.add("task");

    let divTaskTitle = document.createElement("div");
    divTask.appendChild(divTaskTitle);
    divTaskTitle.classList.add("task__title");
    divTaskTitle.textContent = input.value;

    divTaskTitle.insertAdjacentHTML("afterEnd", '<a href="#" class="task__remove">&times;</a>');


    const remove = document.getElementsByClassName("task__remove");
    array = Array.from(remove);

    const taskRemove = document.getElementsByClassName("task");
    arrayTask = Array.from(taskRemove);

    form.reset();

    array.forEach((element, index) => {
        element.addEventListener("click", event => {
            arrayTask[index].remove();
        });
    });
});
