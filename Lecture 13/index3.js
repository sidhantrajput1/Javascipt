// console.log('Jay Shree Krishna');

const cart = ['Shoes', 'pants', 'kurtas'];

createOrder(cart) // orderId
    .then( function (orderId) { // Success part
        console.log(orderId)
        return orderId
    })
    .then(function (orderId) {
        return proceedToPayments(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
        // return paymentInfo;
    })
    .catch(function (err) { // failure part
        console.log(err.message)
    })

// producer 

function createOrder() {

    const pr = new Promise(function (resolve, reject) {

        // createOrder
        // validateOrder
        // orderId

        if (!validateCart(cart)) {
            const err = new Error('Card is not valid');
            reject(err);
        }

        const orderId = "123345yfdfs"
        if (orderId) {
            setTimeout(function() {
                resolve(orderId);
            }, 5000)
            // resolve(orderId);
        }

    });

    return pr;

}

function proceedToPayments( orderId ) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful")
    })
}


function validateCart (cart) {
    return true;
} 

/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.


onst cart = ['Shoes', 'pants', 'kurtas'];

const promise = createOrder(cart); // orderId
console.log(promise)

promise
    .then( function (orderId) { // Success part
        console.log(orderId)
        proceedToPayments(orderId);
    })
    .catch(function (err) { // failure part
        console.log(err.message)
    })
*/