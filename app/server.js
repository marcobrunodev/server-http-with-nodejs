  let http = require('http')
  let port = 3000
  let ip = 'localhost'

  let server = http.createServer((req, res) => {
    if (req.url == '/') {
      res.end('<h1>Home</h1>')
    }

    res.end('<h1>URL sem resposta definida!</h1>')
  })

  server.listen(port, ip, () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
  })
