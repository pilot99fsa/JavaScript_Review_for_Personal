document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate()
        }
    }

    const so = new ScrollObserver('.animate-title', cb)
    // so.destroy() // destoryメソッドが想定通り機能しているか確認、消しても良い
});


