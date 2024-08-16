// ! Object Part 2

// const tinderUser = new Object() // singleton
const tinderUser = { }  // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sidd"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            firstName  : "Sidhant",
            lastName : "Singh"
        }
    }

}

// console.log(regularUser.fullname?.userFullname?.firstName);

const obj1 = {
    "1" : "a",
    "2" : "b"
}

const obj2 = {
    "3" : "a",
    "4" : "b"
}

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const employee = [
    {
        id  : " 11",
        email : "hh1@email.com"
    },
    {
        id  : " 12",
        email : "hh2@email.com"
    },
    {
        id  : " 13",
        email : "hh3@email.com"
    },
]

// const obj3 = employee[1].email
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))