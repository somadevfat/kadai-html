/*
フォームに入力された誕生日から現在の年齢（？歳？ヵ月？日）を計算して表示してください。
『HTML』で下記の入力フォームを作り結果を表示しましょう。
———————————
[数値]年　[数値]月　[数値]日　←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください。

ここにエラー表示　←入力チェックにエラーがある場合はここに表示。

[調べる]　←ボタンをクリックしたら答えを表示する。(※ボタンは、エラーなど入力がきちんとされていない場合は押せないようにして下さい)

結果：現在○○○歳と○○ヵ月○○日ですね　←ここに結果を表示してください。
———————————

「javascript_general_mission_1_2.js」ファイルを作成して解答してください。
*/
const day = document.getElementById(`day`);
const month = document.getElementById(`month`);
const year = document.getElementById(`year`);
const errorText = document.getElementById(`errorText`);
const result = document.getElementById(`result`);
const check_btn = document.getElementById(`check_btn`);
check_btn.disabled = true;

day.addEventListener("blur", validateDate);
month.addEventListener("blur", validateDate);
year.addEventListener("blur", validateDate);

function validateDate() {
  const x1 = day.value;
  const x2 = month.value;
  const x3 = year.value;

  // 空欄 or 数字でないものが1つでもあるならエラー
  if (
    x1 === "" ||
    x2 === "" ||
    x3 === "" ||
    isNaN(x1) ||
    isNaN(x2) ||
    isNaN(x3)
  ) {
    errorText.textContent = "すべて数字を入力してください!";
    check_btn.disabled = true;
  } else {
    errorText.textContent = "";
    check_btn.disabled = false;
  }
}

check_btn.addEventListener("click", () => {
  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;

  // 数値として扱う
  const y = parseInt(yearValue);
  const m = parseInt(monthValue);
  const d = parseInt(dayValue);

  // 月は0始まり（JavaScript Date仕様）
  const date = new Date(y, m - 1, d);
  const age = getAge(y, m, d);
  // 有効な日付かチェック
  if (
    date.getFullYear() !== y ||
    date.getMonth() !== m - 1 ||
    date.getDate() !== d
  ) {
    result.textContent = "有効な日付を入力してください";
  } else {
    const formattedDate = `結果: 現在${age.year}歳${age.month}ヶ月${age.date}日ですね`;

    result.textContent = formattedDate;
  }
});

//現在の年齢など取得
function getAge(y, m, d) {
  const today = new Date();
  let year = today.getFullYear() - y;
  let month = today.getMonth() + 1 - m; // 月は1始まりに補正
  let date = today.getDate() - d;

  if (date < 0) {
    //マイナスのとき前の月の日数追加
    month--;
    const lastDayOfPrevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0 //前の月の1日になる
    );
    date += lastDayOfPrevMonth.getDate();
  }

  if (month < 0) {
    //マイナスなら年減らして12ヶ月ついか
    year--;
    month += 12;
  }

  return { year, month, date };
}
