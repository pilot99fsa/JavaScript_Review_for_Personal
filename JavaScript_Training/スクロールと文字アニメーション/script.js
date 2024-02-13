document.addEventListener('DOMContentLoaded', function () {

    const els = document.querySelectorAll('.animate-title');
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ta = new TextAnimation(entry.target); // 
                ta.animate();
                observer.unobserve(entry.target); // アニメーションが実行された後は、監視を切る(監視の必要がない)
            } else {
            }
        });
    };
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
});
