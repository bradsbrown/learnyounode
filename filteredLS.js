var fs = require('fs')
var path = require('path')

function callback(err, list) {
  var ext = '.' + process.argv[3]
  for (i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === '.' + process.argv[3]) {
      console.log(list[i])
    }
  }
}

fs.readdir(process.argv[2], callback)
