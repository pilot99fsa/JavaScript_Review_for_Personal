//　一般的な関数宣言
function a(name) {
    return 'hello' + name
}
// 関数式
const b = function (name) {
    return 'hello' + name
}
// 上の関数をアロー関数にすると
const c = (name) => {
    return 'hello' + name
}
//アロー関数の場合は、引数の()を省略でき、引数だけで書いても良い
// 実行行が1行の場合はreturnと波括弧も省略できる
const d = name => 'hello' + name

console.log(d('Tom'))

//引数が二つの場合は引数の()は省略できない
const e = (name, name1) => 'hello' + name + ' and ' + name1

console.log(e('Tom', 'Bob'))

//アロー関数の最大のメリットは記述量を隙なくできることである

// ただし、アロー関数は無名関数と全く同じではないことに留意する
// this, arguments, new, prototype 等
// 特にthisの挙動は異なってくる