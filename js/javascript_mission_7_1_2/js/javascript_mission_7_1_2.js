/*
下記の問題を『if文』を使って作成しよう。
下記の『HTML』に記載されている問題の解答を選択したら、『答え：』の表示箇所に
正解なら『〇』、不正解なら『×』を表示してください。
----------------
*/

const answerElement = document.getElementById("answer");

answerElement.addEventListener("change", function () {
  const resultElement = document.getElementById("result");
  const answerValue = answerElement.value;
  if (answerValue == "0") {
    resultElement.textContent = "×";
  } else if (answerValue === "1") {
    resultElement.textContent = "〇";
  } else if (answerValue === "") resultElement.textContent = "選択してください";
});
