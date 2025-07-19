/*
下記の問題を『if文』を使って作成しよう。
下記を『HTML』に表示して、
A君とB君のそれそれの所持金と「お互いに○○○○円以上…」の○○○○部分の金額を書き換えられるようにして、それぞれの所持金を比較して返答の表示が書き換わるプログラムを書きなさい。
———————————
A君とB君が旅行代理店窓口で相談しています。
A君「お互いに○○○○円以上持っていたら海外旅行に行こう！」
B君「もし足りなかったら国内旅行にしようよ！」

店員「旅行先どうしますか？」←この要素をクリックしたら下記のA君、B君、店員の表示をしてください。

A君「僕は○○○○円持ってるよ！」←この部分が表示される。
B君「僕は○○○○円持ってるよ！」←この部分が表示される。

『店員「では、海外旅行のご案内を致します。」』あるいは、『店員「では、国内旅行のご案内を致します。」を表示』←この部分は条件によって表示が変わるようにしてください。
———————————

「javascript_mission_7_1_1.js」ファイルを作成して解答してください。
*/

/*
A , B が n 円以上で海外旅行
nの指定ができるように
ここを 入力 >= n なら「では、海外旅行のご案内を致します。」』
それ以外は『店員「では、国内旅行のご案内を致します。」を表示』
ボタンで表示を指示
*/

//idで特定要素取得
let moneyA = document.getElementById("moneyA");
let moneyB = document.getElementById("moneyB");
let threshold = document.getElementById("threshold");
let output = document.getElementById("output");
let decideBtn = document.getElementById("decideBtn");
//value取得
function checkNam() {
  const moneyA_price = parseInt(moneyA.value);
  const moneyB_price = parseInt(moneyB.value);
  const threshold_price = parseInt(threshold.value);
  if (isNaN(moneyA_price) || isNaN(moneyB_price) || isNaN(threshold_price)) {
    output.textContent = "数字を入力して下さい";
  }
}
moneyA.addEventListener("change", function () {
  moneyA.value;
  console.log("A君の所持金が変更されました:", moneyA.value);
  checkNam();
});

//金額判定
function modifyText() {
  const moneyA_price = parseInt(moneyA.value);
  const moneyB_price = parseInt(moneyB.value);
  const threshold_price = parseInt(threshold.value);
  //数字以外入力時
  if (isNaN(moneyA_price) || isNaN(moneyB_price) || isNaN(threshold_price)) {
    output.textContent = "数字を入力して下さい";
    return; // 以降の処理を中断
  }
  if (moneyA_price >= threshold_price && moneyB_price >= threshold_price) {
    output.textContent = `店員「では、海外旅行のご案内を致します。」`;
  } else output.textContent = `店員「では、国内旅行のご案内を致します。`;
}
//ボタン押したら変わるように
decideBtn.addEventListener("click", function () {
  modifyText();
  console.log("クリックされました");
});
