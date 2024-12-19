
const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to home page')
    }

    if(req.url === '/about'){
        res.end('welcome to about')
    }

    res.end(`
        <h1>Oops!</h1>
        <p>We can't see the page you are looking for.</p>
        <a href = "/">back home</a>
        `)
})

server.listen(3000)