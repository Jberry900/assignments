const goombaForm = document.goombaF;
const bombForm = document.bombF;
const cheepForm = document.cheepF;


goombaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const baddies = goombaForm.goomba.value;
    const total = parseInt(baddies) * 5;

    const h3 = document.createElement("h3");
    h3.textContent = "Total for captured Goombas: " + total + " coins.";
    document.getElementById("content").append(h3);

})

bombForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const baddies = bombForm.bomb.value;
    const total = parseInt(baddies) * 7;

    const h3 = document.createElement("h3");
    h3.textContent = "Total for captured Bob-Ombs: " + total + " coins.";
    document.getElementById("content").append(h3);
    
})

cheepForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const baddies = cheepForm.cheep.value;
    const total = parseInt(baddies) * 11;

    const h3 = document.createElement("h3");
    h3.textContent = "Total for captured Cheep-Cheeps: " + total + " coins.";
    document.getElementById("content").append(h3);
    
})