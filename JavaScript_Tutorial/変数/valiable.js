//変数(valiable)...繰り返し使う値を格納する入れ物のようなもの
//変数を定義することを「変数を宣言する」、あるいは変数宣言と呼ぶ


//料理をする時に、キッチンには肉や魚や小麦粉といった食材を用意するが、それらの食材は食材は当然ながら最初は、箱、パック、包装容器といった何かしらの入れ物に入っていることは想像できる。
//それらの入れ物がないとキッチンが汚れたりぐちゃぐちゃになって非常に面倒なことが容易に想像できる。変数とはそういった入れ物のようなものである。
//しまぶー先生から引用 https://youtu.be/4NPrR_szrUM?si=c3XwCpmGsxAd7Drm

//まずは試しに何か変数を宣言をする

const fooWidth = document.getElementById("foo").offsetWidth;

//これは"fooWidth"という入れ物に"document.getElementById("foo").offsetWidth"という値を入れたものと考えたら良い
//

//
//変数宣言を行うとき最初には、初めに次の３つのキーワードのいずれかを用いる

// var let const

let a = 0;

const b = 1;

var c = 2; //varは現在非推奨

//これらのキーワードを用いることで変数の宣言ができる

console.log(a);
console.log(b);


