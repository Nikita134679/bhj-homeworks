const clikerCounter = document.getElementById("clicker__counter");
const cookies = document.getElementById("cookie");
cookies.onclick = function() {
    let clickAmount = +clikerCounter.textContent;
    clikerCounter.textContent = ++clickAmount;
    if (clickAmount % 2 === 0) {
        cookies.width = 400;
    } else {
        cookies.width = 200;
    }
}