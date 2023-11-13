const a = {
    prop: 0
}
const b = {
    prop: 0
}

console.log(a === b)
// Chromeのコンソールで確認するとfalseとなる
// オブジェクトを比較する場合、変数に入っているのはあくまでオブジェクトへの参照である
// 上記のコードでは、参照同士を比較して、参照先のオブジェクトが変わってくるため、falseとなる
console.log(a == b) // これもまた同じくfalseである 

// オブジェクトを比較する場合、オブジェクトの中にあるプロパティを比較する必要がある
console.log(a.prop === b.prop) // コンソールにはtrueと表示される

const c = a
console.log(a === c) // コンソールにはtrueと表示される

// プリミティブ型では値の比較
// オブジェクト型では参照の比較