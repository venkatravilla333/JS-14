
// //how many ways we can create function


// var a = 100

// //function declartion
// function test() {
//   var a = 10
// }
// test()

// //function expression

// var x = function test() {
//   var b = 20
// }
// x()

// var y = function () {
//   var c = 30
// }
// y()

// var z = () => {
//   var d = 40
// }
// z()




// var a = 1

// function test() {
  //   var a = 10
  // }
  // test()
  
  // var x = ()=> {
    //   var b = 20
    // }
    
    // x()
    
    
//params vs arguments
// var a = 100
// var b  = 200
// var c  = 300
// function test(a, b, c) {
//   var x = 10
//   var y = 20
//   var z = 30
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(x)
//   console.log(y)
//   console.log(z)
// }
// test(1,2,3) //arguments

// default parameter (es-6)

// function test(a=10) {
//   console.log(a)
// }

// test(undefined)

//varying no of params vs arguments

// function test() {
//  var sum = 0
  // console.log(sum)
  // console.log(arguments)
  // console.log(arguments[0])
  // console.log(arguments[1])
  // console.log(arguments[2])
  // console.log(arguments[3])
  // console.log(arguments[4])
  // console.log(Array.isArray(arguments))

//   for (var value of arguments) {
//     console.log(value)
//     sum += value
//   }

//   return sum
// }
// var sum = test(1, 2, 3, 4, 5)
// console.log(sum)

// var test = (...rest) => {
//   var sum = 0
//   console.log(rest)
//   console.log(rest[0])
//   console.log(rest[1])
//   console.log(rest[2])
//   console.log(rest[3])
//   console.log(rest[4])
//   for (var value of rest) {
//     sum += value
//   }
//   return sum

// }
// var sum = test(1, 2, 3, 4, 5)
// console.log(sum)


//scope

//global

// storage

// var a = 1
// let b = 2
// const c = 3

// //access
// console.log(a)
// console.log(b)
// console.log(c)

// function test() {

//   //storage
//   var d = 4
//   let e = 5
//   const f = 6
  
//   //access
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   console.log(d)
//   console.log(e)
//   console.log(f)

//   if (true) {

//     var g = 7
//     let h = 8
//     const i = 9
  
//     //access
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }
//   // console.log(g)
//   // console.log(h)
//   // console.log(i)
// }
// test()
// // console.log(d)
// // console.log(e)
// // console.log(f)
// // console.log(g)
// // console.log(h)
// // console.log(i)

// {
//   let x = 10
//   console.log(x)
// }

// console.log(x)

//hoisting

//variables

// console.log(a)
// let a = 'sachin'
// console.log(a)

// console.log(b)
// var b = 40
// console.log(b)
// console.log(c)
// var c = true
// console.log(c)
// console.log(d)
// var d
// console.log(d)
// console.log(e)
// var e = null
// console.log(e)
// console.log(f)
// var f = {
//   name: 'kohli'
// }
// console.log(f)
// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// console.log(h)
// // h()
// var h = function test() {
//   console.log('named function exp')
// }
// console.log(h)
// h()

// console.log(i)
// var i = function () {
//   console.log('anonymous function exp')
// }
// console.log(i)

// console.log(j)

// var j = () => {
//   console.log('arrow funstion exp')
// }
// console.log(j)

// //function declartion
// console.log(declare)
// declare()
// function declare() {
//   console.log('function declaration')
// }
// console.log(declare)
// // declare()

// console.log(a)
// var a = 1
// console.log(a)

// function test() {
//   // console.log(a)
//    a = 100
//   console.log(a)
// }
// test()
// console.log(a)




