const button = document.querySelector('button');
button.addEventListener('click', function task2() {
    console.log('task2 done') // index.htmlのボタンを押すことでtask2が発火する
});

function a() {
    setTimeout(function task1() {
        console.log('task1 done')
    }, 4000); // 4秒後にコンソールに'task1 doneが表示される'

    const startTime = new Date(); //  5秒後に'function a done' と表示される
    while (new Date() - startTime < 5000)
        console.log('function a done')
}

a()

//　個人ログ:2023/12/18 非常に難解なので徹底的に復復習すること