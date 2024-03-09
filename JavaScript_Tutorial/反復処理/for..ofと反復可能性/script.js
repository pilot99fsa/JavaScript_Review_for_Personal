// 簡単な配列を用意する
const array1 = ['a', 'b', 'c']

// これをfor...ofでループするには
for (let v of array1) { // vに渡される値は、変数arrayに格納されている値になる
    console.log(v) // arrayの3つの値が出力される
}

//////////////////////////////////////////////////////////////////////

const array2 = ['a', 'b', 'c']
array2[4] = 'e' // array2の4つ目にeを設定

for (let o of array2) {
    console.log(o)
}

/** 出力結果
 * a
 * b
 * c
 * undefined
 * e
 */

// cとeの間がundefinededになっている...なぜ？
// 思い出そう、配列は1からではなく、0から始まる。よって3を飛ばしてeを4に設定しているので、3はundefinedで出力される(0,1,2に加えて4のみが設定されている)。

// このように、設定されていない値に対しても、配列のイテレーターはundefinedという形で値を返却する。覚えておこう。

/////////////////////////////////////////////////////////////////////

const array3 = ['a', 'b', 'c']
array3[4] = 'e'

Object.prototype.method = function () { } // メソッドを追加してもfor...ofのループには追加されない
Object.defineProperty(array3, 0, { // 配列の0番目、つまりaの列挙可能性をfalseにしてみる
    enumerable: false // イテレーターの場合には、配列のinumerableは参照されないので、配列の0番目は返却される
})
// もう少し詳しくみてみよう
const d = Object.getOwnPropertyDescriptor(array3, 0)
console.log(d) // aのenumarableはしっかりとfalseになっている


for (let p of array3) {
    console.log(p)
}