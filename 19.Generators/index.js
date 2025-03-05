

// function regular() {
//   console.log(1)
//   return 100
  
// }
// var res = regular()
// console.log(res)

function* genFun() {

  try {
    console.log(1)
    yield 100
    
  } finally {
    console.log(2)
    yield 200
    yield 300
    
  }
}

var genObj = genFun()
console.log(genObj)

console.log(genObj.next())
console.log(genObj.return())
console.log(genObj.next())
console.log(genObj.next())

// for (var value of genObj) {
//   console.log(value)
// }