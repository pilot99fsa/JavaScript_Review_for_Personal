// ラッパーオブジェクトとは、プリミティブ値を内包するオブジェクトのこと
// プリミティブとはオブジェクトではなく、メソッドを持たないデータのこと

const a = new String('hello'); // aは文字列で定義されたラッパーオブジェクトとなる 
// const a = 'hello'
console.log(a) // コンソールには1文字ずつ格納され、プロトタイプチェーンに使えるメソッドが並んでいることがわかる
console.log(a.toUpperCase()); // toUpperCaseは、文字列を大文字にするときに使う。

const b = new Number(100)
console.log(b) // コンソールには100という値が格納されたオブジェクトが生成される
console.log(b.toExponential()) // 10の2乗(2e+2)と表示さえれる

// ラッパーオブジェクトを用いることで文字列や数値を操作できる
// だが、わざわざラッパーオブジェクトのインスタンス化はせずとも、普通に const a = 'hello'と変数を宣言しても問題ない
// 試しに4行目をコメントアウトして、5行目のコメントアウトを外してみよう。問題ないことがない分かる