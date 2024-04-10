// fetchとは?
// 非同期のネットワーク通信を簡単にわかりやすく記述できるメソッド。クライアント側のJavaScritから、HTTPと通信しデータを取得することができるようになる。
// 参考URL: https://qiita.com/Molly95554907/items/730220dfc1178e78d7ce

window.fetch('users.json')
// windowはグローバルオブジェクトなのでほとんどの場合は省略可能

// どのような返り値が表示されるか確認しよう
console.log(fetch('users.json'))

/** 出力結果
 *  Promise
 */

// Fetch APIの返り値はPromiseオブジェクトである。このPromiseはリクエストの完了を表す。
// Promiseが返ってきているので、thenメソッドが使用可能であることが分かる
fetch('users.json').then(function (response) { // callback関数の引数にresponseを渡してやる
    console.log(response)
    // レスポンスの中身に何が返ってきているのか確認しよう

    /** 出力結果
     *  Response { ... }
     */

    // こちらのResponseのオブジェクトには、サーバーから返却されたデータが格納されている

    // json()`メソッドはHTTPレスポンス内のJSONデータを解釈し、JavaScriptで扱いやすい形式に変換する
    // 参考: https://terakoya.sejuku.net/question/detail/31718
    return response.json()
}).then(function (json) {
    // コンソールでjsonの中身を確認しよう
    console.log(json)

    /** 出力結果
    * 0 : {name: 'Bob', age: 23}
    * 1 : {name: 'Tim', age: 30}
    * 2 : {name: 'Sun', age: 25
    */

    // jsonファイルの形式のデータが、JSの配列とオブジェクトの形式に変換されてjsonという変数に渡される

    // このようなサーバーから取得したデータを自分で加工して使うことができる

    // 例えば上の名前と年齢のデータを、文字列に整形してコンソールに出力したい場合は、for文を使って出力することができる
    for (const user of json) {
        console.log(`I'm ${user.name}, ${user.age} ysers old`)

        /** 出力結果
         * I'm Bob, 23 ysers old
         * I'm Tim, 30 ysers old
         * I'm Sun, 25 ysers old
         */
    }
})

// これら一連のコードをAsync/Awaitを使って書き直してみよう
async function fetchUsers() { // まずasyncをfunctionの前に付け加えた関数を宣言する
    const response = await fetch('users.json')
    const json = await response.json()
    for (const user of json) {
        console.log(`I'm ${user.name}, ${user.age} ysers old`)
    }
}
// response.json()の戻り値は、Promiseであることを忘れないようにしよう
// Fetch APiの利点は、XMLHttpRequestを使うよりはシンプルであり、jQuery.ajaxやaxios.getのようにライブラリに依存しないことである