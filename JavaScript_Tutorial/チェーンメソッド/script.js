// チェーンメソッドとは？
//メソッドチェーンは、あるオブジェクトに対してメソッドを.（ドット）で連結して繋げていくことです。前のメソッドで返ってきた値を次に繋げたメソッドが受け取って処理していきます。
// オブジェクト.メソッド1().メソッド2()...

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello(person) {
        console.log(`${this.name} says hello ${person.name}`);
        // 以下にretrunを追加していく
        return this; // Parsonのインスタンスを返している
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
        // 以下にretrunを追加していく
        return this; // Parsonのインスタンスを返している
    }

    shakeHands(person) {
        console.log(`${this.name} shake hands with ${person.name}.`);
        // 以下にretrunを追加していく
        return this; // Parsonのインスタンスを返している
    }

    bye(person) {
        console.log(`Goodbye, ${person.name}.`);
        // 以下にretrunを追加していく
        return this; // Parsonのインスタンスを返している
    }
    // return this; を追記することで、Parsonのインスタンスを返している
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

bob.hello(tim)
    // bob.introduce(); 
    // bob.shakeHands(tim);
    // bob.bye(tim);;
    .introduce()
    .shakeHands(tim)
    .bye(tim)

// これらをチェーンメソッドという形にしていく