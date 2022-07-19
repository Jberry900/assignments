const myForm = document["addItem"]
const myStuff = document["stuff"]
const remove = document["delButton"]
const del = document.createElement("button")
const itemsAdded = myForm.title.value;
const item = document.createElement("li");


myForm.addEventListener("submit", function(event){
    event.preventDefault();
    const itemsAdded = myForm.title.value;
    myForm.title.value = "";
    const del = document.createElement("button")
    const item = document.createElement("li");
    item.textContent = itemsAdded + " ";
    del.textContent = "x";
    document.getElementById("list").append(item);
    item.appendChild(del)
    
    del.addEventListener("click", function() {
       item.remove();
    });
})
