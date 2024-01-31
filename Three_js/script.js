// Three.jsを使うには、モジュールをいくつかインポートする必要がある
import * as THREE from "./build/three.module.js" // 「*」は全てという意味

let camera, scene, renderer; // Three.jsを使うには、この3つの要素は必ず必要となる

init()

function init() { //　初期化の関数
    // camera
    camera = new THREE.PerspectiveCamera( // Three.jsに用意されているカメラのオブジェクトの内の一つ、遠近感を表現できるカメラ
        40, // 第1引数、視野角を40度
        window.innerWidth / innerHeight, // 第2引数、アスペクト比。innerWidthをinnerHeightで割った値をアスペクト比としている(ただの割り算)
        1, // 第3引数、開始距離
        15000 // 第4引数、終了距離
    );

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

        scene.add(mesh) // scene.add()を忘れずに記述する。忘れがちなポイントの1つ　
    }

    // 平行光源
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.03)
    scene.add(dirLight)

    // renderer カメラに写したものをレンダリングする記述。これも必ず記述する必要がある

    // WebGL 1.0 コンテキストを使用してWebページ上で3Dグラフィックスを描画するためのrendererの一つ
    renderer = new THREE.WebGL1Renderer()

    // サイズを決める
    renderer.setSize(window.innerWidth, window.innerHeight); // 画面をフルに使って描画する(画面全体を使う)

    document.body.appendChild(renderer.domElement)
    renderer.render(scene, camera)
}