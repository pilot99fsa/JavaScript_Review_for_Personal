// 基本的な使い方
try {
    // この辺に実装したい機能について記述する
    console.log('start')
    throw new Error("ここにエラーメッセージ") // 
    // 余談ではあるが、new Errorはエラーオブジェクトのインスタンスである

    // throwが発動すると、このconsole.log()は出力されない(発火しない)。無視されてcatchのブロックに進む
    console.log('end')
    // 5行目のthrowがなければ、逆にcatchのブロックが無視される

    /* throw文は、エラーが起こった際に、自ら定義したオブジェクトを例外として投げるための構文です。
     * エラーだと認識されたオブジェクトを、エラー処理専門の場所へ届けるイメージです。
     * 投げられるオブジェクトには、文字列、数値、ファンクションなど、プリミティブ型やオブジェクト型が該当します。
     * 参考URl : https://tcd-theme.com/2021/09/javascript-errorhandling.html
     **/

} catch (e) {
    // catchのブロックの中で、エラーが発生した際の処理を記述する
    console.error(e)
} finally {
    // catchのブロックに移っても移らなくても、最終的にはfinallyのブロックの処理に移行する、
    console.log('bye')
}

// 実践的な使い方、よくあるユーザー情報をFetch APIで取得する関数の中で実装してみよう

async function fetchUsers() { // まずasyncをfunctionの前に付け加えた関数を宣言する
    const response = await fetch('users.json')

    // ここでresponseの中身を確認する
    console.log(response)
    // okの項目がtrueになっている情報のみ、returnでjsonで返却するように分岐条件を記述していく(捕捉: そもそもokがfalseでなければユーザー情報は取得できてはいない)

    if (response.ok) { // responseのokが存在すれば(response.okがtrueであれば)
        // 以下の処理が実行される
        const json = await response.json()

        // jsonのlengthプロパティを元に判定する。文字が存在すればtrue、なければfalse(JavaScriptでは1はtrue、0はfalseである事を思い出そう)
        if (!json.length) { // not演算子で、falseであった場合にエラー処理が発動するように記述する。試しにjsonファイルの[ ... ]の中身を削除してみよう
            throw new Error('no data found')
        }

        return json
        // json情報が正確に記述されて正常に取得できたら、関数の実行元にjson情報をreturnできる
    }
}

async function init() {
    try {
        const users = fetchUsers()
        // returnされたjsonの情報をfor文を用いてループ処理で出力していく
        for (const user of users) {
            console.log(`I'm ${user.name}, ${user.age} ysers old`)
        }
    } catch (e) {
        console.error(e)
    } finally {
        console.log('bye')
    }

}
init()
