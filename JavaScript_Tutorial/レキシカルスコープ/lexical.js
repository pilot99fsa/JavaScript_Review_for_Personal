let a = 2;
function fn1() {
    let b = 1;
    function fn2() {
        let c = 3;
        console.log(b) //fn1の関数スコープ内なので、bを参照可能
    }
    fn2()
}
fn1()

/////////////////////////

let d = 2;
function fn3() {
    let e = 1;
}
fn3()

function fn4() {
    let f = 3;
    console.log(d) //fn3の関数スコープ外なので、この状態ではdを出力できない。
}
fn4()

/////////////////////////

let h = 2;
function fn5() {
    let i = 1;
    function fn6() {
        let j = 3;
        console.log(i) //fn5の関数スコープ内なので、iを参照可能
    }
    fn6()
}
fn5()

//グローバルスコープ...h、fn5
//fn5の関数スコープ...i、fn6
//fn6の関数スコープ...j

//fn5からはグローバルスコープが外部スコープとなり、参照可能
//fn6からはfn5の関数スコープとグローバルスコープが参照可能である

//自身のスコープから相対的に外部のスコープを参照する事ができる。外部スコープという言葉を覚えるように

//レキシカルスコープは二つの意味合いで使われる
//1.実行中のコードから見た外部スコープのこと
//2.どのようにしてスコープを決定するかの仕様のこと