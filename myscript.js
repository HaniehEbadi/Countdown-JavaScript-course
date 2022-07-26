var n = 2;   // n = num
var m = n - 1;  // m = minute
var s = 60;   // s = second
var c = 100 * 60 * n;
var countdown;

var padZero = function(num) {
  if (num < 10) {
    num = num.toString()
    num = num.padStart(2,'0')
  }
  return num
}

var start = function() {
  countdown = setInterval(function counter() {
    if (c % 100 == 0) {
      ms = 100
      s -= 1
      if (s == 0 && c != 100) {
        m -= 1
        s = 60
      }
    }

    ms -= 1
    c -= 1

    ms = padZero(ms)
    s = padZero(s)

    if (c == 0) {
      clearInterval(countdown)
    }

    document.getElementById('minute').innerHTML = m + ':'
    document.getElementById('second').innerHTML = s + '.'
    document.getElementById('miliSecond').innerHTML = ms
  },10)
  document.getElementsByClassName('start')[0].disabled = true
  document.getElementsByClassName('stop')[0].disabled = false
  document.getElementsByClassName('reset')[0].disabled = false
}

var stop = function() {
  clearInterval(countdown)
  document.getElementsByClassName('start')[0].disabled = false
  document.getElementsByClassName('stop')[0].disabled = true
}

var reset = function() {
  stop()
  m = n - 1
  s = 60
  c = 6000 * n
  document.getElementById('minute').innerHTML = n + ':'
  document.getElementById('second').innerHTML = '00.'
  document.getElementById('miliSecond').innerHTML = '00'
  document.getElementsByClassName('reset')[0].disabled = true
}