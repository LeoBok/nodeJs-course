const http = require('http');

// both req and res are objects
// req is the incoming request, including info about the method and other stuff (es: client is requesting from web-server a website)
// res is what we are sending back

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home-page')
    } else if (req.url === '/about') {
        res.end('Welcome to the about-page')
    } else {
        res.end("Ops! It seem you are on the wrong page")
    }
})

server.listen(3000)

const _ = require('lodash')