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

function sleep2(callback, val) {
    // まず、Promiseのインスタンス化を行う、次に引数としてresolve,rejectを渡してやる
    new Promise(function (resolve, reject) {
    })
    setTimeout(function () {
        console.log(val++)
        callback(val)
    }, 1000)
}
