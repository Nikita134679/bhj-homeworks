const products = document.querySelector(".products");
const cartProducts = document.querySelector(".cart__products");
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const productDel = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const productInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const productValue = document.getElementsByClassName("product__quantity-value");
const productImage = Array.from(document.querySelectorAll(".product__image"));
const product = Array.from(document.querySelectorAll(".product"));

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

        const search = [...cartProducts.children].findIndex(child => child.dataset.id === element.parentElement.parentElement.parentElement.dataset.id);

        if (search != -1) {
            productCount.textContent = +productCount.textContent + +productValue[index].textContent;
        } else {
            let cartProduct = document.createElement("div");
            cartProducts.appendChild(cartProduct);
            cartProduct.classList.add("cart__product");
            cartProduct.dataset.id = product[index].dataset.id;

            let img = document.createElement("img");
            cartProduct.appendChild(img);
            img.classList.add("cart__product-image");
            img.src = productImage[index].src;
    
            productCount = document.createElement("div");
            cartProduct.appendChild(productCount);
            productCount.classList.add("cart__product-count");
            productCount.textContent = productValue[index].textContent;
        }
    });
});