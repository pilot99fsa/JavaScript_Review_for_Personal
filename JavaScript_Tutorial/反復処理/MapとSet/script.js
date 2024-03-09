// mapのオブジェクトを一つ用意する
const map = new Map()
const key1 = {} // 空のオブジェクトを作成し、キーとして使用

map.set(key1, 'value1') // key1をキーとして'value1'をマップにセットs
console.log(map.get(key1)) /// マップからkey1に対応する値を取得してコンソールに出力

// コンソールにはvalue1が出力される

/**
 * このコードでは、Mapを使って、key1というオブジェクトをキーとして'value1'という値をマップにセットし、
 * その後、同じキーを使用してマップから値を取得している。
 * Mapはデータの組織化と検索に役立つ。
 */

const key2 = function () { }
map.set(key2, 'value2') // // 関数をキーとして'value2'をマップにセット
console.log(map.get(key2)) // マップから関数key2に対応する値を取得してコンソールに出力

// コンソールにはvalue2が出力される

let key3 = 0
map.set(key3, 'value3')
console.log(map.get(key3))

// コンソールにはvalue3が出力される