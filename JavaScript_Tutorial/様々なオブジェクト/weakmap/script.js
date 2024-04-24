// Map の機能限定版
// WeakMap は Map と比べて機能が限定されています。

/**
 * key に指定可能な型は Object 型のみ
 * 要素の数を確認できない (WeakMap.prototype.size がない)
 * 要素を列挙できない (WeakMap.prototype.forEach がなく、iterable でもない)
 * 全ての要素を削除する機能がない (WeakMap.prototype.clear がない)
 * 弱参照である (key に指定されたオブジェクトがどこからも参照されなくなった時、自動的にメモリから解放される)
 */

const wm = new WeakMap()

const o = {}
wm.set(o, 'value1')

// Map やオブジェクトは弱参照ではないので、参照を保持し続けます。

console.log(wm.get(o))

// oというキーが、weakmapの中に存在するか確認したい時にhas()を使う
console.log(wm.has(o))

// deleteを使うと、意図的にset()の中のキーとバリューのペアを削除することができる
console.log(wm.delete(o))
console.log(wm.get(o)) // deleteしたのでget()を使っても取得できない

// weakmapはfor ~ ofを使った反復処理には使えない点に留意する事(Mapを使うと良い)。