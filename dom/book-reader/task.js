const fontSize = Array.from(document.querySelectorAll(".font-size"));
const bookContent = document.querySelector(".book__content");

fontSize.forEach((element, index) => {
    element.addEventListener("click", item => {
        fontSize.forEach(item => {
            item.classList.remove("font-size_active");
        });
        item.preventDefault();
        element.classList.add("font-size_active");
        if (index === 0) {
            bookContent.classList.add("book_fs-small");
            bookContent.classList.remove("book_fs-big");
        };
        if (index === 1) {
            bookContent.classList.remove("book_fs-small");
            bookContent.classList.remove("book_fs-big");
        };
        if (index === 2) {
            bookContent.classList.add("book_fs-big");
            bookContent.classList.remove("book_fs-small");
        };
    });
    
});