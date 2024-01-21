class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log('hello ' + this.name)
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
        super(name, age)
        this.gender = gender;
        // superを使う際にはルールがある。superのキーワードより前にthisを使ったプロパティを宣言すると、エラーとなる。試しに13行目と14行目を入れ替えてみよう、エラーとなる事がわかる
    }
    hello() {
        // superは親のコンストラクタを呼び出すこともできる。
        super.hello() // ここにsuper.hello()と記述すると、Personのhelloを呼び出せる
        console.log('konnnichiwa ' + this.name)
        // メソッドとして呼び出す場合は、thisを使ったプロパティがsuperより前に位置していても問題ない、試しに19行目と20行目を入れ替えて確認してみよう
    }
    // superというキーワードは基本的にはクラスを継承してあクラスのメソッド内かコンストラクター内で呼ぶ事ができる

    bye() {
        console.log('sayounara ' + this.name)
    }
}

const taro = new Japanese('Taro', 23, 'male')
console.log(taro)
taro.hello()

// 23行目でsuperの使われ方について説明したが、例外もあるのでそれを見ていく
const american = {
    hello() {
        console.log('hello ' + this.name)
    }
}

const bob = {
    name: 'Bob',
    hello() {
        // super.hello() superというキーワードはオブジェクトリテラルの中でも使用できる
        console.log('hello ' + this.name)

    }
}

// コンソールには当然だがhello bobと表示される
// ここでbobというオブジェクトにamericanというオブジェクトをプロトタイプとして追加してみよう
Object.setPrototypeOf(bob, american) // createではなくsetPrototypeを使う。
// 使い方としては、第1引数にオブジェクト、続いて第2引数に第1引数に格納したオブジェクトに継承させたいオブジェクトを格納する
// 今回はbobにamaeicanを継承させたいので第1引数にbob、第2引数にamerican
bob.hello()
// コンソールでbobと入力すると、americanのhelloオブジェクトがprototype継承できていることがわかる。
// この状態で43~45行目のbobのメソッドをコメントアウトしても、プロトタイプチェーンを遡ってamericanのメソッドで出力することができる