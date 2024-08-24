const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solution 1
    // fs.readFile('test-file.txt' , (err, data) => {
    //     if(err) console.log(err)
    //     res.end(data)    
    // })

    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data' , chunk => {
    //     res.end(chunk);
    // })

    // readable.on("end" , () => {
    //     res.end();
    // })

    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 404;
    //     res.end('File is not found');
    // })

    // Solution 3

    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res)

})

server.listen(8000, "127.0.0.3", () => {
    console.log('Listening...');
})