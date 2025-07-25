/*
おみくじを作ろう！
大吉、中吉、小吉、吉、末吉、凶、大凶のそれぞれ出現確率を設定できるおみくじを作成して下さい。
設定画面を作り、設定した確率でおみくじが引け、引いた出現率（ログ）が残る。（テーブル表示）
出現確率の設定は合計100％になるように、チェック（バリデーション）を入れる。
『HTML』で下記の入力フォームを作り結果を表示しましょう。
———————————
設定値：
大吉[   ]% ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
中吉[   ]% ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
小吉[   ]% ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
吉 [   ]% ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
末吉[   ]% ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
凶 [   ]% ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
大凶[   ]% ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
ここにエラー表示 ←入力チェックにエラーがある場合はここに表示
[設定] ←ボタンをクリックしたら設定を保存する(※ボタンは、エラーなど入力がきちんとされていない場合は押せないようにして下さい)

今日の運勢は？ [おみくじを引く] ←ボタンをクリックしたら下記を表示する(※ボタンは、エラーなど入力がきちんとされていない場合は押せないようにして下さい)

結果：※下記のテーブルを参考に表示してください
———————————

「javascript_general_mission_3_1.js」ファイルを作成して解答してください。
*/

/*
確率の実装Math.random()でランダム値取得
設定した確率が30なら0.0~0.3 20なら0.3~0.5 ...
*/
const daikichiInput = document.getElementById("daikichi");
const chukichiInput = document.getElementById("chukichi");
const shokichiInput = document.getElementById("shokichi");
const kichiInput = document.getElementById("kichi");
const suekichiInput = document.getElementById("suekichi");
const kyoInput = document.getElementById("kyo");
const daikyoInput = document.getElementById("daikyo");
const errorMessage = document.getElementById("error-message");
const saveSettingsButton = document.getElementById("save-settings");
const omikujiButton = document.getElementById(`omikujiButton`);
const inputs = [
  daikichiInput,
  chukichiInput,
  shokichiInput,
  kichiInput,
  suekichiInput,
  kyoInput,
  daikyoInput,
];

// 各入力欄にイベントリスナーを設定します
inputs.forEach((input) => {
  input.addEventListener("blur", validateInputs);
  input.addEventListener("input", validateInputs);
});

function validateInputs() {
  const inputsData = inputs.map((input) => input.value);
  const isRequiredEmpty = inputsData.some((input) => input.trim() === "");
  const allAreNumbers = inputsData.every(
    (input) => !isNaN(input) && input.trim() !== ""
  );
  const sum = inputsData.reduce((a, b) => a + Number(b), 0);

  errorMessage.textContent = ""; // エラーメッセージをリセット

  if (isRequiredEmpty) {
    errorMessage.textContent = "すべての項目を入力してください。";
    saveSettingsButton.disabled = true;
    return;
  }

  if (!allAreNumbers) {
    errorMessage.textContent = "すべての項目に数値を入力してください。";
    saveSettingsButton.disabled = true;
    return;
  }

  if (sum !== 100) {
    errorMessage.textContent = `合計値が100%になるようにしてください。(現在: ${sum}%)`;
    saveSettingsButton.disabled = true;
    omikujiButton.disabled = true;
  } else {
    saveSettingsButton.disabled = false;
    omikujiButton.disabled = false;
  }
}
omikujiButton.addEventListener(`click`, omikujiDrawing);

function createTable() {
  const style = document.createElement("style");
  style.textContent = `
    .styled-table {
      border-collapse: collapse;
      width: 80%;
      margin: 20px auto;
      font-family: sans-serif;
      font-size: 16px;
    }

    .styled-table th,
    .styled-table td {
      padding: 12px 15px;
      border: 1px solid #ccc;
      text-align: left;
    }

    .styled-table thead {
      background-color: #333;
      color: white;
    }

    .styled-table tr:nth-child(even) {
      background-color: #f2f2f2;
      color: black;
    }

    }`;
  document.head.appendChild(style);
  document.head.appendChild(style);

  // テーブル作成
  const table = document.createElement("table");
  table.className = "styled-table";

  const thead = document.createElement("thead");
  thead.id = `omikuziThead`;
  const headerRow = document.createElement("tr");

  const headers = ["回数", "結果", "出現率"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  tbody.id = "omikuji-tbody";
  table.appendChild(tbody);

  document.body.appendChild(table);
}
createTable();

function omikujiAddRow(text1, text2, text3) {
  const tbody = document.getElementById(`omikuji-tbody`);
  const row = document.createElement("tr");
  const headers = [text1, text2, text3];
  headers.forEach((text) => {
    const td = document.createElement("td");
    td.textContent = text;
    row.appendChild(td);
  });
  tbody.appendChild(row);
}
/*
  daikichiInput,
  chukichiInput,
  shokichiInput,
  kichiInput,
  suekichiInput,
  kyoInput,
  daikyoInput,
*/
let drawCount = 0;
const labels = [
  "daikichi",
  "chukichi",
  "shokichi",
  "kichi",
  "suekichi",
  "kyo",
  "daikyo",
];
let probabilities = {};
const resultHistory = [];

function saveSettings() {
  const allValue = inputsAllValue();
  let sum = 0;
  const newSyutugenritu = {};
  labels.forEach((label, i) => {
    sum += allValue[i];
    newSyutugenritu[label] = sum;
  });
  probabilities = newSyutugenritu;
  alert("設定を保存しました。");
}

saveSettingsButton.addEventListener("click", saveSettings);

function omikujiDrawing() {
  drawCount++;
  const random = Math.random() * 100;
  let result = "";

  if (random < probabilities.daikichi) {
    result = "大吉";
  } else if (random < probabilities.chukichi) {
    result = "中吉";
  } else if (random < probabilities.shokichi) {
    result = "小吉";
  } else if (random < probabilities.kichi) {
    result = "吉";
  } else if (random < probabilities.suekichi) {
    result = "末吉";
  } else if (random < probabilities.kyo) {
    result = "凶";
  } else {
    result = "大凶";
  }

  resultHistory.push(result);
  const resultCounts = {};
  labels.forEach((label) => {
    const key =
      label === "daikichi"
        ? "大吉"
        : label === "chukichi"
        ? "中吉"
        : label === "shokichi"
        ? "小吉"
        : label === "kichi"
        ? "吉"
        : label === "suekichi"
        ? "末吉"
        : label === "kyo"
        ? "凶"
        : "大凶";
    resultCounts[key] = 0;
  });

  resultHistory.forEach((res) => {
    if (resultCounts[res] !== undefined) {
      resultCounts[res]++;
    }
  });

  const percentage = ((resultCounts[result] / drawCount) * 100).toFixed(2);

  omikujiAddRow(drawCount, result, `${percentage}%`);
}
function inputsAllValue() {
  const inputsData = inputs.map((input) => Number(input.value));
  return inputsData;
}

function initialize() {
  // 初期値を設定 (合計100%)
  daikichiInput.value = 0;
  chukichiInput.value = 0;
  shokichiInput.value = 0;
  kichiInput.value = 100;
  suekichiInput.value = 0;
  kyoInput.value = 0;
  daikyoInput.value = 0;

  // バリデーションと設定の保存
  validateInputs();
  saveSettings();
}

// ページ読み込み時に初期化処理を実行
initialize();
