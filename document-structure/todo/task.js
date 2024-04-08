const form = document.getElementById("tasks__form");
const tasksList = document.getElementById("tasks__list");
const input = document.getElementById("task__input");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value.trim().length === 0) {
        return alert("Поле не должго быть пустым!");
    };

    const task = document.createElement("div");
    tasksList.appendChild(task)
    task.classList.add("task");
    task.insertAdjacentHTML("beforeEnd",`<div class="task__title">${input.value}</div>`);
    task.insertAdjacentHTML("beforeEnd", '<a href="#" class="task__remove">&times;</a>');

    let remove = task.querySelector(".task__remove");
    remove.addEventListener("click", event => {
        task.remove();
    });

    form.reset();

});
