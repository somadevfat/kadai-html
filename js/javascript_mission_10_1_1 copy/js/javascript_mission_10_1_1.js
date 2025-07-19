/*
下記に、月間(monthly)と週間(weekly)のランキングデータが用意されています。
このデータを使って、それぞれのランキングをHTMLのテーブルとして表示するのが最終目標です。
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

// ===================================================================================
// STEP 1: ランキングテーブルを作成する「設計図」となる関数を定義する
// ===================================================================================
// なぜ関数にするのか？
//   -> 月間ランキングと週間ランキングで、テーブルを作る処理は全く同じです。
//      同じコードを2回書くのは非効率なので、「テーブルを作る」という処理を一つの関数にまとめておき、
//      後でデータとタイトルを入れ替えて2回呼び出すことで、コードを再利用し、スッキリさせます。

/**
 * ランキングデータを受け取り、HTMLのテーブルを生成してページに追加する関数
 * @param {object} rankingData - 表示したいランキングのデータ (例: ranking.monthlyRanking)
 * @param {string} title - テーブルの上に表示するタイトル (例: "月間ランキング")
 */
function createRankingTable(rankingData, title) {
  // --- 処理の順番 1: タイトルの作成 ---
  // まず、ランキングのタイトル（"月間ランキング"など）を<h2>タグとして作ります。
  const titleElement = document.createElement("h2"); // <h2></h2> というHTML要素をメモリ上に作成
  titleElement.textContent = title; // <h2>月間ランキング</h2> のようにテキストを設定
  document.body.appendChild(titleElement); // 作成した<h2>要素をHTMLの<body>の末尾に追加

  // --- 処理の順番 2: テーブル全体の枠組みを作成 ---
  // 次に、表全体を囲む<table>タグを作ります。
  const table = document.createElement("table"); // <table></table> を作成
  // スタイル（見た目）を設定
  table.style.border = "1px solid black"; // 枠線
  table.style.borderCollapse = "collapse"; // 隣接するセルの枠線を重ねる
  table.style.width = "100%"; // 横幅を100%に
  table.style.fontSize = "14px"; // 文字サイズ

  // --- 処理の順番 3: テーブルのヘッダー（見出し行）を作成 ---
  // <thead>と<tr>（ヘッダー行）を作ります。
  const thead = document.createElement("thead"); // <thead></thead> を作成
  const headerRow = document.createElement("tr"); // <tr></tr> を作成

  // ヘッダーの各セル（<th>）を作ります。
  // ここで、将来データ項目が増減しても自動で対応できるように、賢い方法を使います。
  if (rankingData.items.length > 0) {
    // データが1件以上あることを確認
    // ★★★ Object.keys() の解説 ★★★
    // Object.keys(オブジェクト) は、そのオブジェクトが持つ「キー（プロパティ名）」を
    // 配列として取り出すための便利な命令です。
    // rankingData.items[0] は、ランキングの最初の商品のデータです。
    // { rank: 1, itemName: "商品名1", ... }
    // なので、Object.keys(rankingData.items[0]) を実行すると、
    // ["rank", "itemName", "itemPrice", "itemCaption", "itemUrl", "shopName", "shopUrl", "genreId"]
    // という配列が手に入ります。
    const headers = Object.keys(rankingData.items[0]);

    // 取り出したキーの配列を使って、一つずつ<th>（見出しセル）を作ります。
    headers.forEach((headerText) => {
      const th = document.createElement("th"); // <th></th> を作成
      th.textContent = headerText; // <th>rank</th> のようにテキストを設定
      // スタイル設定
      th.style.border = "1px solid black";
      th.style.padding = "5px";
      th.style.backgroundColor = "#f2f2f2"; // 背景色を少し灰色に
      headerRow.appendChild(th); // <tr> の中に <th> を追加
    });
  }
  // 最後に、完成したヘッダー行を<thead>に、その<thead>を<table>に追加します。
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // --- 処理の順番 4: テーブルのボディ（データ部分）を作成 ---
  // <tbody>を作り、ここに各商品のデータ行を追加していきます。
  const tbody = document.createElement("tbody"); // <tbody></tbody> を作成

  // rankingData.items 配列の各商品データ（item）に対して、繰り返し処理を行います。
  rankingData.items.forEach((item) => {
    const row = document.createElement("tr"); // 1商品につき1つの行<tr>を作成

    // ★★★ Object.values() の解説 ★★★
    // Object.values(オブジェクト) は、キーに対応する「値」を配列として取り出す命令です。
    // item が { rank: 1, itemName: "商品名1", ... } だとすると、
    // Object.values(item) を実行すると、
    // [1, "商品名1", "1111", "売れてます", ...]
    // という値だけの配列が手に入ります。
    const values = Object.values(item);

    // 取り出した値の配列を使って、一つずつ<td>（データセル）を作ります。
    values.forEach((value) => {
      const cell = document.createElement("td"); // <td></td> を作成
      cell.textContent = value; // <td>1</td> のようにテキストを設定
      cell.style.border = "1px solid black";
      cell.style.padding = "5px";
      row.appendChild(cell); // <tr> の中に <td> を追加
    });

    // 完成したデータ行を<tbody>に追加します。
    tbody.appendChild(row);
  });
  // 完成したボディを<table>に追加します。
  table.appendChild(tbody);

  // --- 処理の順番 5: 完成したテーブルをHTMLに追加 ---
  // これまでメモリ上で作ってきたテーブル全体を、実際にページに表示させます。
  document.body.appendChild(table); // <body>の末尾に<table>を追加
}

// ===================================================================================
// STEP 2: 作成した関数（設計図）を使って、実際にランキングテーブルを作成・表示する
// ===================================================================================

// 1. 月間ランキングのテーブルを作成
createRankingTable(ranking.monthlyRanking, "月間ランキング");

// 2. 週間ランキングのテーブルを作成
createRankingTable(ranking.weeklyRanking, "週間ランキング");
