const products = document.querySelector(".products");
const cartProducts = document.querySelector(".cart__products");
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const productDel = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const productInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const productValue = document.getElementsByClassName("product__quantity-value");
const productImage = Array.from(document.querySelectorAll(".product__image"));
const product = document.getElementsByClassName("product");
const cartProduct = document.getElementsByClassName("cart__product");
const productCount = document.getElementsByClassName("cart__product-count");

productDel.forEach((element, index) => {
    element.addEventListener('click', () => {
        let value = productValue[index].textContent
        if (productValue[index].textContent <= 1) {
            return
        } else {
            productValue[index].textContent = +value - 1
        };
      });
});

productInc.forEach((element, index) => {
    element.addEventListener('click', () => {
        let value = productValue[index].textContent
        productValue[index].textContent = +value + 1
    });
});

productAdd.forEach((element, index) => {
    element.addEventListener('click', () => {

        const search = [...cartProducts.children].findIndex(child => child.dataset.id === element.closest(".product").dataset.id);

        if (search != -1) {
            productCount[index].textContent = +productCount[index].textContent + +productValue[index].textContent;
        } else {
            cartProducts.insertAdjacentHTML("beforeEnd",`<div class="cart__product" data-id=${product[index].dataset.id}></div>`);
            cartProduct[index].insertAdjacentHTML("beforeEnd",`<img class="cart__product-image" src="${productImage[index].src}">`);
            cartProduct[index].insertAdjacentHTML("beforeEnd",`<div class="cart__product-count">${productValue[index].textContent}</div>`);
        }
    });
});