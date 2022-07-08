buttons = document.querySelectorAll("button");
const output = document.getElementsByClassName("output");

let screenValue = "";
let result = 0;

for (item of buttons) {
    item.addEventListener("click", (e) => {
        btnPressed = e.target.innerText;
        if (btnPressed) {
            if (btnPressed === "=") {
                console.log("output");
                console.log("uguale", eval(result));
                output[0].innerText = eval(result);
                result = 0;
            } else if (btnPressed <= 9) {
                result += btnPressed;
                console.log("button pressed: ", btnPressed);
                console.log("numbers", result);
            } else if (btnPressed == "." || "*" || "+" || "-" || "/") {
                result += btnPressed;
            }
        }
    });
}
