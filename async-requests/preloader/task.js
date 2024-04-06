const xhr = new XMLHttpRequest();
const items = document.getElementById("items");
const item = document.getElementsByClassName("item");
const removeImage = document.getElementById("loader");
let obj;
let value = [];
let charCode = [];

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    removeImage.classList.remove("loader_active");
    obj = JSON.parse(xhr.response);
    for (let key in obj.response.Valute) {
        value.push(obj.response.Valute[key].Value);
        charCode.push(obj.response.Valute[key].CharCode);
    };

    for (let i = 0; i < value.length; i++) {
        items.insertAdjacentHTML("beforeEnd",'<div class="item"></div>');
        item[i].insertAdjacentHTML("beforeEnd",`<div class="item__code">${charCode[i]}</div>`);
        item[i].insertAdjacentHTML("beforeEnd",`<div class="item__value">${value[i]}</div>`);
        item[i].insertAdjacentHTML("beforeEnd",`<div class="item__value">руб.</div>`);
    }
  }
})

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

xhr.send();