// proxyについて参考になった記事 https://reffect.co.jp/html/javascript-proxy-how-to

class C {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
}

const obj = new C(1, 2)
console.log(obj)

const obj2 = Reflect.construct(C, [1, 2])
console.log(obj2)

console.log('a' in obj1)
console.log(Reflect.has(obj1, 'b'))

Object.defineProperty
Reflect.defineProperty

if (Reflect.defineProperty) {
    // hogehoge
} else {
    // hogehoge
}

const bob = {
    nema: 'Bob',
    _hello: function () {
        console.log(`hello ${this.name}`)
    }
}

const tom = {
    name: 'tom',
    _hello: function () {
        console.log(`hello ${this.name}`)
    },
    get hello() {
        return this._hello()
    }
}
tom.hello
// Reflect.get(tom, 'hello', receiver)
Reflect.get(tom, 'hello', bob)
Reflect.get(tom, 'hello')