// setter/getterとstatic

// [復習]オブジェクトの各プロパティにはディスクリプタというものが存在する、ディスクリプタの設定値によってそのプロパティの取りうる値が変わってくる

// ディスクリプタには、イプションとしてsetとgetを設定できる
function Person1(name, age) { // コンストラクターが定義されている状態から始める
    this._name = name; // ここでnameの前に_(アンダースコア)がついているが、アンダースコアはプライベートプロパティであることを表している。
    this._age = age; // しかし、JavaScript自身がプライベートなメソッドやプロパティをサポートしているという訳ではなく、あくまで開発者間の了解の範囲内でのプライベートという意味である.
    // ES2020から先頭に#をつけることでプライベートプロパティを表せるようになっている
}

Person1.hello = function () {
    console.log('hello')
}
Person1.hello()

Object.defineProperty(Person1.prototype, 'name', {
    get: function () {
        return this._name; // nameプロパティのgetter関数を定義する。name プロパティが参照された際に呼び出される。
    },
    set: function (val) {
        this._name = val //nameプロパティの setter関数を定義する。この関数は、name プロパティに値が代入された際に呼び出される。
    }
}) // このようなディスクリプターで設定されるgetとsetのメソッドをしばし「ゲッターセッター」と呼ぶ

// これをどのように使うか？
// まずはインスタンス化する
const p1 = new Person1('Bob', 23) // 適当に引数を渡して初期化する

// p1.name = 'Tom'
// console.log(p1.name)


// getterとsetterを用いることで、プロパティへのアクセスをカプセル化し、外部から直接プロパティにアクセスできないようにすることができます。これにより、プロパティの値を読み書きする際にバリデーションやロジックを追加したり、セキュリティを強化したりすることが可能となる
// 実務においては、特にオブジェクトの状態を制御したり、外部からの直接アクセスを防ぐ必要がある場合に、getterとsetterが頻繁に使用される



// ところで、definePropertyで定義するのは非常に面倒くさい。ここからは簡略化して記述していく

// ES6(ES2015)からは簡略化して記述できるようになった
class Person2 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        console.log()
        return this._name
    }
    set name(val) {
        this._name = val
    }
    // 追記:static
    static hello() {
        console.log('hello')
        // console.log('hello' + this) thisは使えない。クラスの表記自体が出力されてしまう
    }
}
// これもgetterとsetterである

const p2 = new Person2('Bob', 29)
// コンソールでp2.constructor === Person2　と入力し、等価性を確認してみよう、tureと返ってくる
Person2.hello()