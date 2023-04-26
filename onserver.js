var http = require('http');
var fs = require('fs');

//send 404
function send404Response(response){
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("Page not found");
    response.end();
}

function onRequest(req, res){
    // console.log("A user made a req ",req.url);
    // res.writeHead(200, {"Context-Type":"text/plain"});
    // res.write("ONS AHAA LIIA ONN");
    if(req.method == "GET" && req.url == "/" ){
        res.writeHead(200,{"Content-Type":"text/html"});
        fs.createReadStream("./index.html").pipe(res);
    }else{
        send404Response(res);
    }
}


http.createServer(onRequest).listen(3001);
console.log("server running on 3001");

