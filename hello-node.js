var http = require("http")
http.createServer(function (request, response) {
    
    
    response.end('<h1>hello node</h1>\n');
 }).listen(3000);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:3000/');

 