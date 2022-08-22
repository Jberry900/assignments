//turn array into a total
const arr1 = [1,2,3];

const arr1Reduce = arr1.reduce((final, num) => final + num)
console.log(arr1Reduce)

//turn array of numbers into long string

const arr2 = [1, 2, 3];

const arr2Reduce = arr2.reduce((final, num) => final + num.toString())
console.log(arr2Reduce)

// how many voted

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const didVote = voters.reduce(function(final, voter){
    if(voter.voted){
        final.didVote++
    } else{
        final.didntVote++
    }
    return final
}, {didVote: 0, didntVote: 0})
console.log(didVote)

// Buy everything at once

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const values = Object.values(wishlist);

const buyAll = values.reduce((accumulator, value) => {
    return accumulator + value.price;
}, 0);
console.log(buyAll)

//flatten arrays into one

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
const children = arrays.concat(arrays[0], arrays[1], arrays[2]);
console.log(children)