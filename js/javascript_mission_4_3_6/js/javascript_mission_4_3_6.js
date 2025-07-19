/*
『HTML』に 「親」「子」 関係の要素を作成し、下記の解答を 『insertBefore』 メソッドを使って 『HTML』 に表示して下さい。
・「firstChild：指定した要素の最初の子要素としてテキストaを追加」
・「lastChild：指定した要素の最後の子要素としてテキストbを追加」
「javascript_mission_4_3_6.js」ファイルを作成して解答してください。
*/

// 親要素を作成
const parent = document.createElement("div");
parent.textContent = "親です";
parent.id = "parent";

// 子要素を作成
const child = document.createElement("div");
child.textContent = "子です";

//text

document.body.appendChild(parent);
parent.appendChild(child);

let textNode = document.createTextNode("a");
parent.insertBefore(textNode, parent.firstChild);
