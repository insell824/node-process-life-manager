const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(1337, '127.0.0.1');

const processLife =  require('../lib/index')
processLife.addEndListener(function () {
  return new Promise(function (resolve, reject) {
    console.log('Async Process completed.')
    resolve()
  })
})

processLife.addEndListener(function () {
  return new Promise(function (resolve, reject) {
    console.log('Async Process refused.')
    reject(new Error('ErrorMessage(Test)!'))
  })
})

processLife.addEndListener(function () {
  console.log('Process completed.')
})