// object declare -> constructor , literal
// constructor - sigleton




// ! Objects Literals

const mysym = Symbol('key1')

const user = {
    name : "sidhant",
    "full name" : "Sidhant Singh",
    [mysym] : "keyy2",
    age : 20,
    email  : "sidhant@google.com",
    location : "Noida",
    isLoggedIn : false,
    lastloginDasys : ["Monday" , "Sunday"]
}

// console.log(user['email'])
// console.log(user["full name"])
// console.log(user.email)
// console.log(user[mysym])

// user.email = 'kartik@google.com'
// Object.freeze(user)
// user.email = 'k@gmail.com.com'
// console.log(user)

// user.greeting = function () {
//     console.log('Hello Js user');   
// }

user.greeting = function () {
    console.log(`Hello Js user ${this.name}`);   
}

console.log(user.greeting());
// console.log(user.greeting);
