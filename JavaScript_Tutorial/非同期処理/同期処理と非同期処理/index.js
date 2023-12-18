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

function sleep2(ms) {
    const startTime = new Date()
    while (new Date() - startTime < ms)
        console.log('sleep done') // sleep2の処理が開始されてから3秒経過して'sleep done'が表示されると再度ボタンが押せるようになる
}

const button2 = document.querySelector('button2');
button2.addEventListener('click', function () {
    console.log('button clicked') // sleep2の処理が開始されるまでの2秒間はボタンをクリックできる
})
setTimeout(function () {
    sleep2(3000)
}, 2000) // 第2引数に設定した時間待ってから第1引数の処理を開始する

// 厳密には、2秒後にsleep2()の処理が始まるは、メインスレッドが占有されていないのでボタンを押せるが、sleep2()の処理が始まると、メインスレッドが占有さえるので、ボタンをクリックしても受け付けないのである

// 非同期処理は一時的にメインスレッドから処理が切り離される