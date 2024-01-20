class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log('hello ' + this.name)
    }
}

// ここまではクラスの基本である
// ここからクラスの継承について記述していく

class Japanese extends Person {
    constructor(name, age, gender) {
        // Person.call(this, name, age); 
        // callを使う代わりに、14行目のextendsを使うことでPersonのクラスを継承する 
        super(name, age) // callではなく、superを使う
        this.gender = gender;
    }
    hello() {
        console.log('konnnichiwa ' + this.name)
    }
    // Japanese特有のメソッド
    bye() {
        console.log('sayounara ' + this.name)
    }
}

const taro = new Japanese('Taro', 23, 'male')
console.log(taro) // chromeの検証ツールで確認すると、コンストラクター関数で記述したように、オブジェクトが生成されている事がわかる
taro.bye()