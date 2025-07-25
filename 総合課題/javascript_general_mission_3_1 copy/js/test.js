// javascript_general_mission_3_1.js  ※HTMLは一切変更しません
(() => {
  // ----- 定数 -----
  const LABELS = ["大吉", "中吉", "小吉", "吉", "末吉", "凶", "大凶"];
  const IDS = [
    "daikichi",
    "chukichi",
    "shokichi",
    "kichi",
    "suekichi",
    "kyo",
    "daikyo",
  ];

  // ----- 要素取得 -----
  const inputs = IDS.map((id) => document.getElementById(id));
  const errorP = document.getElementById("error-message");
  const saveBtn = document.getElementById("save-settings");
  const drawBtn = document.getElementById("omikujiButton");

  // ----- 内部状態 -----
  let ranges = []; // 累積確率境界
  let history = []; // 引いた履歴
  let seq = 0; // 回数カウンタ

  // ----- バリデーション -----
  const validate = () => {
    const vals = inputs.map((i) => Number(i.value));
    const sum = vals.reduce((a, b) => a + b, 0);

    let msg = "";
    if (vals.some((v) => Number.isNaN(v) || v < 0)) {
      msg = "0以上の数値を入力してください";
    } else if (sum !== 100) {
      msg = `確率の合計は100%にしてください（現在 ${sum}%）`;
    }

    errorP.textContent = msg;
    saveBtn.disabled = drawBtn.disabled = !!msg;
    return !msg;
  };

  // ----- 設定保存 -----
  const saveSettings = () => {
    if (!validate()) return;
    let acc = 0;
    ranges = inputs.map((i) => {
      acc += Number(i.value);
      return acc;
    });
    alert("設定を保存しました");
  };

  // ----- おみくじ実行 -----
  const drawOmikuji = () => {
    if (ranges.length === 0) {
      alert("先に設定ボタンを押してください");
      return;
    }
    const r = Math.random() * 100;
    const idx = ranges.findIndex((v) => r < v);
    const res = LABELS[idx];

    history.push(res);
    seq++;

    // 出現率計算
    const freq = {};
    history.forEach((k) => (freq[k] = (freq[k] || 0) + 1));
    const rate = ((freq[res] / seq) * 100).toFixed(2);

    // テーブル作成（初回だけ）
    let tbl = document.getElementById("result-table");
    if (!tbl) {
      const container = document.createElement("section");
      container.innerHTML = `
        <h2>結果</h2>
        <table border="1" id="result-table">
          <thead>
            <tr>
              <th>回数</th><th>結果</th><th>出現率</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      `;
      document.getElementById("omikuji-settings").after(container);
      tbl = container.querySelector("tbody");
    } else {
      tbl = tbl.querySelector("tbody");
    }

    const tr = document.createElement("tr");
    [seq, res, `${rate}%`].forEach((text) => {
      const td = document.createElement("td");
      td.textContent = text;
      tr.appendChild(td);
    });
    tbl.appendChild(tr);
  };

  // ----- 初期化 -----
  const init = () => {
    inputs.forEach((i) => {
      i.addEventListener("input", validate);
      i.addEventListener("blur", validate);
    });
    saveBtn.addEventListener("click", saveSettings);
    drawBtn.addEventListener("click", drawOmikuji);

    // 初期値：吉 100%
    inputs.forEach((i) => (i.value = 0));
    inputs[3].value = 100;
    validate();
    saveSettings();
  };

  document.addEventListener("DOMContentLoaded", init);
})();
