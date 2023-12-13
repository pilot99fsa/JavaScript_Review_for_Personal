//bindとthis

//bindによって'this'や引数を固定した新しい関数を作成する。「bindによるthisの束縛」と呼ぶ

window.name = "John";

const person = {
    name: 'Tom',
    hello: function () {
        console.log('Hello' + this.name)
    }
}
person.hello();

const helloTom = person.hello.bind(person);

function fn(ref) {
    ref()
}

fn(helloTom);

function a(name) {
    console.log('hello' + name)
}
const b = a.bind(null, 'Tim')

b('Tom'); //この時点で引数を渡しても24行目のbindの方が優先されるので注意する。
// Tomを引数に渡しているが、コンソールにはHelloTimが表示される

// nullは何？
// 何を渡しても良い（例えば、空のオブジェクトなど{}）が、ここではnullを渡すことで、第一引数を使っていないことを明示的に表している。