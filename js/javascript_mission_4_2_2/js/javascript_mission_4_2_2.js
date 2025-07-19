/*『HTML』に 「親」に対して「子」の要素を5つ 作成し、「最初の子ノードの取得」「最後の子ノードの取得」 でそれぞれを特定して『Console(コンソール)』に出力しましょう。
「javascript_mission_4_2_2.js」ファイルを作成して解答してください。*/
const parent = document.createElement("div");
parent.textContent = "親";
parent.id = "parent";
document.body.appendChild(parent);
let child = [];
for (let i = 1; i <= 5; i++) {
  child[i] = document.createElement("div");
  child[i].textContent = `子 ${i}`;
  parent.appendChild(child[i]);
}
const parentNode = document.getElementById("parent");
console.log("親ノード:", parentNode);

const childNodefirst = parentNode.firstElementChild;
console.log("最初の子ノード:", childNodefirst);
const childNodelast = parentNode.lastElementChild;
console.log("最後の子ノード:", childNodelast);
