let a = "1";
let b = 1;

//この二つの変数を２種類の等価性で比較する

//厳格な等価性
console.log(a === b); //厳格な等価性、真偽値を問う
//Chromeのコンソールで調べるとfalseが表示される
//変数aと変数bは等価ではない
//厳格な等価性は型まで含めて比較する。文字列と数値なので当然falseとなる
//

//
//抽象的な等価性
console.log(a == b);
//Chromeのコンソールで確認すると、trueと表示される
//こちらでは等価であるとみなされている
//

/////////////////////////
//console.logは繰り返し使いたいので関数にする

function printEqaulity(c, d) {
    console.log(c === d);
    console.log(c == d);
}
//上記の関数を使って様々なことを確認していく

let c = "1";
let d = 1;

let e = true;
//次は変数dと変数eを比較する

console.log(d === Number(e)) //抽象的な等価性、では32行でBoolean型で宣言された変数eを左記のconsole.logのようにNunmber型に暗黙的に型変換を行っている。

// printEqaulity(d, e)
//厳格な等価性ではfalseだが、抽象的な等価性ではtrueが表示される
//抽象的な等価性では、まず両辺の型を合わせる作業が行われる

//抽象的な型変換の仕様についてはECMAScriptのサイトに載っている
//11.9.3 The Abstract Equality Comparsion Algorithm

let f = "";
let g = 0;
let h = "0"

printEqaulity(f, g) //厳格的にはfalseで抽象的にはtrueと判定される
printEqaulity(h, g) //厳格的にはfalseで抽象的にはtrueと判定される(上記と同じ)

//コンソール上でNumber("")と入力し、変数fを数値に変換すると、0が返ってくる(0に変換される)
//コンソール上でNumber("0")と入力し、変数hを数値に変換すると、0が返ってくる(0に変換される)

//様々な例を見てきたが、このように抽象的な等価性では型の変換が自動で行われるので注意するべきである
//基本的には厳格な等価性を使うべきである




