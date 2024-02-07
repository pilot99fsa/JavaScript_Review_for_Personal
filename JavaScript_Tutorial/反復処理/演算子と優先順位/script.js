// 演算子・・・値(オペランド)を元に処理を行い、結果を返す記号
// A(オペランド) ? B(オペランド)

a = 1 + 3;
// これは右辺の1+2が処理されて
a = 3;
// 左辺に対して右辺を代入する。変数aに対して3が格納される

// この代入演算子自体も値を返す

// 演算子の優先順位は1~19ある(MDNのサイトに記載されている)。優先順位が高いほど先に処理される

//////////////////////////////////////////

let b = 1 + 2 * 3;
console.log(b) // 7が出力される。算数で習ったのと同じである

// グループ化
let c = (1 + 2) * 3;
console.log(c) // 9が出力される。これも算数で習った通りである

// インクリメント演算子
let d = 0;
console.log(d) // 0が出力される、そのままの意味である
let e = d++ // インクリメント演算子を前後のどちらかにつけるかで動きが変わってくる
console.log(e) // インクリメント前のdの値がeに代入されたので、eは0
console.log(d, e) //  dは1にインクリメントされたので1が、eは0なので0が出力される、

// ではインクリメント演算子を前につけると？

let g = 0
console.log(g) // この時点ではgはまだ0である
let h = ++g; // gの値が増加して1となり、その1となったgが、hに代入されるのである
console.log(g, h) // 1 1とが出力される

////////////////////////

// ++dの書き換え
let j;
d = j = 1 // 代入演算子は、結合性は右から左となる。1がbに格納され、bがaに格納される
console.log(d, j)

// d++の書き換え
let k = 0;
console.log(k) // 0が出力
let l; // lは値を持っていない(undefined)
k = (l = k) + 1 // 中央の(l = k)の評価が先に行われ、lにkが格納される。つまりlは0
// 次にlに1が足されて、その結果がkに格納される、つまりk = 0 + 1、よってkは1
console.log(k, l) // 1 0 が出力される

function fn() {
    let n = 0
    return n++
}
console.log(fn()) // 0が出力される。最初にnが返却されるためである
console.log(fn() * 5) // 0 * 5であるため、当然0である
console.log(!fn() * 5) // 返却された値がfalseの時にtrueに変更する。今回は0が返却されているが、0はfalseかtrue、どちらだろう
// オペランドの型が違う場合は、暗黙の型変換が行われる。数値に変更されて、１になる。よって1 * 5 = 5
console.log(!(fn() * 5)) // グループ化で先に返却された値、0と５の掛け算が行われる。しかし結果はtrueである。