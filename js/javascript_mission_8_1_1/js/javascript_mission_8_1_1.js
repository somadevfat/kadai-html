/*
下記の問題を『for文』を使って作成しよう。
下記を『HTML』に表示して、
問題をクリックしたらその答えの表示が書き換わるプログラムを書きなさい。
———————————
初期の値が0で毎回1を足していく処理を100回行うとき、3の倍数の時は1を足さない結果を出すプログラムを作成せよ。←この要素をクリックしたら答えを表示する。

答え：○○←この部分を結果によって表示が変わるようにしてください。
———————————

「javascript_mission_8_1_1.js」ファイルを作成して解答してください。
*/
// 1ずつ足し、3の倍数の場合は足さない関数
function ans() {
  let result = 0;
  for (let i = 0; i < 100; i++) {
    if (i % 3 !== 0) result++;
  }
  return result;
}
//テキスト変更関数
function modifyText(text) {
  let answer = document.getElementById("answer");
  answer.textContent = text;
}
//id
let clickPoint = document.getElementById("clickPoint");

//クリックイベント
clickPoint.addEventListener(
  "click",
  function () {
    console.log("クリックされました");
    const result = ans();
    modifyText(result);
  },
  { once: true }
);
