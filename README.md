# Node.js Process Life Manager for Server
This is a manager that can call events when a Node process starts or dead.  
Compatible with　`Ctrl+C`, `nodemon` and `heroku`.

## Install
```node
npm i insell824/node-process-life-manager
```


## Usage
```node
const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(1337, '127.0.0.1');

const processLife =  require('node-process-life-manager')
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
```