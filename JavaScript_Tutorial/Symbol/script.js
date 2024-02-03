// プロパティの重複を避けるため、必ず一意の値を返す関数

// まずはシンボルを定義する
const s = Symbol("Hello") // 名前を格納することができる
console.log(s)
// この状態でコンソールを確認すると、Symbool(Hello)と表示される

// このようにシンボルに名前をつけることができるが、これを2回宣言すると、異なる値が返ってくる
const s2 = Symbol("Hello")
console.log(s === s2)
// コンソールで確認してみよう、falseと表示される、つまり異なる値であることがわかる

// シンボルに同じ名前を格納したとしても、呼び出しごとにシンボルの値は変わる

console.log(typeof s) // また、シンボルはプリミティブ型なのでtypeofで確認するとシンボルというデータ型と判定される

// ではこのシンボルはどのように使われるのか？

const str = new String('Tom');
console.log(str)
// コンソールを確認すると、prototypeの中にSymbol.iteratorというものが確認できる。これはオブジェクトの反復に用いられるプロパティである
// 補足:ESのバージョンがアップデートされる際に既存のコードの動作を保証するためにSymbolは導入された

String.prototype[s] = function () {
    // ビルトインオブジェクトのprototypeを拡張するのはprototype汚染と呼ばれており、一般的には推奨されない
}