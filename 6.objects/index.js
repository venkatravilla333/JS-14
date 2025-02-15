

//How to create an object

//object literal way

// var person1 = {
//   name: 'sachin',
//   age: 40,
//   play: () => {
//     console.log('play')
//   }
// }

// console.log(person1)

// var person2 = {
//   name: 'kohli',
//   age: 30,
//   play: () => {
//     console.log('play')
//   }
// }
// console.log(person2)

// var person3 = {
//   name: 'dhoni',
//   age: 35,
//   play: () => {
//     console.log('play')
//   }
// }

// console.log(person3)

// constructor function way (ES-5)

// function test(name, age){
//   this.name = name;
//   this.age = age;
//   this.play = () => {
//     console.log('play')
//   }
// }

// let person1 = new test('sachin', 40)
// let person2 = new test('kohli', 30)
// let person3 = new test('dhoni', 35)
// console.log(person1)
// console.log(person2)
// console.log(person3)

//classical way (ES-6)

// class test{
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.play = () => {
//       console.log('play')
//      }
//    }
// }

// var person1 = new test('sachin', 40)
// var person2 = new test('kohli', 30)
// var person3 = new test('dhoni', 35)
// console.log(person1)
// console.log(person2)
// console.log(person3)

// console.log(typeof test)

//Manipulating object (Objects are dynamic)

// var person = {
//   name: 'sachin',
//   play: () => {
//     console.log('play')
//   }
// }

// console.log(person)

//read object properties

// console.log(person.name)
// person.play()


//how to add new properties to existing object

// person.age = 40
// person.go = () => {
//   console.log('go')
// }

// console.log(person)

//how to update existing properties to object

// person.name = 'kohli'

// console.log(person)

//how to delete object properties

// delete person.age
// delete person.go
// console.log(person)

//How to loop object properties


// var person = {
//   name: 'sachin',
//   age: 40,
//   city: 'mumbai',
//   play: () => {
//     console.log('play')
//   }
// }
// console.log(person)

// without using loop

// console.log(person.name)
// console.log(person.age)
// console.log(person.city)
// person.play()

//with using loops

// for in loop

// for (var key in person) {
//     console.log(key, person[key])
// }

// var result1 = Object.keys(person)
// console.log(result1)
// var result2 = Object.values(person)
// console.log(result2)
// var result3 = Object.entries(person)
// console.log(result3)

//copy or clone

// primitives

// var x = 10

// console.log(x)

// var y = x

// y  = 20
// console.log(y)


//object

// var x = {
//   name: 'sachin',
//   address: { road: 101 },
//   play: () => {
//     console.log('play')
//   }
// }

// let lodash = require('lodash')
// var y = x //normal copy
// var y = Object.assign({}, x) //shallow copy (ES-5)
// var y = {...x} //shallow copy (ES-5)
// var y = JSON.parse(JSON.stringify(x)) //deep copy
// var y = lodash.cloneDeep(x) //deep copy

// import lodash from 'lodash'


// y.name = 'kohli'
// y.address.road = 201

// console.log('x', x)
// console.log('y', y)

//Math

// console.log(Math)
// console.log(Math.min(2, 10, 5))
// console.log(Math.max(2, 10, 5))
// console.log(Math.floor(5.9))
// console.log(Math.ceil(5.1))
// console.log(Math.round(5.5))
// console.log(Math.round(5.6))
// console.log(Math.round(5.4))
// console.log(Math.random()*100)
// console.log(Math.sqrt(25))
// console.log(Math.sqrt(9))

//Date object

// var now = new Date()

//get methods
// console.log(now)
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getMonth())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getFullYear())

//set methods
// console.log(now.setFullYear(2047))
// console.log(now.getFullYear())
// console.log(now.getFullYear())

// var date1 = new Date(2030, 3, 10, 9, 20, 30)
// console.log(date1)
// console.log(date1.getFullYear())
// date1.setFullYear(1999)
// console.log(date1)

// var date1 = new Date('2040 12 10 10:20:40')
// console.log(date1)
// console.log(date1.getFullYear())
// date1.setFullYear(2050)
// console.log(date1)



//ES-5 before template string

var name = 'sachin'
var age = 40

console.log('Hi this is' + ' ' + name + ' ' + 'my age is' + ' ' + age)

//ES-6 after template string
console.log(`Hi this is ${name} my age is ${age}`)