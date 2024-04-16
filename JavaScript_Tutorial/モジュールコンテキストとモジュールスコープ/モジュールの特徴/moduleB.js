import './moduleA.js'
import './moduleA.js'

console.log("mpduleB.js")
// htmlで本ファイルを2回連続で読み込んでいるが、上のconsole.log()は一度しか呼ばれていない
// moduleは一度読み込まれると、再度読み込まれない。同様のことは、importを使った際にも発生する
// 一番上に2回もimportしているが、ブラウザのコンソールには1度しかconsole.log()は表示されていない


// const h1 = document.querySelector('h1')
// const text = h1.textContent

// console.log(text)


