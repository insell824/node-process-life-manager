var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Hosomichi!\n');
}).listen(1337, '127.0.0.1');

var log4js = require('log4js')
var log = log4js.getLogger()
log.level = process.env.LOGGER_LEVEL || 'default'
var processLife =  require('../lib/index')
processLife.addEndListener(function () {
  return new Promise(function (resolve, reject) {
    log.info('Async Process completed.')
    resolve()
  })
})

processLife.addEndListener(function () {
  return new Promise(function (resolve, reject) {
    log.info('Async Process refused.')
    reject(new Error('ErrorMessage(Test)!'))
  })
})

processLife.addEndListener(function () {
  log.info('Process completed.')
})