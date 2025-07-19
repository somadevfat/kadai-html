/*『HTML』に 要素 を作成し、下記のいずれかの解答を 『insertAdjacentHTML』 メソッドを使って 『HTML』 に表示して下さい。
・「指定した要素の前にテキストaを追加」
・「指定した要素の後ろにテキストbを追加」
「javascript_mission_4_3_4.js」ファイルを作成して解答してください。*/

// 親要素を作成
const parent = document.createElement("div");
parent.textContent = "親です";
parent.id = "parent";

document.body.appendChild(parent);

parent.insertAdjacentHTML(`beforebegin`, `<p>a</p>`);
