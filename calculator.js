const button = document.getElementById("btn");

document.addEventListener("click", (button) => {
    console.log("button", button.target.innerText);
});
