function fn(a, b) {
    console.log(a, b)
}
fn(0, 1)//コンソールには0 1と表示される
fn(1) //コンソールには1 undefinrdと表示される
// JavaScriptでは引数の順番が重要になってくる。この場合、まずaに引数が渡される
fn(null, 1) //bにのみ渡したい場合、このようにaにダミーを渡すとbに1を渡せる

// JavaScriptの場合は引数の順番によって渡ってくる引数が決定される

function fn(a, b) {
    console.log(2) //ここが優先されてコンソールには2が表示される
}
fn(1) //同じ関数名が重複していた場合、後から宣言された方が実行される。この場合、エラーは起こらない
// もし重複を避けたい場合は、constを使った関数式を使うと、同じ関数名が宣言されるとエラーが起こるようになる

function fn(a, b = 1) { //引数が渡って来なかった時のために引数にデフォルト値を設定できる
    console.log(a, b); //コンソールには1 1と表示される
}
fn(1) // この引数はaにのみ渡される
fn(1, null) //この場合はbにnullが渡される
fn(1, undefined) //この場合はbのデフォルト値の1が表示される

///初期化の際に意図的にundefineを使うことはない。
// 意図してからであることを明示したい場合はnullを使う
// let c = undefined これはだめ
let c = null;
let d;
fn(1, undefined)

///////////////////////////////
//arguments

function fn() {
    const a = arguments[0]
    const b = arguments[1]
    console.log(arguments)
    console.log(a, b)
}
fn(1, undefined)
// argumentsには関数実行時の実引数が渡ってくる
// アロー関数内はargumentsが生成されない

function fn(...args) { //このよう3点リーダーで書くと、実引数がいくつあるかわからない場合でも、配列に全て格納することができる
    const a = arguments[0]
    const b = arguments[1]
    const c = arguments[2]
    console.log(args)
    console.log(a, b, c) //コンソールで描くと実引数が全て渡っている
    return a // aを実行元に返す(55行目に表示される)
}
fn(1, undefined, 0)

let f = fn(1, undefined)
console.log(f) //このfにはaの値、1が入っている。この1が45行目のaから来ている。さらにそのaは54行目の実引数の1から来ている
