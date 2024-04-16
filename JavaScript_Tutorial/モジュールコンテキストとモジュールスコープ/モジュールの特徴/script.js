// typeにmodulを付与したファイルは非同期で読み込まれる。html上のh1タグを取得して確認してみよう

const h1 = document.querySelector('h1') // h1要素のみを取得する
const text = h1.textContent // HTMLを解釈せずにそのまま文字として出力する
// innerTextとtextContentの違いについて https://qiita.com/tomokichi_ruby/items/3640f0bc64ad6c676206

console.log(text)

/** 出力結果
 *  モジュールレクチャー
 */

// HTML上でscript.jsを含むscriptタグをbodyタグ内において、h1より下に記述しているが、これをh1より上に記述するとエラーとなる
// タグにdeferと書いてやるとエラーが解消される。deferとかくと、htmlの構文解析が終わったタイミングでJSが実行される
// typeにmoduleと付与すると、同じようにbodyタグ内において、取得および参照したい要素よりも上に書いても同じようにエラーが発生しない

