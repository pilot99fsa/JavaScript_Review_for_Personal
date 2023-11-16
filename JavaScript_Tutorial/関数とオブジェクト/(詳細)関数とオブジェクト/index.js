function a() {
    console.log("Hello")
}

a.prop = 0;
a.method = function () {
    console.log("method")
} // 関数宣言で定義した関数に対してドット(.)記法でプロパティを登録できる
// 関数aはオブジェクトであると表現できる

a() //2行目のconsole.logが実行される
a.method() //7行目のconsole.logが実行される
console.log(a.prop) //コンソールには0が表示される

// 復習であるが、関数名に()をつけると関数が実行される
// 関数は実行可能なオブジェクトである
// 実行可能な点以外は他のオブジェクトと変わらない
// あくまで関数はオブジェクトとして取り扱うこと