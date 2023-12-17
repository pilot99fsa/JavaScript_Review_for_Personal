// 無名関数ではthisという値がセットされるが、アロー関数ではセットされない。挙動の違いを見ていこう

window.name = 'John'

const person1 = {
    name: 'Tom',
    hello1: function () {
        console.log('Hello' + this.name)
    }
}
person1.hello1()
//当然だがコンソールにはHello Tomと表示される

// 名前を変えただけでほぼ同じ内容のperson2オブジェクトを作り、hello2の関数をアロー関数に置き換える
const person2 = {
    name: 'Tom',
    hello2: () => {
        console.log('Hello' + this.name)
    }
}
person2.hello2()

//コンソールにはHello Johnと表示される
// アロー関数はthisを取らない
// レキシカルスコープに探しに行き、windowオブジェクトを見つけた為、Johnと表示される

const a = () => console.log('Bye' + this.name) // コンソールにはByeJoohn
// この関数のレキシカルスコープからのスコープはグローバルスコープとなる。
// グローバルスコープのthisはwindowオブジェクトになるので、3行目のwindow.name = 'John'が適用される

const person3 = {
    name: 'Tom',
    hello3() {
        console.log('Hello' + this.name) //コンソールにはHelloTom
        a() //実行すると27行目のコードが実行される。
        const b = () => console.log('Bye' + this.name)
        b() //この場合はByeTomと表示される
    }
}
person3.hello3()

function c() {
    console.log('Hello' + this.name)
    a()
}
c() //コンソールにはByeJohnと表示される
