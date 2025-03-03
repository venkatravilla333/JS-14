


var timeout = setTimeout(() => {
  console.log('timeout')
}, 4000)

var interval = setInterval(() => {
  console.log('interval')
}, 4000)

var timeoutBtn = document.getElementById('timeout')

function clearFun() {
  clearTimeout(timeout)
}

timeoutBtn.addEventListener('click', clearFun)
var intervalBtn = document.getElementById('interval')

function intervalFun() {
  clearInterval(interval)
}
intervalBtn.addEventListener('click', intervalFun)
