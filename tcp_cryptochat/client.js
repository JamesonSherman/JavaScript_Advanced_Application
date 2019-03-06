const crypto = require('crypto');
let net = require('net');
let host = '127.0.0.1';
let port = 1234;
let client = new net.Socket();
let packet = '';


console.log("please input text in the command line.");


client.connect(port,host,function() {
    console.log('Connected to:' + host + ':' + port);
    let standard_input = process.stdin;
    standard_input.setEncoding('utf-8');
    standard_input.on('data', function (data){
       
        //creates a cipher
        let cipher  = crypto.createCipher('aes-256-cbc', 'admin123');
        //write my buffer to cipher
        var encrypted = Buffer.concat([cipher.update(new Buffer(JSON.stringify(data), "utf8")), cipher.final()]);
        //end cipher
     
        // read the ciper to a string for transport
        //send packet
        client.write(encrypted);
    });
});


client.on('data', function (data) {
console.log('data: '+  data);
//client.destroy();
});

client.on('close', function() {
    console.log('connection closed');
});


