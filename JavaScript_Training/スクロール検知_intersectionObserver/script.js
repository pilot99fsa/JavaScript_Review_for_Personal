// 基本的な使い方

const child = document.querySelector('.child') // 監視したい要素を取得して変数に格納する

const callBack = function (entries, observe) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('inview') // 要素が画面内に映るとinviewと出力
            // では一度画面に表示されたタイミングで監視を辞めたい場合は？(以後は監視しないようにする)
            // observe.unobserve(entry.target)
            // これで監視が解除される

            // entry.targetに対して、画面に入ったときはinviewというクラスを付与する
            entry.target.classList.add('inview')
        } else {
            console.log("out view") // 要素が画面外に出るとout view
            // 顔面内に入った時に付与されたクラスを削除する
            entry.target.classList.remove('inview')
        }
    })
    // alert('intersecting') // .childが画面内に表示されると、アラートが表示される

    // よく使うオプションについて
    const options = {
        root: null, // 監視するベースとなる要素を指定します。 初期値はビューポート（表示されている画面領域のこと）である。
        // rootは実務では変更することはあまりない
        rootMargin: "-300px 0px -300px 0px", // 指定しなければ初期値は0。marginと同じで上右下左の順に設定できる。
        threshold: 0 // 初期値は0,交差の閾値を指定するためのである。交差を検出するために要素がビューポート内にどの程度入る必要があるかを定義する。


    }
}
const io = new IntersectionObserver(callBack, options) // コールバック関数を渡す。IntersectionObserver コンストラクタは、交差を監視する新しい IntersectionObserver オブジェクトを作成する
// 第2引数はオプション

io.observe(child) // ioに監視したい対象を登録する
