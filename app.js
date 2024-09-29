function resolveAfter2Second() {
    return new Promise(() => {
        setTimeout(() => {
            resolve("Resolved")
        },2000)
    })
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Second();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();