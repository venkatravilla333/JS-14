//how to examine dom

// console.log(document)
console.dir(document)

//How to read dom properties

// console.log(document.title)
// console.log(document.doctype)
// console.log(document.all)
// console.log(document.links)
// console.log(document.forms)
// console.log(document.URL)

//How to access dom elements /noodes into js file

//ID

// var paraOne = document.getElementById('one')

// console.log(paraOne)
// paraOne.innerText = 'Sachin'
// paraOne.style.background = 'yellow'

//CLASS

// var elements = document.getElementsByClassName('myclass')
 
// console.log(elements)

//TAG
// var paras = document.getElementsByTagName('p')
//  console.log(paras)

//QUERY SELECTOR

// var element = document.querySelector('#one')
// var element = document.querySelector('.myclass')
// var element = document.querySelector('p')
// console.log(element)

//QUERY SELECTOR ALL

// var element = document.querySelectorAll('#one')
// var element = document.querySelectorAll('.myclass')
// var element = document.querySelectorAll('p')
// console.log(element)

//Traversing of DOM

// var element = document.getElementById('myelement')
// console.log(element)


// //parent

// var parent = element.parentElement

// parent.style.background = "blue"

// console.log(parent)

// //siblings

// var preSibling = element.previousElementSibling
// console.log(preSibling)

// preSibling.style.background = "red"

// var nextSibling = element.nextElementSibling
// console.log(nextSibling)

// nextSibling.style.background = "yellow"

// //childs
// var firstChild = element.firstElementChild
// console.log(firstChild)
// firstChild.style.background = "white"

// var lastChild = element.lastElementChild
// console.log(lastChild)
// lastChild.style.background = "green"
// lastChild.style.color = "white"

// var allChild = element.children

// console.log(allChild)

// allChild[0].style.fontSize = "25px"
// allChild[1].style.fontSize = "25px"
// allChild[2].style.fontSize = "25px"


