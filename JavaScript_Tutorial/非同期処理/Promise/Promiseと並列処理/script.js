function sleep(val) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(val++);
            resolve(val);
        }, val * 500); // ループを重ねるごとに表示されるタイミングが遅くなる
    });
}


// Promise.allは、エラーが発生したら拒否（reject）されて、最初に発生したrejectの値を返す。
// Promise.all()はrejectが呼ばれると、catch()に処理が移る

Promise.all([sleep(2), sleep(3), sleep(4)])
    // このように記述することで、配列に格納されたPromiseのインスタンスが全て完了するまで次のthenメソッドを待つことになる
    .then(function (data) {
        console.log(data) // 4が一番遅く呼び出されるが、4が呼ばれた直後にendと表示されることが確認できる
    }) // このように、非同期処理を並列で行うことができる
    .catch(function (e) {
        console.error(e)
    }) // 処理が失敗すると、catch()メソッドが発動する

//このようなPromiseチェーンの中でPromise.allを使いたい場合は？

Promise.all([sleep(2), sleep(3), sleep(4)])
    .then(function (data) {
        console.log(data)
    })
sleep(0).then(function (val) {
    return Promise.all([sleep(2), sleep(3), sleep(4)])
    // Promise.all()もまた、Promiseのインスタンスを返すのでreturnの後に記述することで、次のthenメソッドがPromiseが完了するまで処理を待機させることができる
}).then(function (val) {
    return sleep(val)
}).then(function (val) {
    return sleep(val)
})

// Promise.race()について
// 配列に渡された、Promiseのどれか一つが完了した時点で次の処理に移る

Promise.race([sleep(2), sleep(3), sleep(4)])
    .then(function (data) {
        console.log(data)
    })

// Promise.allSettled()について
// Promise.allSettledはエラーが起きても、必ず成功のオブジェクトを返す。
// Promise.allSettled()について : https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
// なので、catchメソッドを記述しても、失敗したとしてもcatch処理が開始されない

/**
 * Promiseの第2引数に何も渡してないと、コンソールで確認した際にstatusの欄がfullfiledになっている。
 * 今回はrejectを渡しているので、rejectと表示される
 * このように。全ての非同期処理の完了を待つが、その非同期処理が成功か失敗かについては不明なのがallSettled()である
 */


Promise.allSettled([sleep(2), sleep(3), sleep(4)])
    .then(function (data) {
        console.log(data)
    })
    .catch(function (e) {
        console.error(e)
    }) // コンソールには赤色のエラーメッセージは表示されない