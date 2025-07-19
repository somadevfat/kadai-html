/*
下記の問題を『while文』を使って作成しよう。
下記を『HTML』に表示して、
問題をクリックしたらその答えの表示が書き換わるプログラムを書きなさい。
———————————
A君は1日に50km歩きます。
ある日A君は、日本一周12200kmの旅にでました。

流石に疲れるので7日毎に1日は休むとして、
何日で日本一周できるでしょうか？←この要素をクリックしたら答えを表示する。

答え：○○○日←ここに答えを表示してください。
———————————

「javascript_mission_8_2_1.js」ファイルを作成して解答してください。
*/
const btn = document.getElementById("btn");
const ret = document.getElementById("ret");
function numberOfDays() {
  const a_Kun = 50;
  let km = 12200;
  let count = 0;
  while (km > 0) {
    count++; // 日数を先に増やす
    if (count % 7 !== 0) {
      // 増やした後のcountで判定
      km -= a_Kun;
    }
  }
  return count;
}

btn.addEventListener("click", function () {
  console.log("クリックされました");
  const number = numberOfDays();
  ret.textContent = number;
});
