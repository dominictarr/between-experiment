var opts = require('minimist')(process.argv.slice(2))
//model editing a file by performing N inserts
//with probabaly J of a jump, using a given setup for between.

var test = module.exports = function (N, J, between, each) {
  var last, i = 0, length = 0
  var a = [last = between.lo.toString(), between.hi]

  while(N--) {
    if(Math.random() < J)
      i = ~~(Math.random()*(a.length-1))

    try {
    last = between(a[i], a[i+1])
    } catch (err) {

      throw err
    }
    length += last.length
    a.splice(++i, 0, last)
    each(a, length)
  }
  return a
}

var between =
  opts.bisecting ? require('bisecting-between')() : require('between')

console.log('N, avg')

test(opts.N, opts.J, between, function (a, length) {
  if(0 == (a.length % 10))
    console.log([a.length, length/a.length].join(', '))
})


