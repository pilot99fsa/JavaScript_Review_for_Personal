// setTimeoutは非同期処理になるので、グローバルコンテキストが空になると、実行される
setTimeout(function task1() {
    console.log('task1');
});

new Promise(function promise(resolve) {
    // new Promiseのcallback関数は同期的に処理されるため、一番初めにコンソールに表示されるのはpromiseとなる
    console.log('promise');
    resolve();
    // 続いてthen以下のcallback関数は非同期処理であるため、グローバルコンテキストが空になると表示される。
}).then(function job1() {
    // こちらのMicrotaskの処理が3番目に実行される
    console.log('job1');
});
// よって2番目に表示されるのは以下のグローバルコンテキストである
console.log('global end');

/** 出力結果
 * promise
 * global end
 * job1
 * task1
*/

// new Promiseに渡したコールバック関数は同期的に処理され、thenメソッドに渡したコールバック関数は非同期で実行される