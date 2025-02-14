

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


var person = {
  name: 'sachin',
  age: 40,
  city: 'mumbai',
  play: () => {
    console.log('play')
  }
}
console.log(person)

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

var result1 = Object.keys(person)
console.log(result1)
var result2 = Object.values(person)
console.log(result2)
var result3 = Object.entries(person)
console.log(result3)

