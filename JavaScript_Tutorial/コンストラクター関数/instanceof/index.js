function F(a, b) {
    this.a = a;
    this.b = b;
    // return { a: 1 }  このオブジェクトリテラルである{}の中身がinstanceの変数となる
    // この1行を省略せずに記述すると

    const result = new Object();
    result.a = 1;
    return result;

}

// 関数のFの結果は。

F.prototype.c = function () { }
const instance = new F(1, 2)
console.log(instance instanceof F) // コンソールにはfalseが表示される
console.log(instance instanceof Object) // コンソールにはtrueが表示される
console.log(instance.__proto__ === F.prototype) // これもfalse
console.log(instance.__proto__ === Object.prototype) // これはtrue
// このinstanceが参照しているのObject.prptotype

// 7行目~9行目をコメントアウトすると17~20行目のkコンソールの結果が変わってくるので確認してみよう

// instanceでどのようなことができるのか?

function fn(arg) { // 引数argにオブジェクト、もしくは配列が渡ってきたら？
    // オブジェクトが渡ってきたら
    arg['key'] = 'value'
    // 配列が渡ってきたら
    arg.push('key')

}

// instanceofを使い、作成元のコンストラクターを割り出すことで条件分岐を作ることができる

function fn2(arg2) {
    if (arg2 instanceof Array) { // Array、つまり配列がコンストラクターだったら
        arg2.push('value2');
    } else { // それ以外はオブジェクトで処理する
        arg2['key2'] = 'value2'
    }
    console.log(arg2)
}

fn2({})
// fn2{[]} にするとコンソールに表示される結果も変わってくる、試してみよう