

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





