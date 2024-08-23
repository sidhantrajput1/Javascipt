const EventEmitter = require('events');
const https = require('http');

class Sales extends EventEmitter{
    constructor () {
        super();
    }
}

const myEmitter = new EventEmitter();

myEmitter.on('newSale', () => {
    console.log('There was a new Sale')
})

myEmitter.on('newSale', () => {
    console.log('Customer name is : Sidhant')
})

myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in the block`)
})

myEmitter.emit('newSale', 9);


const server = https.createServer()

server.on('request', (req, res) => {
    console.log('Request recieved 💕')
    res.end('Request Revieved');
})

server.on('request', (req, res) => {
    res.end('Another Request 💕');
})


server.on('close', (req, res) => {
    res.end('server closed 😒')
})

server.listen(8000, '127.0.0.2' ,() => {
    console.log('Waiting for request')
})