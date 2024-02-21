// 典型的な配列のfor文
const array = [1, 2, 3, 4, 5]

for (let i = 0; i < array.length; i++) { // iを０に初期化し、i の条件式とし、arrayのlength(つまりarrayの要素数、5)、
    console.log(array[i]) // 1~5が出力される
}

// 上のコードは数iがarrayの長さよりも小さい間、繰り返し処理を行うことを示している。

// while文の配列

let v, i = 0 // vとiに0を格納するという意味ではない
console.log(v) // vの値を確認してみよう。undefinedと出力されるはずだ

/** 
 * このコードは
 * let v;
 * let i =0;
 * と同じである。覚えておこう。
 * */

while (v = array[i++]) {
    console.log(v)
}
// for文で書いたときと同じ値が出力される

// v = array[i++] は、array[i]の値をvに代入し、iをインクリメントする。この条件は、代入された値が真である限りループが続行される。
// 0番目の値は配列の1番目の要素である1なので、trueである
// 0~4番目には要素が入っているため、tureであるが、5番目はundefinedつまりfalseと判定される。falseと判定された時点でwhileのループを終了させる
// 注意点は配列にfalseな値が入っていると、その値がfalseと判定された時点でwhileループが終了されてしまう点である

// 配列にfalseな値が混じってそうな場合は、

while (i < array.length) {
    console.log(array[i]);
    i++;
}

// このように記述するとよい