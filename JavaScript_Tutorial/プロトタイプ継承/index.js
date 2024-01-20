function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function () {
    console.log('hello ' + this.name);
}

function Japanese(name, age, gender) {
    Person.call(this, name, age) // callで呼び出した関数内で使用されているthisへの参照先となる
    // call, apply, bindのときのみ例外的に第一引数に渡したオブジェクトがthisとして束縛される。

    // このJapaneseのコンストラクタだけにも、プロパティを追加することも可能である
    this.gender = gender;
}

Japanese.prototype = Object.create(Person.prototype)
// Personのprototypeは、Japaneseのprototypeの中に含まれている、という意味になる
// Object.createは、第1引数に渡したオブジェクトをプロトタイプに持つ空のオブジェクトを作成する

// 継承したメソッドは上書きする事が可能である
Japanese.prototype.hello = function () { // 6~8行目をコピーして貼り付け、先頭のPersonをJapaneseに書き換えた、これでPersonよりこの23~25行目のJapaneseのprototypeが優先される
    console.log('konnichiwa ' + this.name);
}

//このJapanaeseのprototypeは、PersonのProtottypeとして独立している。よってJapaneseのPrototypeのみにメソッドを追加することも可能である
// 23~25行目をコピーして貼り付ける
Japanese.prototype.bye = function () {
    console.log('sayounara ' + this.name);
}

const taro = new Japanese('Taro', 23); // 第3引数に'male'か'female'を追加してみよう、Chroomeの検証モードでgenderに格納されることが分かる
console.log(taro)

taro.hello()
taro.bye()