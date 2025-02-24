

// var parent = document.getElementById('parent')
// var child = document.getElementById('child')
// var subchild = document.getElementById('subchild')


// var parentFun = (e) => {
//   console.log(e)
//   console.log('parent')
// }

// parent.addEventListener('click', parentFun,)

// var childFun = (e) => {
//   console.log(e.target)
//   console.log('child')
// }

// child.addEventListener('click', childFun)

// var subChildFun = (e) => {
  // e.stopPropagation()
  //  console.log(e)
  //  console.log(e.target)
  //  console.log(e.clientX)
  //  console.log(e.offsetX)
  //  console.log(e.clientY)
  //  console.log(e.offsetY)
  // console.log('sub child')
// }

// subchild.addEventListener('click', subChildFun)

//event delegation

var table = document.getElementById('table')
console.log(table)


var tableClick = (e) => {
  console.log('clicked')
  console.log(e)
  console.log(e.target)
}

table.addEventListener('click', tableClick)