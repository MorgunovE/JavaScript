// (function(exports, require, module, __dirname, __filename) {
// const chalk = require('chalk')
// const text = require('./data')
// console.log(chalk.blue('Hello World'))
// console.log(chalk.blue(text))
// console.log(__dirname)
// console.log(__filename)
// })

const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
  const ext = path.extname(filePath)
  let contentType = 'text/html'
  switch(ext) {
    case '.css':
      contentType = 'text/css'
      break
    case '.js':
      contentType = 'text/javascript'
      break
    default:
      contentType = 'text/html'
  }
  if(!ext) {
    filePath += '.html'
  }
  console.log(filePath)
  fs.readFile(filePath, (err, content) => {
    if(err) {
      fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
        if(err) {
          res.writeHead(500)
          res.end('Error')
        } else {
          res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(data)
        }
      })
    } else {
      res.writeHead(200, {
        'Content-Type': contentType
      })
      res.end(content)
    }
  })
  // res.end()
  // if(req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if(err) {
  //       throw err
  //     }
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //       // 'Content-Type': 'text/plain'
  //     })
  //     res.end(data)
  //   })
  // } else if(req.url === '/contact') {
  //   fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
  //     if(err) {
  //       throw err
  //     }
  //     res.writeHead(200, {
  //       'Content-Type': 'text/html'
  //       // 'Content-Type': 'text/plain'
  //     })
  //     res.end(data)
  //   })
  // }
  // console.log(req.url)
})
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`)
})