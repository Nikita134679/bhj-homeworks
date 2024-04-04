const form = document.getElementById("tasks__form");
const tasksList = document.getElementById("tasks__list");
const input = document.getElementById("task__input");
const link = document.getElementsByClassName("task__remove");
const task = document.getElementsByClassName("task");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.trim() != 0) {

        let divTask = document.createElement("div");
        tasksList.appendChild(divTask);
        divTask.classList.add("task");

        let divTaskTitle = document.createElement("div");
        divTask.appendChild(divTaskTitle);
        divTaskTitle.classList.add("task__title");
        divTaskTitle.textContent = input.value;

        divTaskTitle.insertAdjacentHTML("afterEnd", '<a href="#" class="task__remove">&times;</a>');


        form.reset();

    } else {
        alert("Поле не должго быть пустым!");
    };

    Array.from(link).forEach(e => {
        e.addEventListener("click", event => {
            e.parentNode.remove()
        })
    });
});