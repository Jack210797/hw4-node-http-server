import http from 'http'
import {
  geenerateHtml,
  geenerateText,
  geenerateJson,
  geenerate404,
  postData,
  generateForm,
  geenerateTodos
} from './api.mjs'

const PORT = 3000

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') return geenerateHtml(req, res)

  if (req.method === 'GET' && req.url === '/text') return geenerateText(req, res)

  if (req.method === 'GET' && req.url === '/json') return geenerateJson(req, res)

  if (req.method === 'GET' && req.url === '/todos') return geenerateTodos(req, res)
  if (req.method === 'POST' && req.url === '/todos') return postData(req, res)

  if (req.method === 'GET' && req.url === '/form') return generateForm(req, res)

  geenerate404(req, res)
})

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
