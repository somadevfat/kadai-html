/*
下記の問題を『if文』を使って作成しよう。
下記を『HTML』に表示して、
「通常料金○○○○円と追加料金○○○○円だね。」の、通常の切符代金と追加の指定席代金の○○○○部分の金額とA君とB君のそれそれの所持金を書き換えられるようにして、通常の切符代金と追加の指定席代金とそれぞれの所持金を比較し、返答の表示が書き換わるプログラムを書きなさい。
----------------
A君とB君が緑の窓口で相談しています。
A君「指定席に変えたいね！」
B君「追加料金が発生するよ！」
A君「じゃあどちらかが通常の切符代以外に2人分の追加料金分以上を持っていて、より多く持っている方が奢るってどう？」
B君「そうしよう！」

2人「通常料金○○○○円と追加料金○○○○円だね。」←この要素をクリックしたら下記のA君、B君、と結果の表示をしてください。

A君「僕は○○○○円持ってるよ！」←この部分が表示される。
B君「僕は○○○○円持ってるよ！」←この部分が表示される。

『○君「僕が奢るね」』あるいは、『2人「指定席は諦めるか」』あるいは…etc、←この部分は条件によって表示が変わるようにしてください。
----------------

「javascript_mission_7_1_3.js」ファイルを作成して解答してください。
*/

// 要素の取得
let nomalPrice = document.getElementById("nomalPrice");
let hiPrice = document.getElementById("hiPrice");
let output = document.getElementById("output");
let clickPoint = document.getElementById("clickPoint");
let myForm = document.getElementById("myForm");

// A君・B君の所持金入力欄の表示（初回クリック時のみ）
clickPoint.addEventListener(
  "click",
  function () {
    clickPoint.innerHTML += `<br><br><label>A君「僕は<input type="number" id="moneyA" value="1000" /></label
    ><label for="moneyA">円持ってるよ！」</label><br /><br>
    <label>B君「僕は<input type="number" id="moneyB" value="1000" /></label
    ><label for="moneyB">円持ってるよ！」</label><br /><br />`;
    console.log("クリックされました");
  },
  { once: true } // イベントは一度だけ実行
);

// フォーム内の数値入力が変更されたら結果を更新
myForm.addEventListener("change", function (event) {
  if (event.target.matches('input[type="number"]')) {
    modifyText();
  }
});

// 金額判定と結果表示
function modifyText() {
  let moneyA = document.getElementById("moneyA");
  let moneyB = document.getElementById("moneyB");

  // A君・B君の入力欄が表示されていない場合
  if (!moneyA || !moneyB) {
    output.textContent =
      "A君とB君の所持金を入力するために、上のテキストをクリックしてください。";
    return;
  }

  // 入力値の取得と数値変換
  const moneyA_price = parseInt(moneyA.value);
  const moneyB_price = parseInt(moneyB.value);
  const nomal_priceV = parseInt(nomalPrice.value);
  const hi_priceV = parseInt(hiPrice.value);

  // 指定席に必要な追加料金（2人分）の計算
  const requiredAdditionalPriceForTwo = parseInt(hiPrice.value) * 2;

  // 数字以外の入力チェック
  if (
    isNaN(moneyA_price) ||
    isNaN(moneyB_price) ||
    isNaN(nomal_priceV) ||
    isNaN(hi_priceV)
  ) {
    output.textContent = "数字を入力して下さい";
    return;
  }

  // 条件判定ロジック
  const canApay = moneyA_price >= requiredAdditionalPriceForTwo;
  const canBpay = moneyB_price >= requiredAdditionalPriceForTwo;

  if (canApay && canBpay) {
    // 両方支払える場合、より多く持っている方が奢る
    if (moneyA_price > moneyB_price) {
      output.textContent = `A君「僕が奢るね」`;
    } else if (moneyB_price > moneyA_price) {
      output.textContent = `B君「僕が奢るね」`;
    } else {
      // 所持金が同額の場合
      output.textContent = `A君「僕が奢るね」（同額だけど）`;
    }
  } else if (canApay) {
    // A君だけ支払える場合
    output.textContent = `『A君「僕が奢るね」』`;
  } else if (canBpay) {
    // B君だけ支払える場合
    output.textContent = `『B君「僕が奢るね」』`;
  } else {
    // 誰も支払えない場合
    output.textContent = `『2人「指定席は諦めるか」』`;
  }
}

// ページ読み込み時に初期状態を表示
window.addEventListener("DOMContentLoaded", modifyText);
