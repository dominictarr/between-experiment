

var random = require('./random')

var between = require('between')
var bisect = require('bisecting-between')()

// from 0.5 to 0.05

var Stats = require('statistics')

function run(r, n, j, between) {
  var stats = Stats()
  for(var i = 0; i < r; i++) {
    var a = random(n, j, between, function (){})
    stats.value(a.join('').length / a.length)
  }
  return stats.toJSON()
}

var alg = {between: between, bisect: bisect}

console.log('J, between.avg, between.stdev, bisect.avg, bisect.stdev')
for(var j = 0.5; j >= 0.01; j -= 0.01) {
  var a = [j]
  var r = run(20, 1000, j, between)
  var r2 = run(20, 1000, j, bisect)
  console.log([j*100, r.mean, r.stdev, r2.mean, r2.stdev].join(', '))
}



