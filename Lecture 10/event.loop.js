const fs = require('fs');
const crypto = require('crypto')

const start = Date.now()
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => console.log("Timer 1 Finished"), 0)
setImmediate(() => console.log("Immediate 1 finished"))

fs.readFile( "test-file.txt",() => {
    console.log("I/O Finished");
    console.log('-----------------------')

    setTimeout(() => console.log("Timer 2 Finished"), 0)
    setTimeout(() => console.log("Timer 3 Finished"), 3000)
    setImmediate(() => console.log("Immediate 2 finished"))

    process.nextTick(() => console.log("Process.nextTick"));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512' , () => {
        console.log(Date.now() - start , 'Password encrpted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512' , () => {
        console.log(Date.now() - start , 'Password encrpted')
    })
    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512' , () => {
        console.log(Date.now() - start , 'Password encrpted')
    })
})

console.log("Hello from the top level Code")

/*

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start , 'Password encrpted')

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start , 'Password encrpted')

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start , 'Password encrpted')

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512')
    console.log(Date.now() - start , 'Password encrpted')

    


console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");

*/