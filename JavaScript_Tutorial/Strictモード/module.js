function moduleFn() {
    b = 0
}
moduleFn()
console.log(b)

// 上記のコードはscript.jsの内容と同じだが、typeのmoduleを設定していると、無条件でstrictモードが適用される
// コンソールを見るとエラーになっているのが分かる

