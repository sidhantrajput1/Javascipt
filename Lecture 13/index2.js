const cart = ['shoes', 'pants', 'clothes', 'Bra']

createOrder(function () {

    ProceedToPayment(OrderId, function(paymentinfp) {

        showSummeryOrder(paymentinfp, function() {

            updateWalletbalance()

        })

    })
})

// promise chaining

createOrder(cart)
    .then(function (OrderId) {
        return ProceedToPayment(OrderId)
    })
    .then(function (paymentinfp) {
        return showSummeryOrder(paymentinfp)
    })
    .then(function (paymentinfp) {
        return updateWalletbalance(paymentinfp)
    })



// Promise is a object that is representing eventually completion of Asynchronous operation

/*

createOrder(cart)
    .then(function (OrderId) {
        return ProceedToPayment(OrderId)
    })
    .then(function (paymentinfp) {
        return showSummeryOrder(paymentinfp)
    })
    .then(function (paymentinfp) {
        return updateWalletbalance(paymentinfp)
    })

const promise = createOrder(cart);

promise.then(function (OrderId) {
    ProceedToPayment(OrderId)
})


const GITHUB_API = 'https://api.github.com/users/sidhantrajput1'

const user = fetch(GITHUB_API);

console.log(user)

user.then(function (data) {
    console.log(data)
})

*/