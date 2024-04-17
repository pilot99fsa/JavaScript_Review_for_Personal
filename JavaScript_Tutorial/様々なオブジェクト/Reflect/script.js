// proxyについて参考になった記事 https://reffect.co.jp/html/javascript-proxy-how-to

class C {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
}

const pbj = new C(1, 2)
console.log(obj)

const obj2 = Reflect.construct(C, [1, 2])
console.log(oj2)