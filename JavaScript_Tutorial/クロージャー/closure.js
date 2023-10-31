let num1 = 0; //グローバルコンテキストの段階でnum = 0を定義すればincrement()を実行してもnum = 0の初期化は行われなくなる(関数の中で初期化すると、関数を実行するたびに初期化される)

increment1(); // +1 1が表示される
increment1(); // +1 2が表示される
increment1(); // +1 3が表示される

function increment1() {
    // let num = 0; ここでnum = 0と定義するとincrement()をいくら実行しても常にnum = 0と初期化される
    num1 = num1 + 1;
    console.log(num1);
}
//このコードではnum1はソースコードのどこからでも変更可能な状態であり、問題がある

num1 = 0;
increment1() //この状態でコンソールを確認すると、値が重複して表示されてしまう

//
/////////////////////////
//

//
//プライベート変数を用いて、外部から変数を変更できないようにする

function incrementFactory() { //Factoryという関数名は何かしらを生成する関数に命名されることが多い

    let num2 = 0;

    function increment2() {
        num2 = num2 + 1;
        console.log(num2);
    }
    return increment2;
}
const increment2 = incrementFactory()

increment2() //この関数で実行しているのは、incrementFactoryの中で関数宣言したincrement2()の関数のみ(29~30行目のみ)
increment2()
increment2()
increment2()

//
/////////////////////////
//

//動的な関数の生成

function addNumberFactory(num3) { //num3には5が渡される(54行目で引数に5を設定している)
    function addNumber(value) {
        return num3 + value; //num3にも5が渡される
    }
    return addNumber //addNumberFactoryが実行されると、呼び出し元に中身のaddNumberを返却する
}

const add5 = addNumberFactory(5); //add5が呼び出し元。add5はnum3に5が代入されたaddNumber()
const add10 = addNumberFactory(10)
const result1 = add5(10) //返却されたaddNumber(value) のvalueに10を代入する、よってnum3は5、valueは10で5 + 10となる
const result2 = add10(10)
console.log(result1) // コンソールには15と表示
console.log(result2) // コンソールには20と表示

//このように、異なる値を引数として与えて、結果的に動的に異なる値を返す関数を生成する事ができる
//

//
//細かい計算の話
//なぜvalueに値は渡されるのか？(add5の場合)
// const add5 = addNumberFactory(5);

// addNumberFactory(5)で実行した際には以下のようになります。
// function addNumberFactory(num <- 5) {
//     function addNumber(value) {
//         return 5 + value; <- num = 5
//     }
//     return addNumber;
// }

// //そのためadd5は以下のような関数となります。
// function addNumber(value) {
//     return 5 + value;
// }

// // なので、add5(10)の結果は5+10となります。
// const result = add5(10);
// console.log(result) // > 15
//

//
//return 関数名(); とした場合は関数の実行結果をreturnの戻り値とします。
//return 関数名;とした場合には関数自体をreturnの戻り値とします。
//関数に()をつけるとその関数がその時点で実行される。
//

//
//追記: 非常にわかりやすいサンプルコード
function multipleFactory(init) { // 関数を生成する親関数

    return function (val) {  // returnで無名関数を返す
        console.log(init * val);
    }
}

const multiple3 = multipleFactory(3); // 3の倍数を表示する関数
const multiple5 = multipleFactory(5); // 5の倍数を表示する関数
const multiple10 = multipleFactory(10); // 10の倍数を表示する関数

multiple3(4); // 12
multiple5(5); // 25
multiple10(5); // 50