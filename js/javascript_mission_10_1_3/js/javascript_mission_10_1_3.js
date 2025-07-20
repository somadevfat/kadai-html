/*
下記のテキストをオブジェクトデータ化してみましょう。
データの構成は、属国,名,よみ,字,あざなよみ,生年,没年で作成。
作成したオブジェクトデータからデータを呼び出して『HTML』にテーブルで表を作成しましょう。
データの構成は、属国,名,よみ,字,あざなよみ,生年,没年で作成。
「javascript_mission_10_1_3.js」ファイルを作成して解答してください。

蜀,劉備,りゅう び,玄徳,げんとく,161,223
蜀,諸葛亮,しょかつ りょう,孔明,こうめい,181,234
蜀,関羽,かん う,雲長,うんちょう,0,220
蜀,張飛,ちょう ひ,益徳,えきとく,0,221
蜀,趙雲,ちょう うん,子龍,しりゅう,161,229
蜀,黄忠,こう ちゅう,漢升,かんしょう,0,220
蜀,馬超,ば ちょう,孟起,もうき,176,222
魏,曹操,そう そう,孟徳,もうとく,155,220
魏,郭嘉,かく か,奉孝,ほうこう,170,207
魏,徐庶,じょ しょ,元直,げんちょく,0,234
魏,夏侯淳,かこう とん,元譲,げんじょう,0,220
魏,夏侯淵,かこう えん,妙才,みょうさい,0,219
魏,司馬懿,しば い,仲達,ちゅうたつ,179,251
魏,張遼,ちょう りょう,文遠,ぶんえん,165,222
魏,荀彧,じゅん いく,文若,ぶんじゃく,163,212
呉,孫策,そん さく,伯符,はくふ,175,200
呉,孫権,そん けん,仲謀,ちゅうぼう,182,252
呉,周瑜,しゅう ゆ,公瑾,こうきん,175,211
呉,太史慈,たいし じ,子義,しぎ,166,206
呉,黄蓋,こう がい,公覆,こうふく,0,215
呉,甘寧,かん ねい,興覇,こうは,0,215
呉,呂蒙,りょ もう,子明,しめい,178,219
呉,魯粛,ろ しゅく,子敬,しけい,172,217
呉,陸遜,りく そん,伯言,はくげん,183,245
*/
const textData = `蜀,劉備,りゅう び,玄徳,げんとく,161,223
蜀,諸葛亮,しょかつ りょう,孔明,こうめい,181,234
蜀,関羽,かん う,雲長,うんちょう,0,220
蜀,張飛,ちょう ひ,益徳,えきとく,0,221
蜀,趙雲,ちょう うん,子龍,しりゅう,161,229
蜀,黄忠,こう ちゅう,漢升,かんしょう,0,220
蜀,馬超,ば ちょう,孟起,もうき,176,222
魏,曹操,そう そう,孟徳,もうとく,155,220
魏,郭嘉,かく か,奉孝,ほうこう,170,207
魏,徐庶,じょ しょ,元直,げんちょく,0,234
魏,夏侯淳,かこう とん,元譲,げんじょう,0,220
魏,夏侯淵,かこう えん,妙才,みょうさい,0,219
魏,司馬懿,しば い,仲達,ちゅうたつ,179,251
魏,張遼,ちょう りょう,文遠,ぶんえん,165,222
魏,荀彧,じゅん いく,文若,ぶんじゃく,163,212
呉,孫策,そん さく,伯符,はくふ,175,200
呉,孫権,そん けん,仲謀,ちゅうぼう,182,252
呉,周瑜,しゅう ゆ,公瑾,こうきん,175,211
呉,太史慈,たいし じ,子義,しぎ,166,206
呉,黄蓋,こう がい,公覆,こうふく,0,215
呉,甘寧,かん ねい,興覇,こうは,0,215
呉,呂蒙,りょ もう,子明,しめい,178,219
呉,魯粛,ろ しゅく,子敬,しけい,172,217
呉,陸遜,りく そん,伯言,はくげん,183,245`.trim(); //インデントを削除

// 複数行のテキストデータを1人ずつのデータに分ける処理
// textData.split("\n") → 改行で区切って各行（1人分のデータ）を配列にする
const result = textData.split("\n").map((line) => {
  // 各行をカンマで区切って各項目を配列にする
  // line.split(",") → ["蜀", "劉備", "りゅう び", "玄徳", "げんとく", "161", "223"]
  // 分割代入で各変数に割り当てる
  const [country, name, yomi, alias, aliasYomi, birth, death] = line.split(",");

  // 配列のデータをオブジェクトに変換して返す
  // 各項目を日本語のプロパティ名にマッピング
  return {
    属国: country, // 1番目の要素 → 属国
    名: name, // 2番目の要素 → 名前
    よみ: yomi, // 3番目の要素 → 読み仮名
    字: alias, // 4番目の要素 → 字（あざな）
    あざなよみ: aliasYomi, // 5番目の要素 → 字の読み仮名
    生年: Number(birth), // 6番目の要素 → 生年（文字列を数値に変換）
    没年: Number(death), // 7番目の要素 → 没年（文字列を数値に変換）
  };
});

//console.log(result);
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

crTable({ items: result }, "三国志表");
