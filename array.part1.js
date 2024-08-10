//+++++++++++++++++++++++++++++ Array ++++++++++++++++++++++++++++++++++++++


const myArr1 = [0, 1, 2, 3, 4, 5, 6]

const myArr = new Array("Sidhant", "kartik", 9, 7, 6)
// console.log(typeof myArr);

myArr.push("Ragini", "Supriya", 8)
// console.log(myArr);
// myArr.pop()

// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()

// console.log(myArr.includes(7))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C" , myArr);

console.log(myn2);
