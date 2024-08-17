// ! Object part 2

function calculateCartPrice(...num) { // ...num is res operator
    return num;
}
// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200, 400, 600));

const user = {
    username :  'sidhant',
    price : '199'
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user);
handleObject({
    username : 'Sam',
    price : '399'
});


const newArray = [200, 400, 600]
function returnSecondvalue(value) {
    return value[1]
}

console.log(returnSecondvalue(newArray))