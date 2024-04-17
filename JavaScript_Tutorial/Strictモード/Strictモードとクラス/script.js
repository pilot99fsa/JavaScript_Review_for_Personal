// classと、constructorの中は無条件でstrictモートとなっている

class c {
    constructor() {
        // constructorの中に関数を用意して、関数スコープの中でthisを参照しよう
        function fn() {
            console.log(this)
        }
        fn()
        // undifined
    }
    method() {
        // 同じくmethidrの中に関数を用意して、関数スコープの中でthisを参照しよう
        function fn() {
            console.log(this)
        }
        fn()
        // undifined
    }
}

// では外で関数を宣言すると?

function fn() {
    console.log(this)
}
fn()
// window
// constructorとmethodの外ではstrictモードにはならない
// もちろんファイルの先頭でstrictモードを宣言したらundefinedとなる

const c = new C()
c.method()
