// まずはオブジェクトを用意しよう

// 簡単なstringif()の使い方

const obj = {
    a: 0,
    b: 1,
    c: 2
}

// これをJSONに変換してみよう

// stringifyメソッドの第1引数にJSONに変換したいオブジェクトを格納するs
const json1 = JSON.stringify(obj)
// JSONにはJSON形式に変換されたobjが格納される、コンソールで確認しよう
console.log(json1)

/** 出力結果
 *  {"a":0,"b":1,"c":2}
 * 
 * 一見オブジェクトのように見えるが、ダブルクオーテーションで囲まれているのでjsonの文字列である
 */

// type of で確認してもstringであることが確認できる
console.log(typeof json1)
// 出力結果 : string

// stringify()は第2引数に関数や配列を格納することができ、特定の条件でJSON形式で出力することも可能である

function replacer(prop, value) {
    if (value < 1) {
        // valueが1より小さい場合は何も返さない
        return
    }
    // それ以外の場合は渡ってきた値を返す
    return value
}
const json2 = JSON.stringify(obj, replacer)
console.log(json2)
/** 出力結果
 *  {"b":1,"c":2}
 * 
 * returnされた文字列は1より小さい値を含まない形で返ってくる
 * このような形で、 適切にリプレイサーを設定することで不必要な情報を排除してJSON形式に変換することができる
 */

// リプレイサーは配列としても使える。配列の中に含めたいプロパティのみ記載してやる
const json3 = JSON.stringify(obj, ["a", "b"])
// 今回はaとbのみ記載したい、上手くいっているか確認しよう
console.log(json3)
/** 出力結果
 *  {"a":0,"b":1}
 */

// JSON.parseについて

// 今度はJSONをオブジェクトに変換しよう
const obj2 = JSON.parse(json1)
console.log(obj2)

/** 出力結果
 *  {a: 0, b: 1, c: 2}
 *   a:0
 *   b:1
 *   c:2
 *    [[prototype]]: Object
 */

// オブジェクトが表示されたことが分かる



// JSON形式のファイルはJavaScriptでサーバーと通信(データのやり取り)する際や、ローカルストレージにデータを保存する際に使用される