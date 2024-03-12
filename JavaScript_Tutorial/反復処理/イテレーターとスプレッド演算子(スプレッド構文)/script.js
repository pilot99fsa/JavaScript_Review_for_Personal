// スプレッド演算子の使い方
const array1 = [1, 2, 3, 4, 5] //まず配列を用意する
// このarray1をスプレッド演算子を使って、今から作る配列、array2に代入する
const array2 = [...array1]
// このように3点ドットと配列名を記述することで、スプレッド演算子で展開されて新しい配列に格納することができる

console.log(array2) // コンソールで確認すると
/**
 * 出力結果
(5) [1, 2, 3, 4, 5]
0: 1
1: 2
2: 3
3: 4
4: 5
 */

// しっかりとarray2にarray1が格納されていることが分かる
// ただし。これはあくまで新しく生成した配列である点に留意したい
console.log(array1 === array2) //  厳密等価演算子で確認してみよう
// falseが返ってきた。別の配列ということが分かる

// つまりarray2に何かしらの操作を加えても、array1には何ら影響がないということでもある
array2.push(6)
console.log(array2)
console.log(array1)
// コンソールで確認してみたらarray1は変わっていないことが分かる

// 前後に値を追加することも可能である
const array3 = [0, ...array1, 6]
const array4 = [1, ...array3, 10]
console.log(array3)
console.log(array4)
// こういった形で配列を操作することが可能である

// レストパラメーターについて

// 引数で渡された値を全て足し算で合わせる関数を用意してみよう
function sumFunc(...args) { // 1. 引数にはレストパラメーターを設定する
    // 3. 戻り値を定義する。初期化するために0とする
    let ret = 0
    for (let v of args) {
        console.log(v) // 4. vに1~4が一つずつvに格納されていることが確認できる
        // 5. これをretに足し合わせる
        ret = ret + v // 6. 0 + v
        // 6. つまりretに対して、vに格納された値が全て足し合わされるまでループが行われる

        // 余談ではあるが45行目は 
        // ret += v; 
        // このように記述することも可能である

    }
    return ret // 7. その結果がリターンで呼び出し元、つまりresultに返却される

}
// 2. 呼び出し元を定義する
const result = sumFunc(1, 2, 3, 4)
console.log(result) // 8. コンソールで返却された値を確認してみよう、出力される数字を検算してみるといいだろう

// このように可変長の引数を受け取る場合にはレストパラメーターで配列に直すことが可能である

// イテレーターとの関係性について

// まずオブジェクトを用意する
const object1 = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
}
// このオブジェクトをスプレッド演算子で配列に直そうとすると?

// const array5 = [...object1]
// console.log(array5)

// エラーが吐かれる。エラー文には以下の文言が表示される(コメントアウトを外してみよう)

/**
 * script.js:72 Uncaught TypeError: object1 is not iterable
    at script.js:72:20
 */

// つまり反復可能なオブジェクトではないということである

Object.prototype[Symbol.iterator] = function* () {
    for (let key in this) {
        yield [key, this[key]]
    }
} // オブジェクトに対してイテレーターを追加してみると？

const array6 = [...object1]
console.log(array6) // 配列が生成されていることが分かる

// スプレッド演算子はイテレーターの挙動に準拠していることが分かる

// これまではスプレッド演算子を角括弧で囲んでいたが、これをオブジェクトリテラルで囲んで見ると？
const array7 = { ...object1 }
console.log(array7)
// Symbolのイテレーターの挙動には従わず、ただ単にオブジェクトのプロパティとその値を格納しただけになる

// 追記: プロトタイプ汚染についておさらい

/**
  Object.prototype[Symbol.iterator] = function* () {
    for (let key in this) {
        yield [key, this[key]]
    }
}
 */

//　この記述方法はプロトタイプ汚染につながるので非推奨である。あくまで確認用途として記述しただけである
// ただし、プロトタイプ汚染は、ビルトインオブジェクトのプロトタイプに直接変更を加えることで発生するのでジェネレータ関数とは直接の関係はない 