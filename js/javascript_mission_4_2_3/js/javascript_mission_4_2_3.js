/*
『HTML』に 「親」「子」 に対して 「兄弟姉妹」の要素を5つ 作成し、「兄弟姉妹」の真ん中の要素 から、「後ろの兄弟姉妹ノードの取得」「前の兄弟姉妹ノードの取得」 でそれぞれを特定して『Console(コンソール)』に出力しましょう。
「javascript_mission_4_2_3.js」ファイルを作成して解答してください。
*/
const parent = document.createElement("div");
parent.textContent = "親";
parent.id = "parent";
document.body.appendChild(parent);
let children = [];
for (let i = 1; i <= 5; i++) {
  children[i] = document.createElement("div");
  children[i].textContent = `子 ${i}`;
  children[i].id = `children${i}`;
  parent.appendChild(children[i]);
}
const parentNode = document.getElementById("parent");
console.log("親ノード:", parentNode);

const middleIndex = Math.floor(children.length / 2);

function elementsAfterMiddles() {
  let el = document.getElementById(`children${[middleIndex]}`);
  let middle = middleIndex;
  while (el) {
    console.log(el);
    el = el.nextSibling;
    middle++;
  }
}
function elementsPreviousMiddles() {
  let el = document.getElementById(`children${[middleIndex]}`);
  let middle = middleIndex;
  while (el) {
    console.log(el);
    el = el.previousSibling;
    middle--;
  }
}
elementsPreviousMiddles();
elementsAfterMiddles();
