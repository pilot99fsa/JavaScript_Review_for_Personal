import { publicVal, publicFn } from "./moduleA.js";

publicFn()

// これをダイナミックインポートの方法で書き直すと？

import("./moduleA.js").then(function (modeles) {
    console.log(modeles)
    modeles.publicFn()
    /**　出力結果
     *   publicFn called
     */
})

// これらのコードをAsync/Awaitを使って書くこともできる

async function fn() {
    const modules = await import("./moduleA.js")
    modules.publicFn()
}
fn()