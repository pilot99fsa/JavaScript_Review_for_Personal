// weakmapと共によく用いられるプライベート変数について

// プライベート変数へのアクセスを完全にシャットダウンしてみよう
const wm = new WeakMap() // 1. weakmapを定義する


export class Person {
    constructor(name) {
        // (復習) アンダースコア( _ ) から始まるプロパティはプライベート変数(プロパティ)と呼ぶ
        // 「外部から使わないように」ということを明示的にする為に開発現場においては用いられる(_をつけたから外部から使えなくなる機能ではないことに気をつける)
        this._name = name
        wm.set(this, {
            name
        })
    }

    hello() {
        console.log(`hello ${this._name}`)
    }
}