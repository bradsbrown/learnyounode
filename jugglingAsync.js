var http = require('http')

var urls = [process.argv[2], process.argv[3], process.argv[4]]
var check = 0
var results = []

function finalCallback() {
  if (check === 3) {
    results.forEach(function(result) {
      console.log(result)
    })
  }
}

http.get(urls[0], function callback (response) {
  response.setEncoding('utf8')
  var string = ''
  response.on('data', function (data) {
    string += data
  })
  response.on('end', function () {
    results[0] = string
    check += 1
    finalCallback()
  })
})

http.get(urls[1], function callback (response) {
  response.setEncoding('utf8')
  var string = ''
  response.on('data', function (data) {
    string += data
  })
  response.on('end', function () {
    results[1] = string
    check += 1
    finalCallback()
  })
})

http.get(urls[2], function callback (response) {
  response.setEncoding('utf8')
  var string = ''
  response.on('data', function (data) {
    string += data
  })
  response.on('end', function () {
    results[2] = string
    check += 1
    finalCallback()
  })
})
