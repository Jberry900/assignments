const peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
const sorted = peopleArray.sort(function(a, b){
    if(a.firstName < b.firstName){
        return -1
    } if(a.firstName > b.firstName){
        return 1
    } 
    return 0
})
const ofAge = peopleArray.filter(function(people){
    if(people.age >= 18){
        return people
    }
    sorted
})

console.log(ofAge)


