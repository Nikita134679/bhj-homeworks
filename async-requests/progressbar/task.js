const form = document.getElementById("form");
const progress = document.getElementById("progress");
const input = document.getElementById("file");


form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let formData = new FormData(form);
    formData.append("file","file.value");

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(formData)

    xhr.addEventListener("load", () => {
        obj = JSON.parse(xhr.response);
        progress.value = "1";
    })
});