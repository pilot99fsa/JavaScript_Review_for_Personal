// メモ

/**
 * Chat-GPT
JavaScriptにおける「列挙可能性（enumerability）」とは、
オブジェクトのプロパティが for...in ループや Object.keys() などのメソッドによって列挙可能かどうかを示す特性です。
オブジェクトのプロパティは、デフォルトで列挙可能です。
しかし、プロパティを定義する際に明示的に指定することで、列挙可能性を変更することができます。
 */

/**
 * MDNより
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Enumerability_and_ownership_of_properties
 * 
 * 列挙可能プロパティは、内部の列挙可能（enumerable）フラグが true に設定されているプロパティです。
 * これは、単純な代入や初期化で作成されたプロパティのデフォルトです 
 * (Object.defineProperty で追加したプロパティはデフォルトで列挙可能性が false になります）。
 */

// 簡単なオブジェクトを定義しよう
const obj = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
}

// 上の定義れたオブジェクト、'obj'のすべての列挙可能なプロパティをfor...inループで反復処理しよう
for (let key in obj) {
    console.log(key) //各反復ごとに、変数keyにはオブジェクトのプロパティ名が代入される
}
/**
 * 出力結果
 * prop1
 * prop2
 * prop3
 */

// オブジェクトの値も種痘できる
for (let key in obj) {
    console.log(key, obj[key])
}

/**
 * 出力結果
 * prop1 value1
 * prop2 value2
 * prop3 value3
 */

// オブジェクトのprototypeに独自のメソッドを追加した場合
Object.prototype.method = function () {
    // 関数を定義すると、その時点でメソッドも列挙対象となる。コンソールで確認してみよう
}
// 基本的にはオブジェクト自身のプロパティのみ列挙することが多い(メソッドまで列挙する必要はないし、列挙したくない)。
// その場合はenumerableという設定値を変更してやると良い
Object.defineProperty(
    Object.prototype, // methodを列挙したくないので、このmethod自身が格納されているObject.prototypeを第1引数に設定する。
    'method', // 第2引数にmethodの名前を設定する
    { enumerable: false } // 第3引数にenumarableの設定を記述する。今回はmethodを列挙したくないのでfalse、デフォルトではtrueとなっている
) // コンソールで確認してみよう、methodが消えているはずだ


// ディスクリプターを確認するプロパティを呼んでみる
const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method')
console.log(d) // enumarable: falseと表示されている。列挙対象から外れている

// また、22行目のprop1のオブジェクト自身を列挙対象から外す場合は27行目あたりに
Object.defineProperty(obj, 'prop1', { enumerable: false }) // このコードを書いてみよう
// コンソールからprop1が消えるだろう

// Object.prototype.hasOwnPropertyなどのビルトインメソッドが列挙対象にならないのは、そもそもそれ自身のenumarableがfalseだから。

