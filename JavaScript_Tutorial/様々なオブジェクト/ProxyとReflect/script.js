// ReflectとProxyを同時に使う場合

const targetObj = {
    a: 0,
    get value() {
        console.log(this)
        return this.b
    }
};

const handler = {
    get: function (target, prop, receiver) {
        console.log(`[get]: ${prop}`);
        if (target.hasOwnProperty(prop)) {
            return target[prop];
        } else {
            // このgetのトラップ内では、自分のオブジェクトに含まれないプロパティに対しては、returnで初期値に-1を与える
            return -1;
        }
    }
}



/** 出力結果
 *  -1
 */

// このコードをReflectで書き換えてみよう

const handler2 = {
    get: function (target, prop, receiver) {
        console.log(receiver)
        console.log(`[get]: ${prop}`);
        if (target.hasOwnProperty(prop)) {
            return Reflect.get(target, prop, receiver) // 第1引数にはターゲットとなるオブジェクトが格納される
        } else {
            return -1;
        }
    }
}

const pxy = new Proxy(targetObj, handler);
console.log(pxy.a)
console.log(pxy.value)
console.log(pxy.b)