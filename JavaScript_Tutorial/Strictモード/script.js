// Strictモードの有効化
"use strict"
// ファイルの先頭行、もしくは関数内の先頭行に記述

function fn() {
    "use strict"
    a = 0 // この書き方ではグローバルスコープに対して宣言している。constもしくはletを先頭につけよう
    // 予約後の確保について
    // const implements, interface, package
    // 上記の3つのキーワードは特殊なキーワードとされているので、Strictモードでは宣言できない
    // 予約語一覧 https://www.javadrive.jp/javascript/ini/index5.html
}
fn()
console.log(a)

// strictモード下においては上記のコードはエラーとなる。use strictを外すと解消されるが、実務におけるシステムの開発では、この書き方はエラーおよびバグの原因となりうる

function secureFn() {
    'use strict'
    return this
    // strictモードを使わない場合、thisはwindowオブジェクトを指す。
    // だがwindowオブジェクトを返却するということは脆弱性を招きかねないということでもある
    // そのため、不要な脆弱性を露出させないために、undefinedを返すように設計されている
}
console.log(secureFn())

// thisは基本的にオブジェクト型の参照を取るが、strictモードにおいてはプリミティブ型の値として振る舞う

console.log(secureFn.call(2))
// コンソールにはプリミティブ型の2が出力される