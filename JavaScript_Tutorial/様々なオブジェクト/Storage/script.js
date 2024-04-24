// 実際にlocalStrageを用いて何らかの値を保存してみよう
localStorage.setItem('key', 'value')
// setItem()を用いて、第1引数にキー情報、第2引数に値を格納する
// これで保存されているので呼び出すことが可能である

// ここでChromeの開発者ツールを開き、「アプリケーション」の項目を見てみよう、keyとvalueが確認できる

// 上書きも可能である
localStorage.setItem('key', '1')
localStorage.setItem('key2', '1')

// これらの値を呼び出すには
const result = localStorage.getItem('key')
console.log(result)
// このlocalStorageのメソッドは同期的に行われる
console.log('end')
// グローバルコンテキストが終了したというendが表示される。非同期ならendが先に表示される

// JSON.parseとJSON.stringifyを用いてオブジェクトの登録と取得をローカルストレージ経由で行ってみよう

// オブジェクトを用意する
const obj = { a: 0 }
// オブジェクトをJSON形式に変更して変数に格納する
const json = JSON.stringify(obj)
// ブラウザのローカルストレージに保存する
localStorage.setItem('key', json)

const result2 = localStorage.getItem('key')
const obj2 = JSON.parse(result2)
console.log(obj2)
