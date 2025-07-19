/*
下記の問題を『三項演算子』を使って作成しよう。
下記を『HTML』に表示して、
「お会計は○○○○円です」の○○○○部分の金額とA君とB君のそれそれの所持金を書き換えられるようにして、お会計の金額と所持金を比較して返答の表示が書き換わるプログラムを書きなさい。
———————————
お店の人「お会計は○○○○円です。」←この要素をクリックしたら下記のA君、B君と結果の表示をしてください。

A君「僕は○○○○円持ってるよ！」←この部分が表示される。
B君「僕は○○○○円持ってるよ！」←この部分が表示される。

『○君「じゃあ僕がおごるよ！」』あるいは、『二人「お金足りないね…」』あるいは…etc、←この部分は条件によって表示が変わるようにしてください。
———————————

「javascript_mission_7_3_1.js」ファイルを作成して解答してください。
*/

// 要素の取得
let nomalPrice = document.getElementById("nomalPrice");
let output = document.getElementById("output");
let clickPoint = document.getElementById("clickPoint");
let myForm = document.getElementById("myForm");

// A君・B君 Cの所持金入力欄の表示（初回クリック時のみ）
clickPoint.addEventListener(
  "click",
  function () {
    clickPoint.innerHTML += `
      <br><br>
      <label>A君「僕は<input type="number" id="moneyA" value="200" />円持ってるよ！」</label><br><br>
      <label>B君「僕は<input type="number" id="moneyB" value="10" />円持ってるよ！」</label><br><br>
      <label>C君「僕は<input type="number" id="moneyC" value="15" />円持ってるよ！」</label><br><br>
    `;
    console.log("クリックされました");
  },
  { once: true }
);

// フォーム内の数値入力が変更されたら結果を更新
myForm.addEventListener("change", function (event) {
  if (event.target.matches('input[type="number"]')) {
    modifyText();
  }
});

/**
 * 金額判定と結果表示を行う関数
 */
function modifyText() {
  let moneyA = document.getElementById("moneyA");
  let moneyB = document.getElementById("moneyB");
  let moneyC = document.getElementById("moneyC");

  // A君・B君 C の入力欄が表示されていない場合
  if (!moneyA || !moneyB || !moneyC) {
    output.textContent =
      "A君とB君の所持金を入力するために、上のテキストをクリックしてください。";
    return;
  }

  // 入力値の取得と数値変換
  const moneyA_price = parseInt(moneyA.value);
  const moneyB_price = parseInt(moneyB.value);
  const moneyC_price = parseInt(moneyC.value);
  const nomal_priceV = parseInt(nomalPrice.value);

  // 数字以外の入力チェック
  if (
    isNaN(moneyA_price) ||
    isNaN(moneyB_price) ||
    isNaN(moneyC_price) ||
    isNaN(nomal_priceV)
  ) {
    output.textContent = "数字を入力して下さい";
    return;
  }
  // 指定席に必要な追加料金（2人分）の計算
  const requiredAdditionalPriceForTwo = nomal_priceV * 3;

  // 条件判定ロジック
  const canApay = moneyA_price >= requiredAdditionalPriceForTwo;
  const canBpay = moneyB_price >= requiredAdditionalPriceForTwo;
  const canCpay = moneyC_price >= requiredAdditionalPriceForTwo;

  // 三項演算子を使用した条件分岐
  output.textContent =
    canApay && canBpay && canCpay // 全員が支払える場合
      ? moneyA_price >= moneyB_price && moneyA_price >= moneyC_price // Aが最大
        ? `A君「僕が奢るね」`
        : moneyB_price >= moneyA_price && moneyB_price >= moneyC_price // Bが最大
        ? `B君「僕が奢るね」`
        : moneyC_price >= moneyA_price && moneyC_price >= moneyB_price // Cが最大
        ? `C君「僕が奢るね」`
        : `『全員「割り勘だね。」』` // 全員同額の場合
      : canApay && canBpay // AとBが支払える場合
      ? `A君 B君「僕が奢るね」`
      : canApay && canCpay // AとCが支払える場合
      ? `A君 C君「僕が奢るね」`
      : canBpay && canCpay // BとCが支払える場合
      ? `B君 C君「僕が奢るね」`
      : canApay // Aだけが支払える場合
      ? `A君「僕が奢るね」`
      : canBpay // Bだけが支払える場合
      ? `B君「僕が奢るね」`
      : canCpay // Cだけが支払える場合
      ? `C君「僕が奢るね」`
      : `『全員「お金足りないね…」』`; // 誰も支払えない場合
}

// ページ読み込み時に初期状態を表示
window.addEventListener("DOMContentLoaded", modifyText);
