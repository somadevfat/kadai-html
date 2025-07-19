/*
『HTML』に 「親」「子」「孫」 関係の要素を作成し、その要素をそれぞれ 「親ノードの取得」「子ノードの取得」 でそれぞれを特定して『Console(コンソール)』に出力しましょう。
「javascript_mission_4_2_1.js」ファイルを作成して解答してください。
*/
// 親要素を作成
const parent = document.createElement("div");
parent.textContent = "親";
parent.id = "parent";

// 子要素を作成
const child = document.createElement("div");
child.textContent = "子";

// 孫要素を作成
const grandchild = document.createElement("div");
grandchild.textContent = "孫";

document.body.appendChild(parent);
parent.appendChild(child);
child.appendChild(grandchild);

// 親ノードを取得
const parentNode = document.getElementById("parent");
console.log("親ノード:", parentNode);

// 子ノード（親の子）を取得
const childNode = parentNode.firstElementChild;
console.log("子ノード:", childNode);

// 孫ノード（孫）を取得
const grandchildNode = childNode.firstElementChild;
console.log("孫ノード:", grandchildNode);
