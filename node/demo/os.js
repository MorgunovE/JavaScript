const os = require('os')
console.log('Operation system:', os.platform())
console.log('Architecture of CPU:', os.arch())
console.log('CPUs info:', os.cpus())
console.log('Free memory: ',os.freemem())
console.log('All memory: ',os.totalmem())
console.log('Base dir: ',os.homedir())
console.log('Working: ',os.uptime())