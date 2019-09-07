# node-process-life-manager
This is a manager that can call events when a Node process starts or dead.


## Install
```node
npm i ____
```


## Usage
```node
require()
var processLife =  require('___/process-life-manager')
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
```