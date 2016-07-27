var http = require('http')
var url = require('url')

var port = process.argv[2]

var server = http.createServer(function (req, res) {
  path = url.parse(req.url, true)
  date = new Date(path.query.iso)
  res.writeHead(200, {'Content-Type': 'application/json'})
  if (path.pathname === '/api/parsetime') {
    res.end(JSON.stringify({'hour': date.getHours(), "minute": date.getMinutes(), "second": date.getSeconds()}, null, '\t'))
  }
  if (path.pathname === '/api/unixtime') {
    res.end(JSON.stringify({'unixtime': date.getTime()}, null, '\t'))
  }
})
server.listen(port)
