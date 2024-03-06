// Symbol()について
// 参考になった記事 : https://qiita.com/lemon2003/items/55c947f29b44f79dc859

const s = Symbol() // 変数sにSymbol()を格納してやる
const obj = { // オブジェクトを定義する
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    // オブジェクトリテラルの中に変数sを追加する
    [s]: 'value4' // 思い出そう、変数をオブジェクトとして追加するときは、変数名を角括弧で囲む必要がある
}

Object.prototype.method = function () { }

// const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method')
const d = Object.getOwnPropertyDescriptor(Object.prototype, 'hasOwnProperty')
const e = Object.getOwnPropertyDescriptor(obj, s)
console.log(e) // enumarable: trueとなっているのがわかる

for (let key in obj) {
    console.log(key, obj[key])
}

//コンソールを確認すると、symbolの値が出力されていないことが分かる
// Symbolの値はenumarbleの値がfalseでなくともfalseでなくとも表示されない。17行目の所で確認のコードを書いていく

// Symbol()の用途とはES5で書かれていたコードを問題なく動作させるのが目的

// 実際に色々書いて確かめてみる
const sym1 = Symbol();

const sym2 = Symbol("デバッグ用の説明。これは、Symbol自体には関係がない。");

// 演算子を使った構文では使えない。エラーを吐く
new Symbol(); // TypeError 
new Symbol("うんこ"); // TypeError
