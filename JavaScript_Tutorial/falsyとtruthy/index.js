//falsとみなされる値
//false,null,0,undefined,0n,NaN,""

//trueとみなされる値
//それ以外

if (0) {
    console.log('true');
} else {
    console.log('false');
}

//コンソールではfalseが表示される

if ('Yes') {
    console.log('true');
} else {
    console.log('false');
}

//コンソールではtrueと表示される

//0 以外の数値や空文字以外の文字列、他にオブジェクトはすべて true とみなされます。

///////////////////////////////////////////////////////////


let a = 0;
console.log(Boolean(a)); //コンソールでfalseと表示される

let b = undefined;
console.log(Boolean(b)); //コンソールでfalseと表示される

let c;
console.log(Boolean(c)); //コンソールでfalseと表示される

let d = NaN; //NamはNot A Numberの略、数値ではないよ、という意味
console.log(Boolean(d)); //コンソールでfalseと表示される
//プログラム上では計算結果が数値として期待されるが数値として処理できなかった場合にNaNが表示される
let e = parseInt("") //perseIntで整数型に変換しようとするが("")は数値として処理できない
console.log(Boolean(e)) //コンソールでfalseと表示される
console.log(e) //コンソールでNanと表示される

//コーディングの際に変数に値が設定されているかを確認したい場合はしばしある
//それはつまり、値はNullもしくはundefined以外かどうかを確認するかのと同じ意味になる
//たとえばif文で値が設定されている場合に何らかの処理を行いたい場合はfalsekどうかを確認する必要がある

//その場合は変数をif文の中に放り込んでしまうという手がある

if (1) { //引数の前にnot演算子(!)をつけ、これに続く変数が1はtrue
    console.log("Hello") //よって"Hello"が実行されてコンソールに表示される
}

if (!e) { //引数の前にnot演算子(!)をつけ、これに続く変数がtrueの場合はfalseに変換し、falseであればtrueに変換する
    console.log("Hello") //eはfalseであるためtrueが返ってくる
} else {
    console.log("bye") //tureであればfalseが実行される
}

//0だけは無条件でfalse判定されるので要注意である