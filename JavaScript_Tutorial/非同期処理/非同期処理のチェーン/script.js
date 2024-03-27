// コールバック関数を数秒待機したのちに実行する関数を定義する

// コールバックを引数にして関数を定義
function sleep(callback) {
    setTimeout(function () {
        console.log('hello world')
        // hello worldの後にコールバック関数を実行する
        callback()
    }, 1000) // 第2引数で待機時間を設定する。今回は1秒間
}

sleep(function () {
    console.log('callback done')
})

// コンソールで確認しよう、ブラウザを更新(もしくはVScode上で保存)して1秒後に出力される。

//　このような処理を複数繋げたい場合はどうだろう？

function chain(callback, val) { // 第2引数にvalという値を設定する
    setTimeout(function () {
        console.log(val++) // コンソールでvalを出力するようにする。同時に渡ってきたvalを後方インクリメントで+1してやる
        // hello worldの後にコールバック関数を実行する
        callback(val) // さらにコールバック実行時にも引数としてvalを渡す
    }, 1000) // 第2引数で待機時間を設定する。今回は1秒間
}

chain(function (val) {
    console.log('callback done')
}, //第2引数が空だとNaNと表示される
    0) // 0秒に設定する。すると0と出力される

// このchainと名付けたコールバック関数の中でさらにchainを呼ぶには？
chain(function (val) {
    chain(function (val) {

    }, val)
}, 0)

/** 出力結果
 *  0
 *  1
 */

// 試しにコールバック関数の中でさらにchain関数を読んでみよう、出力結果が+1されたものが延々と続くはずだ

// だがこのようなコードは、可読性が低い(読みづらい、汚いコード)
