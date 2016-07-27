var fs = require('fs')
var http = require('http')

var port = process.argv[2]
var response = fs.createReadStream(process.argv[3])

var server = http.createServer(function (req, res) {
  response.pipe(res)
})
server.listen(port)
