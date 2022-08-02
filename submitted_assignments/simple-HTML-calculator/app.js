const formAdd = document["addForm"]
const formSub = document.subtractForm
const formMult = document.multiplyForm

formAdd.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNumb = formAdd.add1.value;
    const secondNumb = formAdd.add2.value;
    const result = parseFloat(firstNumb) + parseFloat(secondNumb)
    const h3 = document.createElement('h3');
    h3.textContent = firstNumb + " + " + secondNumb + "= " + result;
    document.getElementById("add").append(h3);
})

formSub.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNumb = formSub.sub1.value
    const secondNumb = formSub.sub2.value
    const result = parseFloat(firstNumb) - parseFloat(secondNumb)
    const h3 = document.createElement('h3');
    h3.textContent = firstNumb + " + " + secondNumb + "= " + result;
    document.getElementById("subtract").append(h3);
})

formMult.addEventListener("submit", function(event) {
    event.preventDefault()

    const firstNumb = formMult.mult1.value
    const secondNumb = formMult.mult2.value
    const result = parseFloat(firstNumb) * parseFloat(secondNumb)
    const h3 = document.createElement('h3');
    h3.textContent = firstNumb + " + " + secondNumb + "= " + result;
    document.getElementById("multiply").append(h3);
})