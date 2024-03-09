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

// キーが関数であっても取得することは可能である

const key2 = function () { }
map.set(key2, 'value2') // // 関数をキーとして'value2'をマップにセット
console.log(map.get(key2)) // マップから関数key2に対応する値を取得してコンソールに出力
// コンソールにはvalue2が出力される

// プリミティブ型の値である文字列や数字もキーとして扱うことが可能である

let key3 = 0
map.set(key3, 'value3')
console.log(map.get(key3))
// コンソールにはvalue3が出力される

let key4;
map.set(key4 = 0, 'value4') // 宣言強に初期化するのではなく、map.setの時に初期化することも可能である
// このように書いても、key3の時とt同じように動作する

// ここで注意すべきは、変数に入っているアタがプリモティブ型の場合は、値そのものへの参照を保持する

console.log(map.get(0)) // なので、例えば、このようにconsole.log()に入れる値をkye4ではなく0にすると
// コンソールにはvalue4が出力される

// 3行目のように。オブジェクトをキーに設定する場合にはキーがオブジェクトへの参照を保持しているので、参照を利用して値を保持している.
// そのため

console.log(map.get({}))

// コンソールにはundefinedと出力される
// console.log()に設定したオブジェクトとkey1に設定したオブジェクトは別物なのでundefinedとなる

// mapから値を削除したい場合は、map.deleteでキー情報を削除できる

map.delete(key3)
console.log(map.get(0))

// undefinedが出力されたら、削除に成功である

for (const [k, v] of map) {
    console.log(k, v)
}

for (const k in map) {
    console.log(k)
} // この場合は出力されない

// 最後にsetも見ていこう 

const s = new Set()
s.add(key1)
s.add(key1)
s.add(key2)
s.add(key3)
s.delete(key3) // set()から削除する時にもdeleteは使用できる

// 値が含まれているかどうかを確認する時には
s.has() // これで確認できる
// これをconsole.log()で確認する
console.log(s.has(key2))
console.log(s.has(key3))
// key2の場合にはtrueが、key3の時はfalseが帰ってくる

// このhas()はmapでも使える


// このSet()だが、配列のように添え字を指定しての値の取得が使えない
// その場合には配列に戻す必要がある
const array = Array.from(s)
console.log(array)
// コンソールで確認すると、添え字が確認できる
// また、スプレッド構文を使用することでも配列の生成が可能である

for (let k of s) {
    console.log(k)
} // 重複したものは1つしか表示されない