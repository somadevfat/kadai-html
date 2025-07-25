/*
設定したおみくじの出現率を出す！
「総合課題4-2」で作成した課題を利用して、設定した確率でおみくじを連続で10万回引いたときの出現率をそれぞれ表示してください。
『HTML』で下記の入力フォームを作り結果を表示しましょう。

「javascript_general_mission_3_1.js」ファイルを作成して解答してください。
*/

/*--- DOM要素の取得 ---*/
const daikichiInput = document.getElementById("daikichi");
const chukichiInput = document.getElementById("chukichi");
const shokichiInput = document.getElementById("shokichi");
const kichiInput = document.getElementById("kichi");
const suekichiInput = document.getElementById("suekichi");
const kyoInput = document.getElementById("kyo");
const daikyoInput = document.getElementById("daikyo");
const errorMessage = document.getElementById("error-message");
const saveSettingsButton = document.getElementById("save-settings");
const omikujiButton = document.getElementById("omikujiButton");
const daikichiResultSpan = document.getElementById("daikichi_result");
const chukichiResultSpan = document.getElementById("chukichi_result");
const shokichiResultSpan = document.getElementById("shokichi_result");
const kichiResultSpan = document.getElementById("kichi_result");
const suekichiResultSpan = document.getElementById("suekichi_result");
const kyoResultSpan = document.getElementById("kyo_result");
const daikyoResultSpan = document.getElementById("daikyo_result");
const resultSpans = [
  daikichiResultSpan,
  chukichiResultSpan,
  shokichiResultSpan,
  kichiResultSpan,
  suekichiResultSpan,
  kyoResultSpan,
  daikyoResultSpan,
];
const inputsId = [
  daikichiInput,
  chukichiInput,
  shokichiInput,
  kichiInput,
  suekichiInput,
  kyoInput,
  daikyoInput,
];

/*--- データ定義 ---*/
class OmikujiResult {
  constructor(name, rate) {
    this.name = name;
    this.rate = rate;
    this.count = 0;
  }

  incrementCount() {
    this.count++;
  }
}

const omikujiData = {
  //ナンバーにしておかないとomikuji()が最後まで処理されなかった
  大吉: new OmikujiResult("大吉", Number(daikichiInput.value)),
  中吉: new OmikujiResult("中吉", Number(chukichiInput.value)),
  小吉: new OmikujiResult("小吉", Number(shokichiInput.value)),
  吉: new OmikujiResult("吉", Number(kichiInput.value)),
  末吉: new OmikujiResult("末吉", Number(suekichiInput.value)),
  凶: new OmikujiResult("凶", Number(kyoInput.value)),
  大凶: new OmikujiResult("大凶", Number(daikyoInput.value)),
};

const histryDate = [{ No: 0, 結果: `大吉`, 出現率: 100 }];
let total = 0;

//omikujiDataのキー何回も使う
const key = Object.keys(omikujiData);

/*--- テーブル関連 ---*/
// テーブル要素の生成とスタイリング
const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.style.border = "1px solid white";
table.style.borderCollapse = "collapse";
table.style.marginTop = "20px";
table.style.padding = "20px";
table.style.width = `50%`;
table.style.tableLayout = "fixed"; //均等に
table.style.boxShadow = "10px 10px 30px rgba(0, 0, 0, 1)";

// テーブルヘッダーの作成
const headers = Object.keys(histryDate[0]); //[0]のキーだけ取得
const headerRow = document.createElement("tr");
console.log(headers);
headers.forEach((key) => {
  const th = document.createElement(`th`);
  th.style.border = "1px solid #F0F0F0";
  th.style.backgroundColor = "#555555";
  th.style.color = "white";
  th.textContent = key;
  headerRow.appendChild(th);
});
//毎回追加しても外だして一回でも同じ
tbody.appendChild(headerRow);
table.appendChild(tbody);
document.body.appendChild(table);
console.log(headers);

// テーブルに履歴を追加する関数
function createTable() {
  const lastIndex = histryDate.length - 1;
  const lastIndexData = histryDate[lastIndex];
  const dataRow = document.createElement(`tr`);
  headers.forEach((key) => {
    const td = document.createElement(`td`);
    td.textContent = lastIndexData[key];
    if (total % 2) td.style.backgroundColor = "white";
    else td.style.backgroundColor = "#DDDDDD";
    td.style.border = "2px solid #CCCCCC";
    dataRow.appendChild(td);
    tbody.appendChild(dataRow);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

//createTable();

/*--- おみくじ処理 ---*/
function omikuji() {
  total++;
  const rand = Math.floor(Math.random() * 100); // 0以上100未満の乱数を取得

  for (let i = 0, sum = 0; i < key.length; i++) {
    sum += omikujiData[key[i]]["rate"];
    if (rand < sum) {
      omikujiData[key[i]].incrementCount();
      const ct = ((omikujiData[key[i]]["count"] / total) * 100).toFixed(2);
      histryDate.push({ No: total, 結果: key[i], 出現率: ct });
      break;
    }
  }
}
//omikuji()を10万回引く
function runSimulation() {
  const totalDraws = Number(100000);
  for (let i = 0; i < totalDraws; i++) {
    omikuji();
  } //  omikujiData[key[i]]["count"];
  for (let i = 0; i < key.length; i++) {
    resultSpans[i].textContent = omikujiData[key[i]]["count"];
  }
  let countResult = 0;
  key.forEach((key) => {
    resultSpans[countResult].textContent =
      (omikujiData[key][`count`] / total) * 100;
    countResult++;
  });
}

/*--- 設定の保存 ---*/
function omikujiValueSettings() {
  omikujiData["大吉"]["rate"] = Number(daikichiInput.value);
  omikujiData["中吉"]["rate"] = Number(chukichiInput.value);
  omikujiData["小吉"]["rate"] = Number(shokichiInput.value);
  omikujiData["吉"]["rate"] = Number(kichiInput.value);
  omikujiData["末吉"]["rate"] = Number(suekichiInput.value);
  omikujiData["凶"]["rate"] = Number(kyoInput.value);
  omikujiData["大凶"]["rate"] = Number(daikyoInput.value);
  //設定値テスト
  key.forEach((key) => {
    console.log(`${key}=${omikujiData[key][`rate`]}`);
  });

  alert(`設定を保存しました`);
}

/*--- 入力バリデーション ---*/
function Validation() {
  const values = inputsId.map((a) => {
    return a.value;
  });
  const settingSumvalue = values.reduce((a, b) => {
    return Number(a) + Number(b);
  }, 0);
  const checkNull = values.some((valueA) => {
    return !valueA.trim();
  });

  console.log(settingSumvalue);
  if (checkNull) {
    errorMessage.textContent = `数値を入力してください`;
    saveSettingsButton.disabled = true;
    omikujiButton.disabled = true;
  } else if (settingSumvalue != 100) {
    errorMessage.textContent = `合計が100%になるように設定してください`;
    saveSettingsButton.disabled = true;
    omikujiButton.disabled = true;
  } else {
    saveSettingsButton.disabled = false;
    omikujiButton.disabled = false;
    errorMessage.textContent = ``;
  }
}

/*--- イベント設定 ---*/
saveSettingsButton.addEventListener(`click`, omikujiValueSettings);

omikujiButton.addEventListener(`click`, runSimulation);
inputsId.forEach((a) => {
  a.addEventListener(`blur`, Validation);
});

/*--- 初期化処理 ---*/
//histryDate

saveSettingsButton.disabled = true;
omikujiButton.disabled = true;
