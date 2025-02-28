

// console.log('Hi')

// setTimeout(() => {
//   console.log('Timer-1')
// }, 4000)

// console.log('sachin')

// Promise.resolve().then(()=>{console.log('PR-1')}).then(()=>{console.log('PR-2')})

// setTimeout(() => {
//   console.log('Timer-2')
// }, 0)

// console.log('Dhoni')

// setTimeout(() => {
//   console.log('Timer-3')
// }, 2000)

// console.log('Bye')


// function getData(num, cb) {
//   setTimeout(() => {
//     // var data = 'sachin'
//     var data = num*num
//     cb(data)
//   }, 4000)
// }
// getData(2, (data1)=> {
//   console.log(data1)
//   getData(data1, (data2) => {
//       console.log(data2)
//     getData(data2, (data3) => {
//         console.log(data3)
//       getData(data3, (data4) => {
//         console.log(data4)
//           getData(data3, (data4) => {
//            console.log(data4)
//           })
//         })
//      })
//   })
//  }
// )



//Promises (ES-6)

// function getData(num) {
//   var prRes = new Promise((res, rej) => {
//     setTimeout(() => {
//       // var data = 'sachin'
//       var data = num*num
//       res(data)
//      }, 4000)
//   })
//   return prRes
// }


// getData(2).then((data1) => {
//   console.log(data1)
//   return getData(data1)
// }).then((data2) => {
//   console.log(data2)
//   return getData(data2)
// }).then((data3) => {
//   console.log(data3)
//  return getData(data3)
// }).then((data4) => {
//   console.log(data4)
// })

//Async await (ES-6)

// function getData(num) {
//   var prRes = new Promise((res, rej) => {
//     setTimeout(() => {
//       // var data = 'sachin'
//       var data = num*num
//       res(data)
//     }, 4000)
//   })
//   return prRes
// }

// getData()

// async function displayData() {
//   var data1 = await getData(2)
//   console.log(data1)
//   var data2 = await getData(data1)
//   console.log(data2)
//   var data3 = await getData(data2)
//   console.log(data3)
//   var data4 = await getData(data3)
//   console.log(data4)
// }
// displayData()


// var pr1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('PR1')
//   }, 4000)
// })
// var pr2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('PR2')
//   }, 1000)
// })
// var pr3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('PR3')
//   }, 2000)
// })

// Promise.race([pr1, pr2, pr3]).then((res) => console.log(res))

// Promise.all([pr1, pr2, pr3]).then((res)=> console.log(res))

// Promise.allSettled([pr1, pr2, pr3]).then((res)=> console.log(res))

//API CALLS

// get all posts 

var getBtn = document.getElementById('getdata')

function getData() {
  //  console.log(window)
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      var data = res.json()
      return data
    }).then((data) => {
       console.log(data)
    }).catch((err) => {
       console.log(err)
  })
}

getBtn.addEventListener('click', getData)

//Get single post

var getSingleBtn = document.getElementById('getsingledata')

function getSingleData() {
  //  console.log(window)
  fetch('https://jsonplaceholder.typicode.com/posts/50')
    .then((res) => {
      var data = res.json()
      return data
    }).then((data) => {
       console.log(data)
    }).catch((err) => {
       console.log(err)
  })
}

getSingleBtn.addEventListener('click', getSingleData)

//send data

var sendBtn = document.getElementById('senddata')



function sendData() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  }).then((res) => {
    console.log(res)
    var post = res.json() 
    return post
  }).then((post) => {
    console.log(post)
  }).catch((err) => {
    console.log(err)
  })
    
}

sendBtn.addEventListener('click', sendData)

//Updata data

var updateBtn = document.getElementById('updatedata')

var newPost = {
  userId: '200',
  title: 'hello ap',
  body: 'my body'
}

function updateData() {
  fetch('https://jsonplaceholder.typicode.com/posts/50', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  }).then((res) => {
    console.log(res)
    var post = res.json() 
    return post
  }).then((post) => {
    console.log(post)
  }).catch((err) => {
    console.log(err)
  })
    
}

updateBtn.addEventListener('click', updateData)

//Delete 

var deleteBtn = document.getElementById('deletedata')


function deleteData() {
  fetch('https://jsonplaceholder.typicode.com/posts/50', {
    method: 'DELETE',
   
  }).then((res) => {
    console.log(res)
    var post = res.json() 
    return post
  }).then((post) => {
    console.log(post)
  }).catch((err) => {
    console.log(err)
  })
    
}

deleteBtn.addEventListener('click', deleteData)




