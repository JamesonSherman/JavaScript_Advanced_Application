const crypto = require('crypto');
let net = require('net');
const port = 1234;
const host = '127.0.0.1';
let sockets = [];
process.stdin.resume()
process.stdin.setEncoding('utf8');

const server = net.createServer();
server.listen(port, host, () => {
    console.log('TCP Server is running on port ' + port +'.');
});

server.on('connection', function (sock){
console.log('connected: ' + sock.remoteAddress + ':' + sock.remotePort);
sockets.push(sock);


sock.on('data', function(data){
sockets.forEach(function(sock,index,array){

    let decipher = crypto.createDecipher('aes-256-cbc', 'admin123');
    let decrypted = Buffer.concat([decipher.update(data), decipher.final()]);
    let val = JSON.parse(decrypted.toString());
    console.log(`sending: ${val}`);

    sock.write(val);
    
        });
    });
});
