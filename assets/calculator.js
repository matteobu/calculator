
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        console.log(e.target.innerText, "has been pressed");
    });
}
