# Node.js Process Life Manager for Server
This is a manager that can call events when a Node process starts or dead.  
Compatible with `Ctrl+C`, `nodemon` and `heroku`.

## Getting Started
1. Install node-process-life-manager using npm:
> This is local package (not publishing).
```bash
npm i insell824/node-process-life-manager
```

2. Import `insell-node-process-life-manager` and create server.
- app.js
```node
const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(1337, '127.0.0.1');

const processLife =  require('insell-node-process-life-manager')
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
3. *Command line.*

```bash
node ./app.js
```
4. *Keyboard.*
Press `Ctrl+C` keys and finish the server.  
  
5. *Command line.*
```bash
Process completed.
Async Process refused.
Error: ErrorMessage(Test)!
  ...
Async Process completed.
```

## Uninstall
```bash
npm uni insell-node-process-life-manager
```