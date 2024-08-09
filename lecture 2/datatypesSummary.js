

/* 
- Primitive data type
- 8 category
1. String 
2. null
3. number
4. boolean
5. undefined
6. integer
7. Symbol
8. bigInt

*/
const score = 100
const scoreValue = 100.4
const isLoggedIn = false
const outSideTemp = true
let userEmail;

const id = Symbol("123")
let anotherId = Symbol("123")

// console.log(id === anotherId);

/* 

- Refrence(Primitive type)
   1. Array
   2. Object
   3. Function

*/

const heroes = ["Shaktiman", "Naagraj", "Doga"]
let User = {
    name : "sidhant",
    age : 20
}


const myfuncion = function () {
    console.log("Jay Shree Krishna");
}

myfuncion();