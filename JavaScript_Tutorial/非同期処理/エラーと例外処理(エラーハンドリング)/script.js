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
            // throw new Error('no data found') カスタムエラーを使うためにコメントアウト
            throw new NoDataError('no data found')

            /**
             *  なぜここにエラーの処理を書かずに、throwを使って別の場所に書くのか？(throwを使う必要性について)
             *  throwを使わず直接if文の分岐として書くのも方法の一つではあるが、関数を呼び出して使うに当たって、
             *  使う場所やタイミングでエラーの処理内容を変えたい場合がある。そういったメンテナンス性を考慮して、throwが使われる。
             *  
             *  なのでここにエラーの処理を書くのも間違いではない。
             *  だが実務において(特に近年は)大抵のシステムは、関数や処理が複雑かつ大量な大規模なプログラムが実装されるので、基本的にはthrowが用いられる.
             */
        }

        return json
        // json情報が正確に記述されて正常に取得できたら、関数の実行元にjson情報をreturnできる
    }
}

// カスタムエラーについて。
// classを用いて41行目のErrorのクラスを継承して独自のエラーを作成することができる

// データがなかった、取得できなかった場合のエラーのクラスを作ってみよう
class NoDataError extends Error { //extendsでクラスを継承できる。さらにclassを継承して独自のclassを作るときは、class名の先頭を大文字にする。
    constructor(message) {
        super(message)
        this.name = 'NoDataError'
    }
}

// カスタムエラーを作成する理由と用途について
// 例外処理の中でさらに条件分岐を作りたい時に使われる

async function init() {
    try {
        const users = await fetchUsers()
        // returnされたjsonの情報をfor文を用いてループ処理で出力していく
        for (const user of users) {
            console.log(`I'm ${user.name}, ${user.age} years old`)
        }
    } catch (e) {
        // カスタムエラーを作成したのでif文を使って以下のようなの条件分岐が作成できる
        if (e instanceof NoDataError) {
            console.log(e)
        } else {
            console.error('Oops, something went wrong !')
        }
        console.error(e)
    } finally {
        console.log('bye')
    }
    // このtry~catch~finallyのブロックの文だが、throwでエラーを投げた時に記述されていなければ、処理がストップしてしまう。
    // 上のtryからfinallyをコメントアウトした上でjsonファイルの[]の中身を削除してみよう。下のconsole.logは出力されないだろう.
    console.log('end')
}
init()
