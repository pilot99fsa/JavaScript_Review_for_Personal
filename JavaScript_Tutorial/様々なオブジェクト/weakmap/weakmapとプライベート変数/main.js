// weakmapと共によく用いられるプライベート変数について

import { Person } from "./main.js";

const tim = new Person('Tim')
tim.hello()
console.log(tim._name) // 出力結果 Tim

// これをweakMapを用いて外部からは完全にアクセスできないようにしてみよう