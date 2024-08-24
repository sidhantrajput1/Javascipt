









/*
1. readable Streams

const fs = require('fs');
const readableStream = fs.createReadStream('example.txt');

readableStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
});

readableStream.on('end', () => {
    console.log('No more data.');
});


2. WritebleStreams


const fs = require('fs');
const writableStream = fs.createWriteStream('example.txt');

writableStream.write('Hello, World!\n');
writableStream.write('i am your author!!\n')
writableStream.end('Goodbye, World!\n');


*/