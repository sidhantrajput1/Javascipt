const saySidhant = function () {
    console.log('jay shree krishna');
}

const changeText = function () {
    document.querySelector('h3')
    .innerHTML = "Hello from the server side !!"
}

// setTimeout(saySidhant, 2000)
const changeMe = setTimeout(changeText, 2000)

document
   .querySelector('#stop')
   .addEventListener('click', function() {
    clearTimeout(changeMe)
    console.log('Stopped');
})