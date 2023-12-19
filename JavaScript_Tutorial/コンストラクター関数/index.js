// コンストラクター関数とは新しくオブジェクトを生成するための雛形となる関数
// 定義の仕方は他の関数と変わらない
function Person(name, age) { // 普通の関数とコンストラクター関数を区別するために関数名の頭文字は大文字にするのが一般的である
    this.name = name;
    this.age = age;
}
//コンストラクター関数を呼び出すにはnewを使う
const bob = new Person('Bob', 18) //new演算子でオブジェクトを作成することをインスタンスと呼ぶ、newで作成されたオブジェクトをインスタンスと呼ぶ

// コンソールでBobと険悪すると、Person {name: 'Bob', age: 18}と表示され、オブジェクトが生成されていることがわかる

const tom = new Person('Tom', 21)
const sun = new Person('Sun', 17)

// このようにオブジェクトを大量に生成したいときには便利である