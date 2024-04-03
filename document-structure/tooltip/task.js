const hasToolTip = Array.from(document.querySelectorAll(".has-tooltip"));
const body = document.getElementsByClassName("body");
const toolTip = document.createElement("div");
toolTip.classList.add("tooltip_active");
toolTip.classList.add("tooltip");
toolTip.setAttribute('style', 'left: 0; top: 0;')



hasToolTip.forEach((element, index) => {
    element.addEventListener("click", event => {
        event.preventDefault();
        if (element.previousElementSibling === toolTip) {
            toolTip.classList.toggle("tooltip_active");
        } else {
            hasToolTip[index].parentNode.insertBefore(toolTip, hasToolTip[index]);
            toolTip.textContent = hasToolTip[index].title;
        }
        let position = hasToolTip[index].getBoundingClientRect()
        let positionTop = Math.ceil(`${position.y}`)
        toolTip.style.top = `${positionTop + 25}px`

        let positionleft = Math.ceil(`${position.x}`)
        toolTip.style.left = `${positionleft + 5}px`
    });
});