const http = require('http');

// create new server
const server = http.createServer( (req, res) =>{
    if(req.method === 'POST'){

        let body = '';
        req.on('data', data => { body += data })

        req.on('end', () => {
            console.log(body);
            res.writeHead(200, {'Contact-Type': 'text/plain'});
            res.end('Success');
        })
    }
})

server.listen(2222);