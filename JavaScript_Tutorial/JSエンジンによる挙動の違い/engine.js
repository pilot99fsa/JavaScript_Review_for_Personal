a();
function a() {
    //
    let c = 1;
    console.log(c);
    //
    d();
    function d() {
        console.log("d is called");
    }
    //
    console.log("a is called")
}

const b = 0;

console.log(b)

//
//letとconstではChromeの開発ツールでScopeに着目すると、undefinedが表示される。firefoxではuninitializeと表示される
//letやconstのホスティング時にはundefinedは設定されません。Chromeの開発ツール上では便宜的にundefinedという値が表示される事があります。
//しかし変数の使用箇所よりも前に宣言された変数はundefinedが設定されます。下記の場合がその例である
let e;
console.log(e); // undefined
//

//2023年10月現在
//"can't access lexical declaration `variable' before initialization" は、語彙変数が初期化前にアクセスされたときに発生します。これはブロック文内で、 let または const 宣言が定義される前にアクセスされたときに発生します。