function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function () {
    console.log('hello' + this.name)
}

// このPersonというオブジェクトを利用してJapaneseというコントラクターを作りたいと思った時

/**
 * 
 * function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function () {
    console.log('hello' + this.name)
}
 */

// 上記のように書くのは非常に冗長である

function Japanese(name, age) {
    Person.call(this, name, age) // callメソッドで

}

Japanese.prototype = Object.create(Person.prototype)
// このように書くと、Personのprototypeが、JapaneseのPrototypeに含まれる

// Object.creeteは第一引数に渡したオブジェクトをプロトタイプに持つ空のオブジェクトを作成する

// 検証ツールでJapanese.prototypeの中身を確認してみよう

const taro = new Japanese('Taro', 23)
console.log(taro)

taro.hello()