console.log('Jay Shree Krishna');

const user = {
    username : 'sidhant',
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username}, welcome to web dev world`)
        // console.log(this)
    }
}
// console.log(this)

// user.welcomeMessage()
// user.username = 'Sidd'
// user.welcomeMessage();

// console.log(this)

// function chai () {
//     const username = 'Supriya'
//     console.log(this.username); // undefined
// }

// chai()

const chai = () => {
    const username = 'supriya'
    console.log(this);
}
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2;
} 

console.log(addTwo(7, 8))

// const sum = (num1, num2) => num1 + num2
const sum = (num1, num2) => ( num1 + num2 )
console.log(sum(9, 2))