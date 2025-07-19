/*
『HTML』に 「親」「子」「孫」 関係の要素を作成し、下記のいずれかの解答を 『HTML』 に表示して下さい。
・「特定ノードの子ノードの先頭にテキストaとして追加」
・「特定ノードの子ノードの末尾にテキストbとして追加」
「javascript_mission_4_3_2.js」ファイルを作成して解答してください。
*/
// 親要素を作成
const parent = document.createElement("div");
parent.textContent = "親です";
parent.id = "parent";

// 子要素を作成
const child = document.createElement("div");
child.textContent = "子です";

// 孫要素を作成
const grandchild = document.createElement("div");
grandchild.textContent = "孫です";

document.body.appendChild(parent);
parent.appendChild(child);
child.appendChild(grandchild);

//テキストノード先頭に追加
let textNode = document.createTextNode("a");
child.prepend(textNode);
