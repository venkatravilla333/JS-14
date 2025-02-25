

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


function getData(cb) {
  setTimeout(() => {
    var data = 'sachin'
    cb(data)
  }, 4000)
}
getData(function displayData(data) {
  console.log(data)
}
)


// displayData()