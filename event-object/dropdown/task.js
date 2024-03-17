const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = Array.from(document.querySelectorAll(".dropdown__link"));

const openMenu = function (event) {
    dropdownList.classList.toggle("dropdown__list_active");
    event.preventDefault();
}

dropdownItem.forEach(item => {
    item.addEventListener("click", e => {
    e.preventDefault();
    dropdownValue.textContent = item.textContent;
    dropdownList.classList.toggle("dropdown__list_active");
    })
})

dropdownValue.onclick = openMenu;