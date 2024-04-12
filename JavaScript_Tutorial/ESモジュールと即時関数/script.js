// 復習: 即時関数は、定義と同時に実行する
const moduleA = (function () {

  console.log('IIFE called');

  let privateVal = 1;
  let publicVal = 10;

  function publicFn() {
    console.log('publicFn called: ' + privateVal++);
    // moduleAの中で定義されたpublicValだが、外部から変更しても、値は変わらない
    console.log('publicFn called: ' + publicVal);
    // moduleAの中に格納された時点で、プリミティブ型の値となる。
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