/*
『HTML』に 「親」「子」 に対して 「兄弟姉妹」の要素を5つ 作成し、「兄弟姉妹」の真ん中の要素 から、「後ろの兄弟姉妹ノードの取得」「前の兄弟姉妹ノードの取得」 でそれぞれを特定して『Console(コンソール)』に出力しましょう。
「javascript_mission_4_2_3.js」ファイルを作成して解答してください。
*/
const parent = document.createElement("div");
parent.textContent = "親";
parent.id = "parent";
document.body.appendChild(parent);
let child = [];
for (let i = 1; i <= 5; i++) {
  child[i] = document.createElement("div");
  child[i].textContent = `子 ${i}`;
  child[i].id = `child${i}`;
  parent.appendChild(child[i]);
}
const parentNode = document.getElementById("parent");
console.log("親ノード:", parentNode);
const chi = [];
//奇数とわかっているためifで分岐させずにn/2で記述
const middleIndex = Math.floor(child.length / 2);
for (let z = middleIndex; z < child.length; z++) {
  chi[z] = document.getElementById("child" + z);
  if (z <= middleIndex) {
    console.log("真ん中より上");
  }
  console.log(chi[z]);
}

for (let z = middleIndex; z >= 0; z--) {
  chi[z] = document.getElementById("child" + z);
  if (z >= 0) {
    if (z !== 0) {
      if (z >= middleIndex) console.log("真ん中より下");
      console.log(chi[z]);
    }
  }
}
