document.addEventListener('DOMContentLoaded', function () {

    const cb = function (el, isIntersecting) {
        if (isIntersecting) {
            el.classList.add('inview')
        }
    }

    const so = new ScrollObserver('.cover-slide', cb)
    // so.destroy() // destoryメソッドが想定通り機能しているか確認、消しても良い
});


