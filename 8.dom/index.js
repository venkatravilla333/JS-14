//how to examine dom

// console.log(document)
// console.dir(document)

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



//DOM MANIPULATION

//add

// var para = document.createElement('p')
// para.id = 'mypara'
// para.className = 'myclass'

// var data ='This is para'

// para.innerText = data

// var text = document.createTextNode('This is para')
// para.appendChild(text)

// console.log(para)

// var parent = document.getElementById('parent')
// console.log(parent)

// parent.appendChild(para)

// var h3 = document.createElement('h3')
// h3.className = 'h3class'
// h3.textContent = 'This is heading 3'
// console.log(h3)


// parent.appendChild(h3)
// parent.insertBefore(h3, para)

//update or replace

// var h1 = document.createElement('h1')
// h1.className = 'h1class'

// h1.innerText = 'This is heading 1'

// console.log(h1)

// parent.replaceChild(h1, h3)


//delete

// parent.removeChild(h1)

//How to add events to DOM elements

// var addButton = document.createElement('button')
// addButton.className = 'btnclass'

// addButton.innerText = 'Click to Add'

// parent.appendChild(addButton)

// var AddbtnFun = ()=>{
//    parent.appendChild(para)
// }

// addButton.addEventListener('click', AddbtnFun)

//replace

// var replaceButton = document.createElement('button')
// replaceButton.className = 'btnclass'

// replaceButton.innerText = 'Click to Replace'

// parent.appendChild(replaceButton)

// var ReplacebtnFun = ()=>{
//    parent.replaceChild(h1, para)
// }

// replaceButton.addEventListener('click', ReplacebtnFun)


// //delete
// var deleteButton = document.createElement('button')
// deleteButton.className = 'btnclass'

// deleteButton.innerText = 'Click to Delete'

// parent.appendChild(deleteButton)

// var DeletebtnFun = ()=>{
//    parent.removeChild(h1)
// }

// deleteButton.addEventListener('click',  DeletebtnFun)

//How to handle events in js
