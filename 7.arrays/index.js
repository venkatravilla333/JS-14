

//How to create array

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)

//How to add new value to array

//ending
// arr.push(6)
// console.log(arr)
//starting
// arr.unshift(0)
// console.log(arr)
//any where
// arr.splice(0, 0, 0)
// arr.splice(arr.length, 0, 6)
// arr.splice(3, 0, 6)
// console.log(arr)

//How to delete each value from array

//ending
// arr.pop()
// console.log(arr)
// //starting
// arr.shift()
// console.log(arr)

//any where

// arr.splice(0, 2)
// arr.splice(arr.length-1, 1)
// arr.splice(2, 1)
// console.log(arr)

//How to delete all values from array

// console.log(arr.length)
// arr.length = 0
// arr = []
// arr.splice(0, arr.length)
// console.log(arr)

//How to find array values

// var arr = [1, 2, 3, 2, 4, 5, 2]
// var arr = [{course: 'html'}, {course: 'react'}]
//primives

// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))

//reference

// var result = arr.find((obj) => {
//   return obj.course === 'react'
// })

// console.log(result)

// var result = arr.findIndex((obj) => {
//   return obj.course === 'css'
// })

// console.log(result)

//How to merge or combine two or more arrays into one array

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = [11,12, 13, 14, 15]

// console.log(arr1)
// console.log(arr2)

//ES-5 (concat)

// var combineArr = arr1.concat(arr2, arr3)
// console.log(combineArr)


//ES-6 (spread operator)

// var combineArr = [...arr1,...arr2, ...arr3]
// console.log(combineArr)

//How to iterate array values
// var arr = [1, 2, 3, 4, 5]

//without using loop

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//for in loop

// for (var index in arr) {
//   console.log(index, arr[index])
// }

//for of loop (ES-6)

// for (var values of arr) {
//   console.log(values)
// }

// forEach

// var result = arr.forEach((value, index) => {
//   // console.log(value, index)
//   return value
// })

// console.log(result)

//How to create copy

//primitives

// var x = 10

// var y = x

// y = 20

// console.log(x)
// console.log(y)

//reference

// var originalArr = ['sachin', {road: 101}, function play(){}]


// var copiedArr = originalArr // normal copy
// var copiedArr =  JSON.parse(JSON.stringify(originalArr)) // deep copy
// var copiedArr =  lodash.cloneDeep(originalArr) // deep copy
// var copiedArr =  originalArr.slice()  //(ES-5) shallow copy
// var copiedArr =  [...originalArr]  //(ES-6) shallow copy


// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201

// console.log(originalArr)
// console.log(copiedArr)


// var arr = [1, 2, 3, 4, 5]

// let res = arr.some((item) => {
//   return item > 5
// })

// let res = arr.every((item) => {
//   return item > 1
// })

// console.log(res)

//filter

// var arr = [1, 2, 3, 4, 5]
// var persons = [{name: 'sachin', age: 40}, {name: 'kohli', age: 30}, {name: 'gill', age: 20}]

// console.log(arr)
// console.log(persons)

// var filterRes = arr.filter((item) => {
//  return item > 2
// })

// var filterRes = persons.filter((person) => {
//  return person.age > 20
// })

// console.log(filterRes)

//map

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)
// var mapRes = arr.map((item) => {
//  return item * 100
// })

// console.log(mapRes)

//reduce

// var arr = [1, 2, 3, 4, 5]

// var reduceRes = arr.reduce((cum, cur) => {
//   console.log(cum, cur)
//  return  cum + cur
// }, 0)

// console.log(reduceRes)


//How to remove duplicate values from array

//Set with spread operator

// var arr = [1, 2, 3, 2, 4, 5, 2]
// console.log(arr)

// var res = [...new Set(arr)]

// var uniqueArr = [         ]

// function removeDuplicates(arr) {
//   for (var value of arr) {
//     console.log(value)
//     if (uniqueArr.indexOf(value) == -1) {
//       uniqueArr.push(value)
//     }
//   }
// }

// removeDuplicates(arr)
// console.log(uniqueArr)


//How to flatten array

var arr = [1, 2, [10, 20, [100, 200]]]

// console.log(arr)

// var flattenRes = arr.flat(Infinity)
// console.log(flattenRes)

// var flattenArr = []

// function flattenFun(arr) {
//   for (var value of arr) {
//     console.log(value)
//     if (Array.isArray(value)) {
//        flattenFun(value)
//     } else {
//       flattenArr.push(value)
//     }
//   }
// }

// flattenFun(arr)

// console.log(flattenArr)


// how to loop array

var arr = [1, 2, 3, 4, 5]

// for in

// for (var key in arr) {
//   console.log(key, arr[key])
// }

// for of (ES-6)

// for (var value of arr) {
//   console.log(value)
// }

// forEach

// var forEachRes = arr.forEach((v, i) => {
//  return v
// })

// console.log(forEachRes)

// map vs forEach

// var mapRes = arr.map((value, i) => {
//   return i
// })
// console.log(mapRes)

// var forEachRes = arr.forEach((value, i) => {
//   return value*100
// })
// console.log(forEachRes)

//Sorting

//Primitives

// var arr = [1, 5, 8, 2, 4]
// var arr = [1, 5, 8, 20, 4]
// var arr = ['sachin', 'dhoni', 'kohli']

// var asOrder = arr.sort()
// var asOrder = arr.sort((a,b) => {
//   if (a > b) {
//       return 1
//   }
//   if (a < b) {
//     return -1
//   }
// })
// var dsOrder = asOrder.reverse()

// console.log(asOrder)
// console.log(dsOrder)

// var asOrder = arr.sort()
// var dsOrder = asOrder.reverse()

// console.log(asOrder)
// console.log(dsOrder)

// var arr = [{ course: 'node js' }, { course: 'css' }, { course: 'react js' }]

// var asOder = arr.sort((a, b) => {
//   if (a.course > b.course) {
//     return -1
//   }
//   if (a.course < b.course) {
//     return 1
//   }
// })

// console.log(asOder)

// for (var i = 0; i < arr.length; i++){
//   for (var j = i + 1; j < arr.length; j++){
//     if (arr[i].course < arr[j].course) {
//       var temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
// }
// console.log(arr)



















