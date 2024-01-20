// ↓これらのコードを、クラスに書き換えていこう

/**  function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function () {
    console.log('hello ' + this.name);
}
**/
// ↑これらのコードを、クラスに書き換えていこう

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name)
    }
}

/////////////////////////////////////////////

// 14~23行目で定義したPersonのclassをインスタンス化してオブジェクトを生成していこう

const bob = new Person('Bob', 23)
console.log(bob)
// chromeの検証ツールで確認するとオブジェクトが生成されている事がわかる
// あくまでJSでインスタンス化されたものはオブジェクトになる、という点には留意すること