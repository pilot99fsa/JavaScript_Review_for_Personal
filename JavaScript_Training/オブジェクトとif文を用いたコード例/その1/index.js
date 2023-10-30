// // 年齢に基づく情報を持つオブジェクト
// const userInformation = {
//     name: "John",
//     age: 25,
// };

// // 年齢による条件分岐
// if (userInformation.age < 18) {
//     console.log(`${userInformation.name} さんは未成年です。`);
// } else if (userInformation.age >= 18 && userInformation.age < 65) {
//     console.log(`${userInformation.name} さんは成人で、特別な制限はありません。`);
// } else {
//     console.log(`${userInformation.name} さんは高齢者で、特別なプロモーションがあります。`);
// }

const userInformation = {
    name: 'John',
    age: 28, //この数字を変えることで生成される文章が分岐される
};

let message;

if (userInformation.age < 18) {
    message = `${userInformation.name} さんは未成年です。`;
} else if (userInformation.age >= 18 && userInformation.age < 65) {
    message = `${userInformation.name} さんは成人で、特別な制限はありません。`;
} else {
    message = `${userInformation.name} さんは高齢者で、特別なプロモーションがあります。`;
}

// 結果をHTMLに表示
const resultElement = document.createElement('p');
resultElement.textContent = message;
document.body.appendChild(resultElement);