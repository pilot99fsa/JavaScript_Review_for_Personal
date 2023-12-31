// 山陽とコピーの復習
function fn(a) {
    //何か関数
}
let b = 0;
fn(b);

// これは
let a = b
// と同じである

////////////////////////////////////////

let c = 0;

function fn2(arg1) { // 1. まず21行目で引数にcが入っているので、arg1の値にはc、つまり0が入る
    arg1 = 1; // 2. そのarg1の値を1に変更している
    console.log(c, arg1) //3. コンソールには0と1が表示される
    // console.log(c, arg1)の丸括弧の中のcはレキシカルスコープに存在するため、14行目の値を参照している
}

let arg1 = c;
arg1 = 1
console.log(c, arg1) //これと同じ結果である

fn2(c)

///////////////////////////////////////////////

let d = {
    prop: 0
}

function fn3(arg2) {
    arg2.prop = 1
    console.log(d, arg2) //コンソールで確認すると、オブジェクトdの値も変更されている
}
fn3(d)

// オブジェクトを渡すときはオブジェクトへの参照がコピーされていると考えれば良い

