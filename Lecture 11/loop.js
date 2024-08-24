
// Array-------------------------
const arr = [1, 2, 3, 4, 5, 6];
// for of loop
for (const num of arr) {
    // console.log(num)
}

// Strings-----------------------
let greetings = "HelloWorld";
for (const greet of greetings) {
    // console.log(greet);
}

// Map---------------------------

const map = new Map(); // Map only allowed unique value

map.set("In", "India");
map.set("Pak", "Pakistan");
map.set("fr", "France");
map.set("It", "Itly");

// console.log(map)


for (const [key, value] of map) {
    // console.log(key, ':-', value)
}

const myObj = { // Object is not iterable by forof loop
    'name' : 'sidhant',
    'age' : 20
}

for (const [key, value] of myObj) {
    // console.log(key, ':-', value)
}
