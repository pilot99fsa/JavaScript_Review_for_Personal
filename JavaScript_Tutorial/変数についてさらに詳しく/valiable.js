/**
 * 変数戦についてはvar,let,constの三種類が存在する
 * varは再宣言、再代入できる
 * letは際宣言は不可能だが、再代入は可能
 * constは両方とも不可
 *
 * varは関数スコープでlet,constはブロックスコープ
 * varはホイスティングでundefineに初期化される
 */

let a = 0;
// let a = 0; //再宣言不可なのでエラー

var b = 0;
var b = 0; //エラーは起きない

let c = 0;
c = 1; //再代入可なのでエラーは起きない

const d = 0;
d = 1; //エラー

{
    let e = 0;
    var f = 0;
}

console.log(h);
let g = 0;
var h = 0;

//繰り返しになるがvarは非推奨である