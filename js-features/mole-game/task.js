const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const arrHole = Array.from(document.getElementsByClassName("hole"));
arrHole.forEach((hole) => {
    hole.onclick = function() {
        if (hole.classList.contains("hole_has-mole") && dead.textContent != "10") {
            let deadHole = +dead.textContent;
            dead.textContent = ++deadHole;
        } else if (dead.textContent == "10"){
            alert("Победа!");
            lost.textContent = "0";
            dead.textContent = "0";
        } else if (lost.textContent != "5") {
            let lostHole = +lost.textContent;
            lost.textContent = ++lostHole;
        } else {
            alert("Вы проиграли!");
            lost.textContent = "0";
            dead.textContent = "0";
        }
    }
});