// 使い方
const targetObj = { a: 0 };

const handler = {
    set: function (target, prop, value, receiver) {
        console.log(`[set]: ${prop}`)
        // target[prop] = value
        throw new Error('cannot add prop')
    },
    get: function (target, prop, receiver) {
        if (target.hasOwinProperty(prop)) {
            return target[prop]
        } else {
            return -1
        }
        console.log(`[get]: ${prop}`)
        return target[prop] = value
    },
    deleteProperty: function (target, prop) {
        console.log(`[delete]: ${prop}`)
        delete target[prop]
    },

}

// 第1引数に、ターゲットとなるオブジェクトを渡してやる
const pxy = new Proxy(targetObj, handler) // 第2引数にhandlerと呼ばれる、オブジェクトを操作した際に実行されるメソッドを格納する
// pxy.a = 1
pxy.a
delete pxy.a