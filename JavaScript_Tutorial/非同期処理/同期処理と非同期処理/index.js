//同期処理では一つの処理が完了するまでは次の処理に進まない。
function sleep(ms) { //sleepと定義された関数に3000ms(3秒)だけメインスレッドを占有するような仕組みになっている
    const startTime = new Date()
    while (new Date() - startTime < ms) // 3秒だけメインスレッド上でループ処理が行われる
        console.log('sleep done') //上記の剃りが終わるとコンソールに'sleep done'と表示
}

const button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log('button clicked')
})

sleep(3000)
//画面更新中にボタンをクリックしてもコンソールにbitton clickedは表示されない
// 4行目の処理を待っているからである

///////////////////////////////////////////////////////////////////

function sleep2(ms) { //sleepと定義された関数に3000ms(3秒)だけメインスレッドを占有するような仕組みになっている
    const startTime = new Date()
    while (new Date() - startTime < ms) // 3秒だけメインスレッド上でループ処理が行われる
        console.log('sleep done') //上記の剃りが終わるとコンソールに'sleep done'と表示
}

const button2 = document.querySelector('button2');
button2.addEventListener('click', function () {
    console.log('button clicked')
})
setTimeout(function () {
    sleep2(3000)
}, 2000)
