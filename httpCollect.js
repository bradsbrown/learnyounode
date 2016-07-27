var http = require('http')

http.get(process.argv[2], function callback (response) {
  response.setEncoding('utf8')
  var final = ''
  response.on('data', function (data) {
    final = final + data
  })
  response.on('end', function () {
    console.log(final.length)
    console.log(final)
  })
})
