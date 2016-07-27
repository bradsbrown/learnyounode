var fs = require('fs')

data = fs.readFileSync(process.argv[2])
var str = data.toString()
var lines = str.split('\n')
console.log(lines.length - 1)
