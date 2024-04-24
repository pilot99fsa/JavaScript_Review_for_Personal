// weakmapと共によく用いられるプライベート変数について

import { Person } from "./main.js";

const tim = new Person('Tim')
const bob = new Person('Bob')
tim.hello()
console.log(tim._name) // 出力結果 Tim
bob.hello()

// これをweakMapを用いて外部からは完全にアクセスできないようにしてみよう