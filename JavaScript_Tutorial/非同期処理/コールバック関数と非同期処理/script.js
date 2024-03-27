// function a() {
//     setTimeout(function task() {
//         console.log('task1 done')
//     })
//     console.log('fn a done')
// }

// function b() {
//     console.log('fn b done')
// }

// a()

// b()

/** 出力結果
 *  fn a done
 *  fn b done
 *  task1 done
 */

// aを実行した際に、setTimeoutを呼んでいるため、タスクキューにtask1が追加される。コールスタックが空になってグローバルコンテキストが終了しないと、task1は実行されないため、最後にtask1が実行される

//上記のコードを、task1の後に関数bが実行されるにはどうすれば良いだろうか？関数名を変えただけの同じコードを用意しよう

// 引数を渡してあげる
function c(d) {
    setTimeout(function task() {
        console.log('task2 done')
        // setTimeoutの中で関数dを実行する
        d()
    })
    console.log('fn c done')
}

function d() {
    console.log('fn d done')
}

c(d)

// d() コメントアウトもしくは削除

/** 出力結果 (確認の際には1~14行目をコメントアウトしよう)
 *  fn c done
 *  task2 done
 *  fn d done
 */

// 関数dが実行されているレキシカルスコープに、関数dの関数宣言が存在しているため、関数cに引数としてdを渡さなくても同じ出力結果となる


// グローバルコンテキストが生成され、コーススタックに関数cが積まれるまでの流れは同じである。
// ここで非同期APIを通じてsetTImeoutを渡す際に、関数dをtask2の中で実行される関数として渡してあげる。