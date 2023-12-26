// 関数は実行可能なオブジェクトである。それを証明してみよう

// new Function('a', 'b', 'retunr a + b')
// //これを関数宣言で表すと以下の通りになる
// function fn(a, b) {
//     return a + b
// }

////////////////////////
// 上の二つの関数をそれぞれfn1、fn2とする

const fn1 = new Function('a', 'b', 'return a + b')

const result = fn1(1, 2)
console.log(result)
// コンソールには3が表示される
// 関数コンストラクターからも、関数を生成できることが分かる

// 関数宣言でも、返ってくるのは、関数コンストラクターから生成されたinstanceである
function fn2(a, b) {
    return a + b
}

console.log(fn2 instanceof Function) // どのコンストラクターから生成されたのかを確認している
// コンソールにはtrueと表示される。fn2も関数コンストラクターから生成されたインスタンスであることがわかる。fn2はオブジェクトである