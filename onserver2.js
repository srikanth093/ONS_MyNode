var connect = require('connect');
const { appendFile } = require('fs');
var http = require('http');

var app = connect();

function doFirst(request, response, next){
    console.log("ONNFIRST");
    next();
}
function doSecond(request, response, next){
    console.log("ONSECOND");
    next();
}

function doOSR(request, response, next){
    console.log("SR OSR");
}

app.use(doFirst);
app.use(doSecond);

app.use('/osr',doOSR);
http.createServer(app).listen(3002);
console.log("Server running on 3002");