const xhr = new XMLHttpRequest();
const item = document.getElementById("poll__title");
const poll = document.getElementById("poll__answers");
const pollAnswer = document.getElementsByClassName("poll__answers");

xhr.addEventListener("load", () => {
    obj = JSON.parse(xhr.response);
    console.log(obj);

    item.textContent = obj.data.title;
    let answersLength = obj.data.answers.length;
    
    for (let i = 0; i < answersLength; i++) {
        poll.insertAdjacentHTML("beforeEnd",`<button class="poll__answer"> ${obj.data.answers[i]} </button>`);
    };

    Array.from(pollAnswer).forEach((element, index) => {
        element.addEventListener("click", event => {
            alert("Спасибо, ваш голос засчитан!");
        });
    });
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.send();