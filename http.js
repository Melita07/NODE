const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    // console.log(req);
    // res.write('Hello there user');
    // res.end();
    if(req.url=='/'){

        fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();

        });


        
        // res.write("<h1> Welcome to the homepage </h1>");
        
    }
    if(req.url=='/user'){
        res.write("Welcome user A");
        res.end();
    }
});

server.listen(3004, () => console.log('server is up and running'));