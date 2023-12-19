// prototypeとはオブジェクトに存在する特別なプロパティ
function Person(name, age) {
    this.name = name;
    this.age = age;

}

// オブジェクト名.prototype. に続けて登録したいメソッドを記述する
Person.prototype.hello = function () {
    console.log('hello ' + this.name)
}
//メソッドとして追加したいをprototypeオブジェクトに登録することができる

const bob = new Person('Bob', 18)
const tom = new Person('Tom', 21)
const sun = new Person('Sun', 17)

bob.hello() //コンソールにhello Bob
tom.hello() //コンソールにhello tom

//コンソールでbob、tom、sunのいずれかで検査すると、[prototype]がオブジェクトに追加されていることがわかる
