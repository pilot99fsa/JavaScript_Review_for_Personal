// 以下のコードはPromiseのMirotaskの中に、setTimeoutのMacrotaskが絡み合っている、どのように処理されるか予想しよう
// new Promise(function promise(resolve) {
//     console.log('promise');

//     setTimeout(function task1() {
//         console.log('task1');
//         resolve();
//     });

// }).then(function job1() {
//     console.log('job1');
// })

// console.log('global end');

/** 出力結果
 *  Promise
 *  global end
 *  task1
 *  job1
 */

new Promise(function promise(resolve) {
    console.log('promise');

    setTimeout(function task1() {
        console.log('task1');
        resolve();
    });

    setTimeout(function task1() {
        console.log('task2');

        // queMicrotaskはPromiseを使って書き換えることができる
        const p = Promise.resolve();
        p.then(function job4() {
            console.log('job4')
        })
        // 上記のコードは、下の41 ~ 43行目と同じ動きをする

        queueMicrotask(function job4() {
            console.log('job4')
        })
    });

}).then(function job1() {
    console.log('job1');


}).then(function job2() {
    console.log('job2');
}).then(function job3() {
    console.log('job3');
})

console.log('global end');
