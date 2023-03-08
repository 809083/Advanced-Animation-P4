const http = require('node:http');
const mime = require('mime');
mime.getType('txt');                    // ⇨ 'text/plain'
mime.getExtension('text/plain');        // ⇨ 'txt'
// Create a local server to receive data from
const server = http.createServer();
// Listen to the request event
server.on('request', (request, res) => {
  //incoming message
  // console.log(request.method); //request.url request.header
 // request.;
  let mimeType = mime.getType("html");
  res.writeHead(200, { 'Content-Type': mimeType });
  res.end("<html><head><title>Test Server</title></head><body><h1>Hello World</h1></body></html>");
});
server.listen(8000);
console.log("Server Started on Port 8000. Press CTRL-C to terminate");
