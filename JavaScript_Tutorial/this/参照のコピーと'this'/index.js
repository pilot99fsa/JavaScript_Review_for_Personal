// 参照がコピーされたthisの挙動を見ていく

window.name = 'John'

const person = {
    name: 'Tom',
    hello: function () {
        console.log('hello' + this.name)
        a()
    }
}

// const ref = person.hello; //refと定義した変数にHelloというメソッドを代入する
// ref() //コンソールにはhelloしか表示されていない
//3行目にwindow.name = 'John' と追加で記述する
// コンソールにhelloJohnと表示される。これがメソッドを他の変数にコピーした際に発生する挙動である

//一旦13~14行目のコードはコメントアウトして下記のコードを実行してコンソールを確認する
person.hello()

function a() {
    console.log('Hello' + this.name) //Helloの最初の'h'は意図的に大文字にしている
}

//コンソールには 
//helloTom
//HelloJohn
//このように表示される

//person.hello()を実行した段階ではthisは呼び出し元のnameを参照する
//続けて実行されるa()ではthisはウィンドウオブジェクトの方(window.name = 'John')を参照する

//関数の中でthisを選んだ場合はウィンドウオブジェクトを参照する


///////////////////////////////////////////////////////////


//さらにオブジェクトメソッドをperson2(personと同じ中身)のオブジェクトの中に定義する
window.secondName = 'Mike'

const person2 = {
    secondName: 'Jack',
    hello2: function () {
        console.log('hello' + this.secondName)
        b()

        //以下に再度オブジェクトを定義する
        const person2 = {
            // secondName(name2と名付けたかったがエラーが面倒いのでこの名前にした)をJackからJoshに変えて再度呼び出すとどうなるか？
            secondName: 'Josh',
            hello2: function () {
                console.log('hello' + this.secondName)
                b()
            }
        }
        person2.hello2()
    }
}
person2.hello2()
function b() {
    console.log('Hello' + this.secondName) //Helloの最初の'h'は意図的に大文字にしている
}

// 57行目のperson2.hello2()を実行するとコンソールに
// helloJackと表示される
// 続いてb()が実行されてHelloMikeと表示される
// さらにhelloJoshと表示され、再度HelloMIkeと表示される


//thisについてまとめ
//関数として実行した場合にはウインドウオブジェクトが呼び出される
//オブジェクトのメソッドとして実行した場合はその呼び出し元のオブジェクトが取得される

//thisが何を指しているのかわからなくなった時はchromeの検証ツールにてsourcesの項目で確認できる(Scopeの項目で見れる)