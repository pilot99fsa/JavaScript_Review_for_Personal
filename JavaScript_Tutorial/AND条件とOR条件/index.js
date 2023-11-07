// && AND条件
// || OR条件

const a = 1;
const b = 4;
const c = 3;
const d = 0;
const e = 2;

//AND条件 
console.log(a && b); // AND条件の式では左辺のaがtrueであるか否かを判定する。falseの場合は右辺の値を条件式の結果として返す(今回の場合はコンソールにbが表示される)
// 左辺の値がtureの場合はそのまま左辺の値を返す(今回はaを返す)
// 厳密には左辺から右辺にかけて順番に一つずつtrueかfalseを判定していき、false判定が出た時点でその値を返す。全てtrueであった場合は最後の値(最も右辺の値)を返す

console.log(a && b && c) // a,b,cの順にtrue/false判定を行い、全てtrueなのでコンソールには最後のcの値が表示される

console.log(a && b && c && d && e) //a,b,c,d,eの順にtruefalse判定を行おうとするが、dの値は0でfalse判定が下されるのでコンソールにはdの値、0が表示される
//

//
//OR条件
console.log(a || d); //OR条件ではまず左辺のtrue/false判定を行う。左辺を判定したときにtrueであればその値を返し、falseであれば右辺を返す。
//// 左辺から右辺にかけて順番に一つずつtrueかfalseを判定していき、true判定が出た時点でその値を返す。全てfalseであった場合は最後の値(最も右辺の値)を返す
//

//
//AND条件とOR条件のグループ化の実例
const f = 0;
const g = 1;
const h = 3;
const i = 0;
console.log(f || g && h);
// f || g 、　まずOR条件でfをtrue/false判定を行う。OR条件ではtrueが判定されるとその時の値を返し、falseが判定されると、右辺の値を返すか、複数条件がある場合には次の条件の判定に進む。
// fはfalse判定なので、次のステップに進む。
// g && h 、 gのAND条件でtrue/false判定を行う。AND条件ではfalseが判定されるとその時の値を返し、trueが判定されると、右辺の値を返すか、複数条件がある場合は次の条件の判定に進む。
// gはtrueなので右辺を返す。コンソールにはhの値、3が表示される。

//以上が31行目の二つの条件が混ざった式のロジックであるが、はっきり言って分かりにくい
console.log((f || g) && (h || i)) // そこで変数を丸括弧で括ることで、丸括弧内はグループ内のみで計算あるいは優先して判定するというのを明示することができる。
// (1 + 2) × 3 = 9 要はこれと同じである
// 39行目のロジックを説明すると左右の丸括弧それぞれの判定結果をAND条件でtrue/false判定している。コンソールにはhの値、3が表示される
//

//
//AND条件とOR条件の応用

function hello1(name) {
    console.log("Hello" + name);
}
hello1("Bob") //コンソールにはHello Bobと表示される。 
// 引数を渡さなければ、Hello undefinedと表示されるが非常に不格好になる
// そこでif文を使って引数が渡されなかった場合の初期値を設定する
function hello2(name) {
    if (!name) { // 2.nameがfalseの場合にnameがTomとなるようにしたい。そこでnameの直前にnot演算子(!)をつけると、falseの場合にif文の中を実行する
        name = "Tom" // 1.nameの初期値をTomとする。nameが空文字やnull、undefinedの場合(つまりfalseの場合)にTomと表示されるようにしたい。
    }
    console.log("Helo" + name) // 3.引数は空なので、nameはfalseである。よってnameの値はTomである
}
hello2(); //4.コンソールにはHello Tomと表示される。

//これらの記述をもう少しスマートに記述したい場合(コード量を減らす、可読性を向上させたい場合)
function hello3(name) {
    name = name || "John"
    // OR条件でnameがfalseの場合は右辺が返される。つまり"John"が返され、nameの値は"John"となる
    // 今回は引数に"Mike" が渡されており、これはtrueである。よってnameの値は"Mike"である
    console.log("Hello" + name);
}
hello3("Mike");
//

// ES6からはデフォルト引数といいう機能が備わっている
function hello4(name = "James") {
    console.log("Hello" + name);
}
hello4("Tom")
//これも同じ構造の記述となる
//

//
// 注意点としては、falseで初期値が返ってくるように記述した場合、数値を扱う時である
function hello5(name) {
    name = name || "Jack";
    console.log("Hello" + name)
}
hello5(0)
// Hello0 と表示したいが、0はfalseである。このままでは初期値のJackがnameに格納される
//

//
// AND条件を使った応用例
function hello6(name1) {
    name1 = name1 || "Jack";
    console.log("Hello" + name1)
}
hello6()

let name1 = "Bob" // name1の値がtrueの場合のみhello6の関数が呼ばれるようにしたい
if (name1) { //if文でname1がtureの時だけ関数を呼び出す
    hello6(name1)
}

// これもAND条件を使うことで簡略化できる
function hello7(name2) {
    name2 = name2 || "Jack";
    console.log("Hello" + name2)
}
hello7()

let name2 = "Bob"
name2 && hello7(name2) //name2がtureの場合に右辺を返す。つまりhello7(name2)の処理に進むというロジックである。
// 左辺の値、name2の値がfalseであれば、右辺の値は返されない。つまりhello2(name2)は実行されないという訳である
//

///////////////////////////////////////////

// 様々な書き方をしたが、どれが一番いい書き方、あるいは推奨されているかではなく、ロジックや挙動を理解することである