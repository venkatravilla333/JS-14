

//local storage

var setLsBtn = document.getElementById('setLs')

var setLsFun = () => {
  localStorage.setItem('name', 'sachin')
  localStorage.setItem('age', 40)
  localStorage.setItem('city', 'mumbai')
}

setLsBtn.addEventListener('click', setLsFun)


var getLsBtn = document.getElementById('getLs')

var getLsFun = () => {
  console.log(localStorage.getItem('name'))
  var localparent = document.getElementById('localparent')
  var para = document.createElement('p')
  para.id='mypara'
  para.innerText = localStorage.getItem('name')
  localparent.appendChild(para)
}

getLsBtn.addEventListener('click', getLsFun)


var removeLsBtn = document.getElementById('removeLs')

var removeLsFun = () => {
  localStorage.removeItem('name')
  localStorage.removeItem('age')
  localStorage.removeItem('city')

}

removeLsBtn.addEventListener('click', removeLsFun)


var clearLsBtn = document.getElementById('clearLs')

var clearLsFun = () => {
  localStorage.clear()

}

clearLsBtn.addEventListener('click', clearLsFun)

//session storage

var setSsBtn = document.getElementById('setSs')

var setSsFun = () => {
  sessionStorage.setItem('name', 'dhoni')
}

setSsBtn.addEventListener('click', setSsFun)