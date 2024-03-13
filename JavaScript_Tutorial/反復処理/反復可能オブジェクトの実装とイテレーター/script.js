
const items = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function () {
    console.log(this)
    // thisの中にオブジェクトへの参照が含まれているので確認しよう
    // このthisを使って各プロパティのキーを取得していこう
    const keys = Object.keys(this)
    // プロパティが配列になってkeysという変数に格納される
    console.log(keys)
    // 本当に格納されているかコンソールで確認しよう、console.log()は大切。確認を怠ることなかれ。
    // プロパティが配列となって格納されている事が確認できる

    // ここから、keysの値を一つずつ取得していきたい。まずはそのための変数の値を定義する
    let i = 0;
    // どんどん１+してkeysからキー情報を取得していくために、まずは変数定義と同時に0に初期化する
    let _this = this
    return {
        next() {
            // nextメソッドが呼ばれた際に、キーを1ずつプラスしていき、keysからプロパティを取得したい
            let key = keys[i++]
            // itemsのキー情報（prop1~3）を順番に格納している。
            // これで次にnextメソッドが呼ばれた際には既に+1されたものになっているので、keysから次のプロパティが取得される
            console.log(_this)
            return {
                value: [key, _this[key]],
                //  注意すべきは、this.keyや_this['key']とした場合にはitemsにはkeyという名前のプロパティは存在しないので、undefinedとなる。
                done: i > keys.length
                // keysの要素数より大きくなったら終了させる(trueとなる)
            }
        }
    }
}

// const items = Object.entries(obj)
for (let item of items) {
    console.log(item)
}

// Chat-GPTにコメントアウトのメモの内容が正しいか訊いてみた

/**
* YOU
命令：以下の情報を参考に、このJavaScriptのコードに添えられたコメントアウトの文章の内容が正しいか精査して下さい。コメントアウトは勉強用のメモとして残しています。
使用言語：JavaScript
コード：
```

＊ Chat-GPT

コメントアウトの内容を精査します。

1. console.log(this)
コメントの内容: "thisの中にオブジェクトへの参照が含まれているので確認しよう"
コメントの精査: 正しい。this はオブジェクトへの参照を表します。

2. const keys = Object.keys(this)
コメントの内容: "プロパティが配列になってkeysという変数に格納される"
コメントの精査: 正しい。Object.keys() メソッドは、オブジェクトのプロパティ名を配列として取得します。

3.console.log(keys)
コメントの内容: "本当に格納されているかコンソールで確認しよう、console.log()は大切。確認を怠ることなかれ。"
コメントの精査: 正しい。console.log() を使って、変数の中身を確認することはデバッグの重要な手段です。

4. let i = 0;
コメントの内容: "どんどん１+してkeysからキー情報を取得していくために、まずは変数定義と同時に0に初期化する"
コメントの精査: 正しい。i を 0 で初期化しています。

5. let _this = this
コメントの内容: "これで次にnextメソッドが呼ばれた際には既に+1されたものになっているので、keysから次のプロパティが取得される"
コメントの精査: 正しい。_this を使って次のプロパティを取得します。

6. let key = keys[i++]
コメントの内容: "itemsのキー情報（prop1~3）を順番に格納している。これで次にnextメソッドが呼ばれた際には既に+1されたものになっているので、keysから次のプロパティが取得される"
コメントの精査: 正しい。keys から次のプロパティ名を取得し、i をインクリメントします。

7. console.log(_this)
コメントの内容: "注意すべきは、this.keyや_this['key']とした場合にはitemsにはkeyという名前のプロパティは存在しないので、undefinedとなる。"
コメントの精査: 正しい。_this[key] はプロパティ名が key のプロパティの値を取得します。

8. done: i > keys.length
コメントの内容: "keysの要素数より大きくなったら終了させる(trueとなる)"
コメントの精査: 正しい。done フラグは、すべてのプロパティを反復処理した後に true になります。

コメントアウトの内容は全て正しいです。

*/
