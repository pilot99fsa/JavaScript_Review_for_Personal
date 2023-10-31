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