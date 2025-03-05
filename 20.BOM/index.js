// console.log(window)

// console.log(window.innerHeight)
// console.log(window.innerWidth)

// window.alert('hello')

// var value = window.prompt()

// if (value) {
//   console.log(value)
// } else {
//   console.log(value)
// }

// var value = window.confirm()
// console.log(value)

// var openBtn = document.getElementById('open')

// var win
// function openWinFun() {
//    win = window.open('', '', 'width = 600px, height = 300px')
// }
// openBtn.addEventListener('click', openWinFun)


// var closeBtn = document.getElementById('close')

// function closeWinFun() {
//   win.close()
// }
// closeBtn.addEventListener('click', closeWinFun)


// var movewin = document.getElementById('move')

// var movewinFun = () => {
//   return win.moveTo(700, 400)
// }
// movewin.addEventListener('click', movewinFun)

// // //how to resize

// var resizewin = document.getElementById('resize')

// var resizewinFun = () => {

//    return win.resizeTo(50, 500);
// }

// resizewin.addEventListener('click', resizewinFun)

//navigator

// console.log(window.navigator.appName)
// console.log(window.navigator.platform)
// console.log(window.navigator.language)
// console.log(window.navigator.onLine)

//screen object

// console.log(window.screen.width)
// console.log(window.screen.height)

//location object

console.log(window.location.href)
console.log(window.location.pathname)
console.log(window.location.hostname)
console.log(window.location.port)
console.log(window.location.protocol)

var loadBtn = document.getElementById('load')
function loadFun() {
  window.location.assign("https://www.youtube.com")
}

loadBtn.addEventListener('click', loadFun)

//history

var forwardBtn = document.getElementById('forward')

function forwardFun() {
  window.history.forward()
}

forwardBtn.addEventListener('click', forwardFun)