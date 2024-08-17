console.log('jay Shree Krishna');

function sayMyName() {
    console.log('S');
    console.log('I');
    console.log('D');
    console.log('H');
    console.log('A');
    console.log('N');
    console.log('T');
}

// sayMyName();

function sum(a, b) {
    console.log(a + b)
}
// sum(5, 6)

// const res = sum(7 ,5)
// console.log(res) // unexpected syntex , please avoid this syntax, if you are using console for print the function value !!

function addNumber(a, b) { // parameter of function
    // let result = a + b
    // return result

    return a + b
}
// const result = addNumber(8 , 5) // arguement
// console.log('Sum is : ', result) // expected syntax because you are using return 

function userLoggedInMessage (username) {
    // if (username === undefined) {
    //     console.log('please enter a valid username')
    // }

    if (!username) {
        console.log('please enter a valid username')
        return
    }
    return `${username} just logged In`
}

console.log(userLoggedInMessage('Sidhant'))
console.log(userLoggedInMessage('Supriya')) // if you are not passing arguement in function defination , then it returns the undefined value ,  so arguement is always passed in function defination.

