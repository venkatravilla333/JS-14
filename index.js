

// functions (to do some task)

function getData() {
  //API
  // 10 20 data
}

// variables  (store data)

var x = 10
var y = 20


// operator 

var result 

//control statements

let parent =  document.getElementById('parent')
if (result) {

  //loop
  for (var i = 1; i <= 100; i++){
    let h4 = document.createElement('h4')
    console.log(h4)
    h4.innerText = result
    //dom manipulation
    parent.appendChild(h4)
  }
}else{
  let p = document.createElement('p')
  p.innerText = 'No value in result'
  parent.appendChild(p)
}
