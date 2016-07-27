var net = require('net')
var strftime = require('strftime')

var port = process.argv[2]

var server = net.createServer(function (socket) {
  var date = new Date()
  socket.end(strftime('%Y-%m-%d %H:%M', date) + '\n')
})

server.listen(port)
