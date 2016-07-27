var fs = require('fs')
var path = require('path')


module.exports = function (dirPath, rawExt, callback) {
  var ext = '.' + rawExt
  var final = []
  fs.readdir(dirPath, function (err, data) {
    if (err)
      return callback(err)
    for (i=0; i < data.length; i++) {
      if (path.extname(data[i]) === ext) {
        final.push(data[i])
      }
    }
    callback(null, final)
  })
}
