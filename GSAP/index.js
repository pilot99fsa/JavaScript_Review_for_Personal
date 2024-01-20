document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX; // clientXは、マウスのX座標の動きを取得するプロパティ
    const mouseY = e.clientY; // clientYは、マウスのY座標の動きを取得するプロパティ

    // 文字の後ろのアニメーション
    gsap.to(".circle", { // 第1引数のcircleは14~16行目のクラス
        x: mouseX,
        y: mouseY,
        stagger: -0.1
    });
    //カーソルのアニメーション
    gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
    })
});