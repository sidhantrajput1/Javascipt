
const cart  = ['pants', 'shoes', 'Kurtas'];

// create order
// payment
// order summry
// update wallet

// ! Inversion of control

api.createOrderCart(cart, function () {

    api.proceedToPayMent(function () {

        api.showOrderSummery(

            function () {
                api.updateWallet();
            }

        );

    })

})






/*

1. Issue dwith callback
   a. Callback Hell - nested function
   b. inversion of control - you can pass a function in another function call so data is unmaintable 

Asynchronous - in environments where operations can be performed concurrently without blocking the execution of other tasks.

api.createOrderCart()

api.proceedToPayMent()

api.showOrderSummery();

api.updateWallet();

console.log('Namaste');

setTimeout( () => {
    console.log('Javascript');
}, 5000)

console.log('Hey Sidd');


*/