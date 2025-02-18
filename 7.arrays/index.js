

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

var originalArr = ['sachin', {road: 101}, function play(){}]


// var copiedArr = originalArr // normal copy
// var copiedArr =  JSON.parse(JSON.stringify(originalArr)) // deep copy
// var copiedArr =  lodash.cloneDeep(originalArr) // deep copy
// var copiedArr =  originalArr.slice()  //(ES-5) shallow copy
// var copiedArr =  [...originalArr]  //(ES-6) shallow copy


// copiedArr[0] = 'kohli'
// copiedArr[1].road = 201

// console.log(originalArr)
// console.log(copiedArr)






