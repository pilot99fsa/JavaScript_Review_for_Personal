class ScrollObserver {
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els)
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0,
            once: true
        };
        this.cb = cb
        this.options = Object.assign(defaultOptions, options)
        this.once = this.options.once
        this._init()
    }
    _init() {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(this) // うまくいかない時は確認すること
                    this.cb(entry.target, true)
                    if (this.once) {
                        observer.unobserve(entry.target); // アニメーションが実行された後は、監視を切る(監視の必要がない)
                    }
                } else {
                    this.cb(entry.target, false)
                }
            });
        };
        this.io = new IntersectionObserver(callback.bind(this), this.options);

        // IE11はIntersectionObserverに対応していないので、Polyfillをimportする必要がある
        // ただし、自動的にMS EDGEに切り替わるので事実上、必要はない 
        // @see https://github.com/GoogleChromeLabs/intersection-observer

        this.io.POLL_INTERVAl = 100; // 100m/sごとにスクロールの値を監視する
        this.els.forEach(el => this.io.observe(el));
    }

    destroy() {
        this.io.disconnect()
    }
}