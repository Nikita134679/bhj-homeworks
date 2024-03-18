const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = Array.from(document.querySelectorAll(".tab__content"));

tab.forEach((element, index) => {
    element.addEventListener("click", item => {
        tab.forEach(item => {
            item.classList.remove('tab_active');
        });
        tabContent.forEach(item => {
            item.classList.remove('tab__content_active');
        });
        element.classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');
    });
});
