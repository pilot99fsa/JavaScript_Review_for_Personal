// javascriptエンジンによって用意され、関数内で使える
// thisは呼び出し元のオブジェクトへの参照を保持するキーワードである

const person = { //オブジェクトの外側にある変数名がレキシカルスコープとなる。
    name: 'Tom',
    hello: function () {
        console.log('hello' + this.name) //this.nameはperson.nameと置き換えても同じ結果になる
    }
}

person.hello()
//コンソールにはhelloTomと出力される

//実行コンテキストによってthisの参照先は変わってくる
//そしてthisは呼び出し元のオブジェクトへの参照を保持するということがポイントである