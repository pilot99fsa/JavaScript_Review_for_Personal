function sleep1(callback, val) {
    setTimeout(function () {
        console.log(val++);
        callback(val);
    }, 1000);
}

// sleep1(function (val) {
//     sleep1(function (val) {
//         sleep1(function (val) {
//             sleep1(function (val) {

//             }, val)
//         }, val)
//     }, val)
// }, 0)

/** 出力結果
 * 0
 * 1
 * 2
 * 3
 *
 * 0~3が1秒ずつ遅れて出力される
 */

// 上記のコードの問題点は、階層が深くなることで可読性が著しく下がることである。「コールバック地獄」とも言う

// このコードをPromiseを使って書き換えていく

function sleep2(val) {
    // まず、Promiseのインスタンス化を行う、次に引数としてresolve,rejectを渡してやる(今回はresolveしか使わないので第二引数は省略しても良い)。
    return new Promise(function (resolve, reject) { // returnを付け加えることで、thenメソッドを使うことができる
        // setTimeout()をPromiseの中に配置してやる
        setTimeout(function () {
            console.log(val++)
            // callbackをresolveに書き換える
            resolve(val)
        }, 1000)
    })
}
// これで書き換えは完了したので、sleep2を実行してやる

// 関数を実行した時点で、new Promiseが戻り値として返ってくるのでthenメソッドを追加してコールバック関数を付け加える
sleep2(0).then(function (val) {
    return sleep2(val)
}).then(function (val) {
    return sleep2(val)
}).then(function (val) {
    return sleep2(val)
}).then(function (val) {
    return sleep2(val)
}).then(function (val) {
    return sleep2(val)
})
// .then(function (val) {
//     sleep2(val)
//     return val
// })

// thenメソッドの中でPromiseチェーンを繋ぐ場合は、必ずコールバックの戻り値に、Promiseのインスタンスを返すことを忘れないこと(そう言う仕様になっている)