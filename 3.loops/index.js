

//conditional loops
// var a = 100
// var name1 = 'sachin'

// for loop

// for (var i = 1; i <= 10; i++){
//   if(i===5) continue
//   console.log(i, name1)
// }

//while loop

// var i = 1

// while (i<=10) {
//   console.log(i, name1)
//   i++
// }

//do while loop

// var i = 11

// do {
//   console.log(i, name1)
//   i++
// }while(i<=10)


// for in loop

// var obj = {}
// console.log(obj)
// var arr = []
// console.log(arr)

var obj = {
  name: 'sachin',
  age: 40,
  city: 'mumbai',
  play() {
    console.log('play')
  },
  
}
//without using loop

// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.city)
// obj.play()

//with using loop

// for (var keys in obj) {
//   console.log(keys, obj[keys])
// }
// for (var keys of obj) {
//   console.log(keys, obj[keys])
// }


var arr = [1, 2, 3, 4, 5]
console.log(arr)

// without using loop

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])


// for (var value of arr) {
//   console.log(value)
// }
// for (var index in arr) {
//   console.log(index, arr[index])
// }


