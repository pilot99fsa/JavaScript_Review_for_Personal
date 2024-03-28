// new Promise(function (resolve, reject) {
//     console.log('promise')
//     resolve()
// }).then(function () {
//     console.log('then')
// }).then(function () {
//     console.log('then')
// })

// console.log('global end')

new Promise(function (resolve, reject) {
    console.log('promise')
    // resolve()
    // reject()
    resolve("hello")
}).then(function (data) {
    console.log('then:' + data)
    // throw new Error()
    return data
}).then(function (data) {
    console.log('then:' + data)
}).catch(function (data) {
    console.log('catch')
}).finally(function () { // finallyに引数は渡せない
    console.log('finally')
})

console.log('global end')

