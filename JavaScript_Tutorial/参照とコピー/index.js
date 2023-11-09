// let a = {
//     prop: "Hello"
// };
// console.log(a)

// let b = a;
// // b.prop = "bye";
// console.log(b)

let a = "Hello";
let b = a; //この時点ではまだコンソールに Hello Helloと表示される
b = "bye" // bに"bye"を代入するとコンソールにHello byeと表示される
console.log(a, b);
//

//
let c = {
    prop: "Hello"
}
let d = c; // この段階ではコンソールで確認するとcとdも同じobjectを保持している
d.prop = "bye" // コンソールで確認すると、cもdもobjectの中のpropの値が"bye"に変わっている
// これはbもcも同じオブジェクトへの参照を保持しているために起こる現象である
// なので片方を変更すると、もう片方も変わってしまう
console.log(c, d);
//

//
//オブジェクトへの再代入
let e = {
    prop: "hey"
}

let f = e;
f = {} //このように書くと、fは新しいオブジェクトへの参照を保持するようになる
console.log(e, f);

//
// まとめ
//
// プリミティブ値のコピー
// 参照先の値がコピーされる
//
// オブジェクトのコピー
// オブジェクトへの参照がコピーされる