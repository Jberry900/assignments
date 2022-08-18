const btn = document.getElementById("btn");
const display = document.getElementById("count");
let count = "";

btn.onclick = function() {
    count++;
    display.innerHTML = count;
    localStorage['savedClicks'] = count;
}
document.addEventListener("DOMContentLoaded", () => {
    let clicks = localStorage.savedClicks;
    display.innerHTML = clicks;
})