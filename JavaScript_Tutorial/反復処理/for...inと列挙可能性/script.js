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

//
// 
// 61行目 ~ 65行目は83行目のコードを正常に動かすためにコメントアウトを設定した。

// Object.defineProperty(
//     Object.prototype, // methodを列挙したくないので、このmethod自身が格納されているObject.prototypeを第1引数に設定する。
//     'method', // 第2引数にmethodの名前を設定する
//     { enumerable: false } // 第3引数にenumarableの設定を記述する。今回はmethodを列挙したくないのでfalse、デフォルトではtrueとなっている
// ) // コンソールで確認してみよう、methodが消えているはずだ

// 61行目 ~ 65行目は83行目のコードを正常に動かすためにコメントアウトを設定した。
//
//

// ディスクリプターを確認するプロパティを呼んでみる(上のコードのコメントアウトを外して83行目 ~ 90行目をコメントアウトしてね)
const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method')
console.log(d) // enumarable: falseと表示されている。列挙対象から外れている



// また、22行目のprop1のオブジェクト自身を列挙対象から外す場合は27行目あたりに下のコードを書いてみよう
// Object.defineProperty(obj, 'prop1', { enumerable: false }) // コンソールからprop1が消えるだろう
// このようにdefinePropertyを用いるのも手ではある

// 基本的にprototypeを列挙対象から外したい場合はfor...inループの中でhasOwnPropertyを使うと良い

//
//
// 87行目 ~ 94行目はsymbolを記述するために一旦コメントアウト

for (let key in obj) {
    // obj.hasOwnProperty(key) このように書くことで、第1引数に入れられているkey自身が、自分自身のオブジェクトのプロパティ化を確認し、そうであればtrue,違ったらfalseを返す
    // これをif文で囲み、以下のように記述する
    if (obj.hasOwnProperty(key)) {
        //処理したい内容を記述する
        console.log(key, obj[key])
    }
}

//
//
//

/**
 * Q:そもそもなんでfor文の中でhasOwnPropertyとか使うん？
 * A:継承元のプロパティかどうかを条件分岐することで必要なプロパティだけを抽出する、便利の方法やから。
 */

/**
 * MDNより ( https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty )
 * hasOwnProperty() メソッドは、オブジェクト自身が（継承されていない）指定されたプロパティを持っているかどうかを示す真偽値を返します。
 */

// Object.prototype.hasOwnPropertyなどのビルトインメソッドが列挙対象にならないのは、そもそもそれ自身のenumarableがfalseだから。
