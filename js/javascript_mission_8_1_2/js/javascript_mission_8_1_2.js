/*
下記の問題を『for文』を使って作成しよう。
下記を『HTML』に表示して、
問題をクリックしたらその答えの表示が書き換わるプログラムを書きなさい。
----------------
入力欄に入力した数値まで1から順に、奇数の場合は数字の代わりに「odd」 を表示し、
偶数の場合は数字の代わりに「even」 と表示するプログラムを作成せよ。←この要素をクリックしたら
答えを表示する。

答え：○○、○○、○○、…←ここに答えを順に表示してください。
----------------

「javascript_mission_8_1_2.js」ファイルを作成して解答してください。
*/

const answer = document.getElementById("result");
const button = document.getElementById("button");

//偶数奇数
function ans(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) modifyText("even、", i);
    else modifyText("odd 、", i);
  }
}

//テキスト変更関数 無駄に書いた 出力はok
function modifyText(text, number) {
  const div = document.createElement("div");
  div.id = `tag` + number;
  div.textContent = text;
  answer.append(text);
}

//クリックイベント
button.addEventListener("click", function () {
  console.log("クリックされました");
  const num = document.getElementById("num");
  const numV = parseInt(num.value);
  ans(numV);
});
