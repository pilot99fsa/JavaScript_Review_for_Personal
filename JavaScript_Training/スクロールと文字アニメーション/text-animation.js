// テキストをアニメーションさせるためのクラスを定義していく

class TextAnimation {
    constructor(el) {
        this.DOM = {}; // 空のオブジェクトを適宜する

        // if (el instanceof HTMLElement) { // 取得したelがDOMで渡ってきた場合とselectorで渡ってきた場合のどちらでも取得できるように対応する
        //     // elがセレクタの文字列の場合
        //     this.DOM.el = el
        // } else {
        //     // elがDOMの場合
        //     this.DOM.el = document.querySelector(el)
        // }

        // 上記のif文は少し冗長なので三項演算子を使って簡略化していく
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el)

        // 今回の実装ではそもそもこのような条件分岐は必要ない
        // "entry.targetというDOMそのもの"が渡ってきたと想定してこのような記述になっている
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
    }

    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i) => {
            // TweenMax.toでも同じ意味。バージョン３以降はgsapの使用を推奨している。
            gsap.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0 },
                y: '0%',
                opacity: 1
            });
        });
    }
}