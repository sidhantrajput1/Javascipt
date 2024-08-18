// let a = 5;
// const b = 50;
// var a = 300;


// if(true) {
//     let a = 5;
//     const b = 50;
//     var c = 500;
// }

// if(true) {
//     let a = 5;
//     const b = 50;
//     console.log('inner ',a)
// }


// console.log(a)
// console.log(b)
// console.log(c)

// Nested Scope 
function one() {
    const username = 'Sidhantrajput1'
    
    function two() {
        const website = 'Youtube'
        console.log(username);
    }

    // console.log(website) // gives error, because parent function can't access the variable of child function. but child function access the variable of parent function. 


    // two()
}

// one()

if(true ){ // parent scope 
    const username = 'sidhantrajput1'
    if(username === 'sidhantrajput1') { // child scope
        // const website = ' Github'
        // console.log(username + website)
    } 

    // console.log(website) // website variable can't access , because child is global scope.child scope is never allowed to access variable the outside the scope
}

// console.log(username) // gives error


// ! +++++++++++++++++++++++ Interesting ++++++++++++++++++++++

console.log(addOne(7))

function addOne(num) {
    return num + 1
}

// addOne(5);

// console.log(addtwo(9)) // gives error

const addtwo = function (num) {
    return num + 2
}

console.log(addtwo(5))