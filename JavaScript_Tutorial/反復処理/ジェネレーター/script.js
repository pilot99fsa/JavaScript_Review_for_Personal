//ジェネレーターについて

/**
 * ジェネレータは、要求に応じて次々に複数の値、場合によっては無限の数の値を返す(“生み出す”)ことができます。
 * それらは 反復可能(iterables) と上手く機能し、データストリームを簡単に作成することができます。
 * 参考ページ https://ja.javascript.info/generators
 * ES2015より追加
 */

function genIterator() {
    return {
        next: function () {
            return {
                done: true / false,
                value: 値
            }
        }
    }
}

// このコードをジェネレータで書き換えると

function* gen() {
    // functionの後ろにアスタリスクを付け加える事で、この関数をジェネレーター関数であると定義できる
    if (ループ継続) {
        yield 値;
        // yieldというキーワードで、オブジェクトを簡易的に表現できる。11 ~ 18行行目を表現できる
    } else {
        return 値
    }
}

// まず簡単なジェネレーターを定義してみよう
function* genFunc() {
    yield 1;
    yield 2;
    return 3;
}

// it.next()を呼ぶことで
const it = genFunc()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

/** 出力結果
 *  {value: 1, done: false} script.js:41 
 *  {value: 2, done: false} script.js:42 
 *  {value: 3, done: true } script.js:43 
 *  {value: undefined, done: ture} script.js:44 
 * */