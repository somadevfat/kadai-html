/*『HTML』に 要素 を作成し、下記のいずれかの解答を 『insertAdjacentHTML』 メソッドを使って 『HTML』 に表示して下さい。

・「指定した要素の最初の子要素としてテキストcを追加」
・「指定した要素の最後の子要素としてテキストdを追加」

「javascript_mission_4_3_5.js」ファイルを作成して解答してください。*/

// 親要素を作成
const parent = document.createElement("div");
parent.textContent = "親です";
parent.id = "parent";

document.body.appendChild(parent);

parent.insertAdjacentHTML(`beforeend`, `<p>a</p>`);
