var reader = require('./mimHelper.js')

function callback(err, list) {
  list.forEach(function(file) {
    console.log(file)
  })
}

reader(process.argv[2], process.argv[3], callback)
