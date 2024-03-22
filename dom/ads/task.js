const cases = Array.from(document.querySelectorAll(".rotator__case"));



function changeName() {
    let indexRotator = cases.findIndex(item =>
    item.classList.contains("rotator__case_active"));
    let currentCase = cases[indexRotator];
    currentCase.classList.remove("rotator__case_active");
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    };
    currentCase = cases[getRandomIntInclusive(0, cases.length)];
    currentCase.classList.add("rotator__case_active");
};

setInterval(() => {
    changeName();
}, 1000);