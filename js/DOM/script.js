// alert("Yes you linked it")
console.log("yes you linked it")
var body = document.querySelector("body");

function double(element){
    console.log(element.innerText)
    element.innerText *= 2;
}

function over(element){
    element.style.height = "40vh"
    element.style.width = "40vh"
}

function out(element){
    element.style.height = "20vh"
    element.style.width = "20vh"
}

function justifyFlex(selectElement, flexBox){
    flexBox.style.justifyContent = selectElement.value
}

function alignFlex(selectElement, flexBox){
    flexBox.style.alignItems = selectElement.value
}

function toggleDarkMode(){
    body.classList.toggle('dark')
}