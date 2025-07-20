/*
下記のURLから社員データを axios(async/await) を使って取得し、『HTML』に表を表示しましょう。
URL：https://api.littleheroes.jp/learning-materials/employees?page=1&amp;prePage=30
----------------
[社員データ取得] ←ボタンをクリックしたら表を表示する。
*/
"use strict";

let employeeData = null;

const urlLink =
  "https://api.littleheroes.jp/learning-materials/employees?page=1&amp;prePage=30";

async function getData() {
  try {
    const response = await axios.get(urlLink);
    employeeData = response.data; // axiosのレスポンスデータは response.data に格納される

    console.log(response);
    const btn = document.getElementById("button");
    btn.addEventListener("click", function () {
      crTable(employeeData.data, "社員テーブル"); // employeeData.data を参照
    });
    console.log("成功:", response.data); // response.data を参照
  } catch (error) {
    if (error.response) {
      // サーバーからのレスポンスあり（ステータスエラー）
      console.error("失敗:", error.response.status);
    } else {
      // ネットワークエラーなど
      console.error("接続失敗:", error.message);
    }
  }
}
getData();
/*
  1】fetch(url)
      ↓
【2】サーバーがレスポンス返す（response）
      ↓
【3】response.ok をチェック
      ↓
【4】JSONデータを受け取って表示
      ↓
【5】途中でエラーがあれば .catch へジャンプして表示

  */

function crTable(dateRank, title) {
  const titleElement = document.createElement("h2");
  titleElement.textContent = title;
  document.body.appendChild(titleElement);
  //初期作業
  // テーブル作成
  const table = document.createElement("table");
  table.style.fontSize = "24px";
  table.style.width = "50%";
  table.style.border = "1px solid black";
  table.style.borderCollapse = "collapse";
  // tbody作成を先に作っておく
  const tbody = document.createElement("tbody");
  const head = document.createElement("tr");
  //ここでヘッダーを繰り返し処理によって複数作成
  //Object.keys(キーを指定して)itemsの下の項目を取得
  // ヘッダーの英語名と日本語名のマッピング
  const headerMap = {
    No: "No", // 新しくNo列を追加
    firstName: "名",
    lastName: "姓",
    department: "部署",
    tel: "電話番号",
  };
  const headers = ["No", ...Object.keys(dateRank[0])]; // Noを先頭に追加
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerMap[headerText] || headerText; // マッピングがあれば日本語、なければ元の英語
    if (headerText !== "No") {
      // No列にはIDを設定しない
      th.id = headerText; // IDは元の英語のままにしておく
    }
    th.style.border = "1px solid black";
    th.style.padding = "5px";
    th.style.backgroundColor = "#f2f2f2";
    //作ったthをtr(head)に入れておく
    head.appendChild(th);
    //headをtbodyに挿入
    tbody.appendChild(head);
  });

  //データ層作成へ

  //itemsないの配列をvaluesへ
  dateRank.forEach((item, index) => {
    const values = Object.values(item);
    console.log(values);
    //ここでローを繰り返す（配列分）
    const row = document.createElement("tr");

    // 最初にNo列のセルを追加（0から始まる連番）
    const noCell = document.createElement("td");
    noCell.textContent = index; // 0から始まる連番
    noCell.style.border = "1px solid black";
    noCell.style.padding = "5px";
    row.appendChild(noCell);

    //valueでtd(cell作成)
    values.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value; //
      cell.style.border = "1px solid black";
      cell.style.padding = "5px";
      //ここで一行にデータを追加していく繰り返しで
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  console.log(headers);
  //tr.appendChild(th);
  //tbody.appendChild(tr);
  table.appendChild(tbody);
  document.body.appendChild(table);
}
