function a(name, name1) {
    console.log('hello' + name + '' + name1)

}

const tim = { name: 'Tim' }

const b = a.bind(tim)

b()


a.call(tim, 'Tim', 'Bob') // bindとcallの使い方はほぼ同じで、callを使った場合は関数の実行まで行われる
a.apply(tim, ['Tim', 'Bob']) //applyを使った場合は第2引数に設定するのは文字列等ではなく配列になる
// 配列に渡された値が展開されて関数の引数に順番に渡される

// 配列として取り扱う場合はapplyを、それぞれの変数が独立している場合位はcallを使う

//applyについて詳しく
const array = [1, 2, 3, 4, 5]
//上の配列の中から一番大きい数字のみを取り出したい時
Math.max(1, 2) //コンソールには1と2の内、大きい方の2が表示される
//applyを使ってarrayを渡す
const result = Math.max.apply(null, array) // 第2引数にarrayを渡す
console.log(result) // コンソールに5が表示される(5が取得できる)

// しかしES6からは上記の使い方は少なくなったので注意する
// 代わりにスプレッド演算子を使う。これが今は主流


const array1 = [1, 2, 3, 4, 5]

const result1 = Math.max(...array1)
console.log(result1)