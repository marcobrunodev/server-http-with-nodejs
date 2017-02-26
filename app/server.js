let http = require('http')
let port = 3000
let ip = 'localhost'

let server = http.createServer((req, res) => {
  let responses = []
  responses['/'] = '<h1>Home</h1>'
  responses['/inscreva-se'] = '<h1>Inscreva-se</h1>'
  responses['/local'] = '<h1>Local</h1>'
  responses['/contato'] = '<h1>Contato</h1>'
  responses['/naoExiste'] = '<h1>URL sem resposta definida!</h1>'

  res.end(responses[req.url] || responses['/naoExiste'])
})

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
