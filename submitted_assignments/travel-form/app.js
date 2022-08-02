const form = document.travelForm;

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const age = form.age.value;

    const gender = form.gender.value;

    const location = document.getElementById("location");
    const locValue = location.options[location.selectedIndex].value;

    const dietCheck = [];

    for(let i = 0; i < form.diet.length; i++) {
        if(form.diet[i].checked) {
            dietCheck.push(" " + form.diet[i].value)

        }
    }
    alert("Name: " + firstName +" "+ lastName + "\n" + "Age: " + age + "\n" + "Gender: " + gender + "\n" + "Location: " + locValue + "\n" + "Diet Preference: " + dietCheck);
})