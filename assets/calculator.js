const numberEntered = document.getElementById("number_btn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const subtractBtn = document.getElementById("subtractBtn");
const addBtn = document.getElementById("addBtn");
// const percent = document.getElementById("percent");
// const equal = document.getElementById("equal");
// const open_bracket = document.getElementById("open_bracket");
// const closing_bracket = document.getElementById("closing_bracket");
// const dot = document.getElementById("dot");
// const cancel = document.getElementById("cancel");
// const output = document.getElementById("output");

function add(e) {
    console.log(3 + 4 + 6);
}
function substract(e) {
    console.log("e", e);
}
function multiply(e) {
    console.log("e", e);
}
function divide(e) {
    console.log("e", e);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
