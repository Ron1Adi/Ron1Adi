// Build-in http methode module
const http = require('http')
const server = http.createServer((req, res) => {
  if(req.url === '/'){
  res.end('welcome to our homepage')
  }
  if(req.url === '/about'){
  res.end('here is our short history')
  } 
  res.end(`
  <h1>Oooops!</h1> 
  <p>we cant seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `)
 // res.write();
 // res.end();
})
server.listen(5000)