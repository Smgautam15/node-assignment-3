
const http = require('http')
const fs = require('fs')


const server = http.createServer((req, resp) => {
    fs.writeFile('index.html', '<h1> Hello World </h1>  <p> This is Satendra Mani Gautam</p>', (err) => { ////used to asynchronously write the specified data to a file
    })
    fs.readFile('./index.html','utf-8', (err, data) => {
        if (err) {
            resp.writeHead(404)//sends a response header to the request
            resp.write("Page Not Found")
        }
        else{
            resp.writeHead(200, { 'content-type': 'text/html' })//Type in the response is the header we can set to inform how client would interpret the data from the server
            resp.write(data)
        }
        resp.end()// quickly end the response without sending any data
    })
})

server.listen(5000, () => {  // Create a server that listens on port 5000 of your computer.
    console.log("server started")
})

