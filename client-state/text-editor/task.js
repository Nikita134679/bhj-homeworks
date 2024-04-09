const editor = document.getElementById("editor");

editor.addEventListener('change', () => {
    localStorage.setItem("editor", `${editor.value}`);
});

editor.value = localStorage.getItem("editor");

