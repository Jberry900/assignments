//-- double numbers --//

//const arr = [2, 5, 100];

//const result = arr.map(function(num){
//    return num * 2;
//});
//console.log(result)

//-- convert to string --//

//const arr = [2, 5, 100];

//const arrString = arr.toString();
//console.log(arrString)

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const capitalizeNames = peopleArray => peopleArray.map(name => 
	name.split(' ').map(word => 
		word[0].toUpperCase() + word.slice(1).toLowerCase()
	).join(' ')
);

const capitalizedNames = capitalizeNames(names);
console.log(capitalizedNames);
// show only names
const arr = [
    {
    name: "Angelina Jolie",
    age: 80
    },
    {
    name: "Eric Jones",
    age: 2
    },
    {
    name: "Paris Hilton",
    age: 5
    },
    {
    name: "Kayne West",
    age: 16
    },
    {
    name: "Bob Ziroll",
    age: 100
    }
    ]
    const namess = arr.map(function(names){
        return names.name
    })
    
    const arrs = [
        {
        name: "Angelina Jolie",
        age: 80
        },
        {
        name: "Eric Jones",
        age: 2
        },
        {
        name: "Paris Hilton",
        age: 5
        },
        {
        name: "Kayne West",
        age: 16
        },
        {
        name: "Bob Ziroll",
        age: 100
        }
        ]
        
    const matrixYes = arrs.map(function(folks){
        if (folks.age <= 18){
            console.log(folks.name + "Cant enter Matrix");
        } else {
            console.log(folks.name + "Can enter Matrix");
        }
    });
    console.log(matrixYes)
