//オブジェクト(Object)とは名前(プロパティあるいはキー)と値(バリュー)をペアで管理する入れ物のようなもの

// 次のオブジェクトはプロパティを持たない空のオブジェクト
const emptyObj = {};
//

//
//オブジェクトを作成するにはconstもしくはletでオブジェクト名を宣言し、鉤括弧の中に名前(プロパティあるいはキー)と値(バリュー)を:(コロン)で区切って記述する
const objTutrial = { //objはオブジェクト名
    // 名前 : 値
    "key": "value"
};
//

//
//オブジェクトは次のような形で格納できる
//名前:値...「プロパティ」と呼ぶ
//名前:関数...「メソッド」と呼ぶ
//名前:オブジェクト
let objectKind = {
    property1: "Hello", // 名前: 値...(String型の場合は""(ダブルクオーテーション)もしくは''(シングルクオーテーション)で囲む、数値の場合はそのままで良い
    property2: function () {
    }, // 名前: 関数...オブジェクトに関数を格納する場合は関数名をつけないのが一般的である、これを「無名関数」と呼ぶ
    property3: {
        d: "Bye"
    } // 名前: オブジェクト
};
//

//
//宣言したオブジェクトのプロパティへのアクセス方法

const yourName = {
    name: 'John'
}
//ドット記法
yourName.name

//ブラケット記法
yourName['name']

//
//３つの異なる種類のオブジェクトへのアクセスの具体例
const obj = {
    prop1: 'value1', //プロパティ
    prop2: 'value2', //同じくプロパティ
    prop3: function () {
        console.log('value3')
    }, //メソッド
    prop4: {
        prop5: 'value5',
    }, //オブジェクトの中にオブジェクト(プロパティ)を格納
    prop6: {
        prop7: function () {
            console.log('value7')
        }
    },//オブジェクトの中にオブジェクト(メソッド)を格納
}

//上記のオブジェクトに格納された４つのコードをconsole.logで実行する
console.log(obj.prop1); //プロパティの場合
console.log(obj.prop2);
obj.prop3(); //関数(メソッド)の場合
console.log(obj.prop4.prop5) //オブジェクトの中にオブジェクトが格納されている場合は、オブジェクト名に.(ドット)を入れて中のオブジェクト名を続けて記述する
obj.prop6.prop7() //オブジェクトの中のオブジェクトの中身がメソッドの場合
//
//オブジェクトを宣言する際に設定した値は後から変えることができる。
obj.prop8 = 'value8';
console.log(obj['prop8']) //ブラケット記法でアクセス
//
//ひとつずつアクセスするのが面倒ならオブジェクト名そのものを入力するとオブジェクトの中身を全て展開できる
console.log(obj)