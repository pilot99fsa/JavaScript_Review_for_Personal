import './moduleA.js'

// モジュールでthisをまず確認しよう
console.log(this) // undefined

function fn() {
    console.log(this) // undefined
}
fn()

// モジュールを使わない場合はwindowオブジェクトが取得できていたが、モジュールになると、undefineとなる

// 一方でオブジェクトの中で定義すると
const obj = {
    fn
}
obj.fn()

/** 出力結果
 *  {fn : ƒ }
 */

//　オブジェクトのメソッドとして認知される

console.log(window) // windowオブジェクトは相変わらず使える

console.log(window.b) // windowは元のファイルでexportを使わなくてもこちらでimportさえ行えば参照できる 

console.log(a)