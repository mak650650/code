const http = require('http');
const server = http.createServer();
const fs = require('fs');
const HOST = '127.0.0.1';
const PORT = '8080';

function doOnIncoming(req,res){
    if(req.url === "/"){
        fs.readFile('index.html','utf-8',(err,data)=>{
            if(err){
                res.end(err);
            }
            res.end(data);
        })
        
    }
    else if(req.url === '/about'){
        fs.readFile('about.html','utf-8',(err,data)=>{
            if(err){
                res.end(err);
            }
            res.end(data);
        })
        
    }
    else if(req.url === '/contact-me'){
        fs.readFile('contact-me.html','utf-8',(err,data)=>{
            if(err){
                res.end(err);
            }
            res.end(data);
        })
    }
    else{
        fs.readFile('404.html','utf-8',(err,data)=>{
            if(err){
                res.end(err);
            }
            res.end(data);
        })
    }
}
function doOnError(req,res) {
    res.end(`<h1>Error,Not Found</h1>`);
}

server.on('request',doOnIncoming);
server.on('clientError',doOnError);

server.listen(PORT, ()=>{
        console.log(`server is live on ${HOST}:${PORT}`);
    })
