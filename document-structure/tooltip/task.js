const hasToolTip = Array.from(document.querySelectorAll(".has-tooltip"));
const body = document.querySelector("body");

hasToolTip.forEach((element, index) => {
    element.addEventListener("click", event => {
    event.preventDefault();
    let div = document.createElement("div");
    hasToolTip[index].insertAdjacentHTML("afterEnd", '<div class="tooltip"></div>');
    const toolTip = document.querySelector(".tooltip");
    toolTip.textContent = hasToolTip[index].title;
    toolTip.classList.add("tooltip_active")
    });
});
