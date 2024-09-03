// alert('ok')

const button = document.getElementById('get-location')

function getlocation(postion) {

}

function failedGotConnection () {
    console.log("There was Some isssue")
}

button.addEventListener('click' ,async () => {
    const result = navigator.geolocation.getCurrentPosition(getlocation, failedGotConnection)
    console.log(result);
    
})