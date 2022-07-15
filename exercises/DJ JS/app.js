let djBox = document.getElementById("square1")

document.getElementById("square1").addEventListener("mouseover", hoverFunction);
document.getElementById("square1").addEventListener("mousedown", downFunction);
document.getElementById("square1").addEventListener("mouseup", upFunction);
document.getElementById("square1").addEventListener("mouseout", leaveFunction);
document.getElementById("square1").addEventListener("dblclick", dblFunction);
document.addEventListener("wheel", wheelFunction);
document.addEventListener("keypress", keyFunction);


function hoverFunction() {
    djBox.style.backgroundColor = "blue"
}

function leaveFunction() {
    djBox.style.backgroundColor = "white"
}

function downFunction() {
    djBox.style.backgroundColor = "red"
}

function upFunction() {
    djBox.style.backgroundColor = "yellow"
}

function dblFunction() {
    djBox.style.backgroundColor = "green"
}

function wheelFunction() {
    djBox.style.backgroundColor = "orange"
}

function keyFunction() {
    djBox.style.background = "purple"
}

