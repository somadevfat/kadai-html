/*『HTML』に要素を複数作成し、その要素をcssセレクタで「最初の1つだけ」と「全て」を特定して『Console(コンソール)』に出力しましょう。
「javascript_mission_4_1_4.js」ファイルを作成して解答してください。*/
for (let i = 1; i <= 5; i++) {
  const p = document.createElement("p");
  p.textContent = `段落 ${i}`;
  document.body.appendChild(p); //作ったpタグをbodyの最後へｈはは配置
}
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p"));
