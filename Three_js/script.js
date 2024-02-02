// Three.jsを使うには、モジュールをいくつかインポートする必要がある
import * as THREE from "./build/three.module.js" // 「*」は全てという意味
import { FlyControls } from "./jsm/controls/FlyControls.js"
import { Lensflare, LensflareElement } from "./jsm/objects/Lensflare.js"

let camera, scene, renderer; // Three.jsを使うには、この3つの要素は必ず必要となる
let controls

const clock = new THREE.Clock()

init()

function init() { //　初期化の関数
    // camera
    camera = new THREE.PerspectiveCamera( // Three.jsに用意されているカメラのオブジェクトの内の一つ、遠近感を表現できるカメラ
        40, // 第1引数、視野角を40度
        window.innerWidth / window.innerHeight, // 第2引数、アスペクト比。innerWidthをinnerHeightで割った値をアスペクト比としている(ただの割り算)
        1, // 第3引数、開始距離
        15000 // 第4引数、終了距離
    );
    // だがこのままではカメラの位置が物体と重なって何も見えない
    camera.position.z = 500;


    // scene
    scene = new THREE.Scene()

    // geometry
    // ジオメトリを作成、ここで形状を指定していく

    const size = 250; // ボックスのサイズを宣言しておく
    const geometry = new THREE.BoxGeometry(size, size, size) // 1~3引数(高さ、幅、奥行き)にサイズをしている。一辺がsize=250の立方体のジオメトリ

    // material
    // 材質、つまり色などを指定していく
    const material = new THREE.MeshPhongMaterial({
        color: 0xffffff, // 第1引数、色。16進数のカラーコードで指定できる
        specular: 0xffffff, // 第2引数、反射の色を指定できる。
        shininess: 50, //第3引数、輝度
        // shading: THREE.SmoothShading
    })
    /**
     *  作った(宣言した)ジオメトリとマテリアルを使うには、メッシュと呼ばれる操作が必要になってくる 
     *  今回はボックスを2500個作るので、出来上がったタイミングでメッシュを行う
    */

    // for文で記述する

    // 変数 i を初期化し、その初期値を0とする。
    // i < 2500; ループの条件。i の値が 2500 未満の場合にループが続きます。
    // i++: これはインクリメント文。ループの各反復後に i の値を 1 増やす。これは i = i + 1 と書くことと同等である。iを1ずつ増やしながら処理を反復する
    for (let i = 0; i < 2500; i++) { // 0から2499までの範囲で、合計2500回の繰り返しを行う。for (let i = 0; i < n; i++) { 処理内容 }

        const mesh = new THREE.Mesh(geometry, material); // この時点ではMeshがどこに位置しているのか指定していない

        // ランダムに位置を決めていく

        mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);  // Math.randomは,  Math オブジェクトのメソッドの一つで、0以上1未満の擬似乱数を生成する
        mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
        mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);
        // これで3D空間に2500個のボックスをランダムな位置に生成できる

        // 回転度合いをランダムにする
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        mesh.rotation.z = Math.random() * Math.PI;

        scene.add(mesh) // scene.add()を忘れずに記述する。忘れがちなポイントの1つ　
    }

    // 平行光源
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.3)
    scene.add(dirLight)

    // レンズフレア(中央に光ってるオレンジっぽい光のやつ)
    const textureLoader = new THREE.TextureLoader();
    const textureFlare = textureLoader.load(" ./textures/LensFlare.png")


    addLight(0.08, 0.3, 0.9, 0, 0, -1000)

    // ポイント光源を追加する
    function addLight(h, s, l, x, y, z) { // 自作の関数、引数がそれぞれhは色相、sは彩度、lは輝度、x,y,zは座標の意味とする
        const light = new THREE.PointLight(0xffffff, 1.5, 2000);
        light.color.setHSL(h, s, l);
        light.position.set(x, y, z)
        scene.add(light)
        // setHSL は Three.js ライブラリで使われるメソッドで、HSL (Hue, Saturation, Lightness) カラーモデルを使用して光源やマテリアルの色を指定するためのメソッドです。

        const lensflare = new Lensflare();
        lensflare.addElement(
            new LensflareElement(textureFlare, 700, 0, light.color)
        );

        scene.add(lensflare);

    }



    // renderer カメラに写したものをレンダリングする記述。これも必ず記述する必要がある

    // WebGL 1.0 コンテキストを使用してWebページ上で3Dグラフィックスを描画するためのrendererの一つ
    renderer = new THREE.WebGLRenderer()
    // サイズを決める
    renderer.setSize(window.innerWidth, window.innerHeight); // 画面をフルに使って描画する(画面全体を使う)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    document.body.appendChild(renderer.domElement)

    // FlyCntorols マウスを操作するやつ
    controls = new FlyControls(camera, renderer.domElement)

    // マウスを操作した際の画面の動きを調整する

    // クリック時の前進後退スピードを設定
    controls.movementSpeed = 2500;
    // マウス追従の動きの設定
    controls.rollSpeed = Math.PI / 20;

    // animate関数
    animate();
}

//FlyContorolsを使用する際にはanimate関数が必須
function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta(); //経過した時間を取得
    controls.update(delta);
    renderer.render(scene, camera);
}