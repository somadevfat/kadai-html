/*
フォームに入力された年月日が1990/01/02～2023/12/30の範囲に入っているかをチェックして、「範囲内」あるいは「範囲外」を表示してください。
『HTML』で下記の入力フォームを作り結果を表示しましょう。
———————————
[数値]年　[数値]月　[数値]日　←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください。

ここにエラー表示　←入力チェックにエラーがある場合はここに表示。

[範囲チェック]　←ボタンをクリックしたら答えを表示する。(※ボタンは、エラーなど入力がきちんとされていない場合は押せないようにして下さい)

結果：”範囲内”です又は”範囲外”です。←チェックした結果を表示してください。
———————————

「javascript_general_mission_1_3.js」ファイルを作成して解答してください。
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
  //曜日を入力してください

  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;

  // 数値として扱う
  const y = parseInt(yearValue);
  const m = parseInt(monthValue);
  const d = parseInt(dayValue);

  // 月は0始まり（JavaScript Date仕様）
  const date = new Date(y, m - 1, d);
  //チェック対象の期間をDateオブジェクトとして定義
  const startDate = new Date(1990, 0, 2); // 1990年1月2日
  const endDate = new Date(2023, 11, 30); // 2023年12月30日
  // 有効な日付かチェック
  if (
    date.getFullYear() !== y ||
    date.getMonth() !== m - 1 ||
    date.getDate() !== d
  ) {
    result.textContent = "有効な日付を入力してください";
  } else if (startDate <= date && endDate >= date) {
    result.textContent = `範囲内です`;
  } else result.textContent = `範囲外です`;
});
