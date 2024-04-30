// 配列を用意する
const array = [1, 2, 3, 4, 5]

// .push()を使って値を代入する
array.push(6)
console.log(array)
// 出力結果 [1, 2, 3, 4, 5, 6]

// 配列の最も後ろ(最後)の値を削除する
// array.pop()
console.log(array)
// 出力結果 [1, 2, 3, 4, 5]

// 削除されたものは戻り値となって返ってくる
// const result = array.pop()
// console.log()の第２引数にresultを格納して確認してみよう
// console.log(array, result)
// 出力結果 [1, 2, 3, 4, 5] 6

// 先頭の値を削除する場合はshift()を使う
// const shift = array.shift()
// 先頭に値を追加する
// const unshift = array.unshift(0)
// console.log(array)
// 出力結果 [0,  1, 2, 3, 4, 5]


// splice() 配列から、指定したインデックス(第1引数に格納)から、指定した長さだけ切り取る(第2引数)
const splice = array.splice(0, 1) // この場合だと、配列の中身は[1, 2, 3, 4, 5]なので、0番目から、1個分の長さだけ値を切り取る
console.log(array, splice) // 第1引数で配列の中身を確認し、第2引数にて切り取った中身を確認する、これは戻り値である
// 出力結果 [2, 3, 4, 5, 6] → [1]

// splice()では、第3引数以下に設定された値は、切り取った場所に代入する値を格納できる
const splice2 = array.splice(0, 1, 2, 3) // この場合だと、0番目から2と3が元の配列に代入される

// 配列を結合するには、concat()を使用する
const array2 = [1, 2, 3]
const array3 = array2.concat([4, 5])
console.log(array3)
// 出力結果 [1,2,3,4,5]

// spread演算子を用いた結合方法(ES6に追加された機能)
const spread = [...array3, 6, 7]
console.log(spread)
// 出力結果 [1,2,3,4,5,6,7]