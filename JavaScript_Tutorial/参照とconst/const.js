// const a = "Hello"
// a = "bye"
// 当然だがconstは再宣言も再代入も不可能である
//

//
// const a = {
//     prop: "Hello"
// }
// a = {}
// これも同じく不可能である
//

//
const a = {
    prop: "Hello"
}
a.prop = "bye"
console.log(a)
// オブジェクトの再代入は不可能だが、オブジェクト内のプロパティは変更できる
