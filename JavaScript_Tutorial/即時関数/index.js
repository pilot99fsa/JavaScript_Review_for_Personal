//通常の関数宣言
function a() {
    console.log("called")
}
a();

//これを即時関数で定義および実行する
(function () {
    console.log("called");
})();
//このコードでは丸括弧が二つに別れているのが分かる
//最初の丸括弧の中身は言わば、aを実行しているものと考えれば良い。
(a)()
//実際にコンソールd確認すると値が確認できる(もちろんaを関数定義しているから可能である)
//

//
//JavaScriptにおける()の用途は二つ、関数の実行とグループ化である
a(); //これは関数の実行
(a)() //これは関数のグループ化である(からの実行)
    //

    //
    //function() {
    //    console.log("called")
    //}
    //関数宣言は名前をつける必要があるので、上記のコードではエラーになる
    //しかし一回しか使わない関数のために名前をつけるのは面倒臭い
    (function () {
        console.log("called")
    })()
//即時関数であれば、名前をつける必要もなく、変数に関数を代入することで宣言と同時に実行することができる。再利用しない関数を作りたいときには有効である

let b = function () {
    console.log("called");
}()
//即時関数でも、関数式の形であれば全体を丸括弧()で囲わなくてもエラーが発生しない
//一般的には即時関数として使う場合は丸括弧()を明示的につけることで他の開発者に即時関数である事を分かりやすくする効果がある

let c = (function () {
    console.log("called")
    return 0; //cに0という値(結果)を返却する
})()
console.log(c) //コンソールで結果を確認すると0と表示される

//
let d = (function (f) { //51行目で受け取った引数の10がfに代入される
    console.log("called" + f) //コンソールに called 10 と表示される
    return 0;
})(10) //引数として10を渡す
//中身は2~5行目の関数宣言とやっていることは同じで、纏めると上記の形になる

///////////////////

//即時関数を使う機会
//関数の中でしか使えない変数や関数と、関数の外で使う変数や関数を明確に区別したいときに即時関数を用いる

let g = (function () {
    console.log("called")
    let privateVal = 0; //このprivateValという関数は、gと宣言された即時関数の関数スコープの中でしか使えない
    let publicVal = 10; //これは後に関数の外でも使えるようにする

    function privateFn() {
        console.log("privateFn is Called");
    }
    function publicFn() {
        console.log("public is Called");
    }
    //ここでpublicVal(変数)とpublicFn(関数)だけ外から呼べるように設定する
    return {
        publicVal, publicFn //オブジェクトとして値を返しているため、本来はpublicVal:publicValの形だが、変数名とプロパティ名は一致しているため、コロン以下は省略できる
    } //returnされた二つの値は、cに返却される
})();

//returnされた値にアクセスする
g.publicFn();
console.log(g.privateVal);
//コンソールに値(10)が表示される
// c.privavteVal()　こちらは即時関数の内部からでしか呼べない(エラーになる)
// privateValやprivateFnが外で呼び出せないのは、returnしていないから

////////////////////

let h = (function () {
    console.log("called")
    let rePrivateVal = 0; //ここのタイミングでしかrePrivateValは初期化されない
    let rePublicVal = 10;

    function rePrivateFn() {
        console.log("rePrivateFn is Called");
    }
    function rePublicFn() {
        console.log("rePublicFn is Called" + rePrivateVal++); //このrePublicFnが呼ばれたタイミングで+1ずつされている
    }
    return {
        rePublicVal, rePublicFn
    }
})();
h.rePublicFn();
h.rePublicFn();
h.rePublicFn();
h.rePublicFn(); //コンソールで確認すると、+1ずつ加算されるのが確認できる
//rePrivateValは外から操作できないが、変数hにreturnされたrePublicFnを実行するという形でrePrivateValの値を変更する事ができる(外にreturnされた値を通さなければいけない)

//グローバルスコープを汚したくない（スコープを即時関数内に限定したい）ときに使用する。
//現在はimport fromなどを使うES Module使用できる都合で、即時関数はあまり使わない。
//一度きりの仕様の場合にはわざわざ名前つけずにそのまま実行したいときに即時関数のコンセプト。