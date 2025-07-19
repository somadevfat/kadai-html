/*
下記のデータは商品のランキングのオブジェクトデータです。
このランキングデータからデータを呼び出して「月間」「週間」ランキングを『HTML』にテーブルで表を作成しましょう。
「javascript_mission_10_1_1.js」ファイルを作成して解答してください。
*/
let ranking = {
  monthlyRanking: {
    items: [
      {
        rank: 1,
        itemName: "商品名1",
        itemPrice: "1111",
        itemCaption: "売れてます",
        itemUrl: "https://example.com/item1",
        shopName: "商品1専門店",
        shopUrl: "https://example.com/shop1",
        genreId: "000001",
      },
      {
        rank: 2,
        itemName: "商品名2",
        itemPrice: "2222",
        itemCaption: "売れてます",
        itemUrl: "https://example.com/item2",
        shopName: "商品2専門店",
        shopUrl: "https://example.com/shop2",
        genreId: "000002",
      },
      {
        rank: 3,
        itemName: "商品名3",
        itemPrice: "3333",
        itemCaption: "売れてます",
        itemUrl: "https://example.com/item3",
        shopName: "商品3専門店",
        shopUrl: "https://example.com/shop3",
        genreId: "000003",
      },
    ],
  },
  weeklyRanking: {
    items: [
      {
        rank: 1,
        itemName: "商品名4",
        itemPrice: "4444",
        itemCaption: "売れてます",
        itemUrl: "https://example.com/item4",
        shopName: "商品4専門店",
        shopUrl: "https://example.com/shop4",
        genreId: "000004",
      },
      {
        rank: 2,
        itemName: "商品名5",
        itemPrice: "5555",
        itemCaption: "売れてます",
        itemUrl: "https://example.com/item5",
        shopName: "商品5専門店",
        shopUrl: "https://example.com/shop5",
        genreId: "000005",
      },
      {
        rank: 3,
        itemName: "商品名6",
        itemPrice: "6666",
        itemCaption: "売れてます",
        itemUrl: "https://example.com/item6",
        shopName: "商品6専門店",
        shopUrl: "https://example.com/shop6",
        genreId: "000006",
      },
    ],
  },
};
//解答をここから下に書く

// WebサーバからJSONデータを取得する想定なのでテキストデータに変換
ranking = JSON.stringify(ranking);
// WebサーバからJSONデータを取得したデータを想定してJavaScriptで扱うためにオブジェクトデータに変換
ranking = JSON.parse(ranking);

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
  const headers = Object.keys(dateRank.items[0]);
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
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
  dateRank.items.forEach((item) => {
    const values = Object.values(item);
    console.log(values);
    //ここでローを3回繰り返す（3配列分）
    const row = document.createElement("tr");
    //valueでtd(cell作成)
    values.forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value; //
      cell.style.border = "1px solid black";
      cell.style.padding = "5px";
      //ここで一行にデータを追加していく繰り返しで
      row.appendChild(cell);
      tbody.appendChild(row);
    });
  });

  console.log(headers);
  //tr.appendChild(th);
  //tbody.appendChild(tr);
  table.appendChild(tbody);
  document.body.appendChild(table);
}
//月間・週間対応
crTable(ranking.monthlyRanking, "月間ランキング");
crTable(ranking.weeklyRanking, "週間ランキング");

/*
まずひとつの表を完成させたら複数対応させる
テーブル・tbody作成 先に作っておかないと入れるところない

キーになるデータ項目を取得
ローに見出しを繰り返し作っていいい入れる

データ層をキーで新しい配列に値のみ入れる
ローについでに入れて繰り返す

関数にして複数のネストに対応させる
*/
