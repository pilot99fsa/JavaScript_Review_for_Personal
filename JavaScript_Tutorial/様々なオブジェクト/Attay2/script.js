// まずは配列を用意する
const arry = [1, 2, 3, 4, 5]

// この配列の、一つずつの要素に何らかの操作を行いたい場合にはforEach()を使う

/** 引数にコールバック関数を渡す
  * コールバック関数の第1引数には要素が一つずつ渡ってくる。第2引数には配列のインデックスが渡ってくる
  * 第3引数には、配列そのものが格納される
  */
arry.forEach(function (v, i, array) {
    console.log(v)
})

// 配列の要素を元にして、新しい配列を作成したい場合は、map()を使用する

// map()を使うと新しい配列ができるので、任意の名前の新しい配列を宣言する
const newArry = arry.map(function (v, i, array) { // forEachで使ったものをそのままコピペしている。今回は第2引数以下は削除しても良い
    console.log(v)
    // 新しい配列に対して値を格納したい場合は、returnを使う
    return v * 2
    // returnに続く値が、新しい配列に登録される
})
console.log(newArry)

// filterを使った例
const filteredArry = arry.filter(function (v, i, array) {
    // returnに続く値がtrueであれば、配列に格納される。falseであれば格納されない
    return i >= 1
    // 2以上の値が配列に格納されている
})
console.log(filteredArry)