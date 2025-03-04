

var jsObj = {
  name: 'sachin',
  age: 40,
}
console.log(jsObj)

var jsonObj = JSON.stringify(jsObj)
console.log(jsonObj)

var myjsObj = JSON.parse(jsonObj)
console.log(myjsObj)