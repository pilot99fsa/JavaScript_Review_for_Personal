// 復習: 即時関数は、定義と同時に実行する
const moduleA = (function () {

  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log('publicFn called: ' + privateVal++);
    // moduleAの中で定義されたpublicValだが、外部から変更しても、値は変わらない
    console.log('publicFn called: ' + publicVal);
    // moduleAの中に格納された時点で、プリミティブ型の値となるので、値自体がコピーされている
  }

  function privateFn() {

  }

  // returnは即時関数が実行された時の戻り値が定義されている
  return {
    // この{}の中身である、オブジェクトの部分がmoduleAに格納される
    publicFn,
    publicVal
  }
})();

// これからpublicFnを、moduleAを通して呼び出してやる

moduleA.publicFn()

/** 出力結果
 *  publicFn called:1
 */

//　関数を呼び出す度にカウントアップしていく。だがprivateValはオブジェクトの中に含まれる変数ではないので、外部から呼び出す事はできない

// だがpublicValは呼び出せる。確認してみよう
console.log(moduleA.publicVal)
console.log(moduleA.publicVal++)
console.log(moduleA.publicVal++) // しっかりとインクリメントしている
moduleA.publicFn() // 上の2行において、変数を呼び出してインクリメントしているが、関数スコープ外でインクリメントしても、moduleAの中に格納された時点で、プリミティブ型の値となっているので元の値には影響は及ばない

// これらの関数の実行文やconsole.logを即時関数であるmoduleBに格納してみよう

const moduleB = (function ({ publicFn: fn, publicVal: val }) { // 仮引数にも変数を渡してやる。渡ってくる変数はオブジェクトになるので、」分割代入してやる
  // 内部で格納した変数を使えるようになる

  // moduleA.publicFn()
  // moduleA.publicFn()
  // moduleA.publicFn()
  // console.log(moduleA.publicVal++)
  // console.log(moduleA.publicVal++)
  // moduleA.publicFn()

  // 仮引数にpublicValとpublicFnを渡しているので、moduleAの記述は省ける
  publicFn()
  publicFn()
  publicFn()
  fn() // 
  fn()
  fn()
  console.log(publicVal++)
  console.log(publicVal++)
  console.log(val++)
  console.log(val++)
  publicFn()
  fn()

})(moduleA) // 一般的に、即時関数で外部から変数を渡す場合は、実引数に変数を渡し。仮引数にも同じように渡してやる