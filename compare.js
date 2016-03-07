

var random = require('./random')

var between = require('between')
var bisect = require('bisecting-between')()
var numstring = require('lexiographic-between/numstring')
var lex = require('lexiographic-between')
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

console.log('J, between, bisect, numstring, lexiographic')
for(var j = 50; j > 0; j --) {
  var a = [j]
  var r = run(20, 1000, j/100, between)
  var r2 = run(20, 1000, j/100, bisect)
  var r3 = run(20, 1000, j/100, numstring)
  var r4 = run(20, 1000, j/100, lex)
  console.log([j, r.mean, r2.mean, r3.mean, r4.mean].join(', '))
}



