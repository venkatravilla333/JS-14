
var person = {
  name: 'sachin',
  age: 40,
  address: {city: 'mumbai', road: 101}
}

//without using destructuing

// console.log(person.name)
// console.log(person.age)
// console.log(person.address.city)
// console.log(person.address.road)

//with using destructuring

// var { name, age, address: { city, road } } = person

// console.log(name)
// console.log(age)
// console.log(city)
// console.log(road)

var arr = [1, 2, 3, 4, 5]

//without using destructuing

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//with using destructuing

// var [a,b,c,d,e] = arr

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)



// var person = {
//   name: 'sachin',
//   age: 40,
//   properties: [{bats: 10, cash: 1000000}, {childs: ['sara', 'arjun']}]
// }

// without using destructuing

// console.log(person.name)
// console.log(person.age)
// console.log(person.properties[0].bats)
// console.log(person.properties[0].cash)
// console.log(person.properties[1].childs[0])
// console.log(person.properties[1].childs[1])

// without using destructuing

// var {name, age, properties:[{bats, cash}, {childs: [c1, c2]}]} = person

// console.log(name)
// console.log(age)
// console.log(bats)
// console.log(cash)
// console.log(c1)
// console.log(c2)



