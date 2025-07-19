/*
任意の順位と文字の色を『 引数(ひきすう) 』として渡すと、ネット投票での三國志キャラクターランキング（1～20位）の
「配列（変数の集合体）」の中から、その順位のキャラクター名と文字色を返す『関数(かんすう)』を「const 関数名 = function ( 引数 ){ }」の形で作り、
結果の 『返り値(戻り値)』を受け取って引数に指定された文字色で『HTML』にキャラクター名を出力しましょう。
※『 引数(ひきすう) 』を渡さない場合の『 デフォルト引数(ディフォルト値) 』も設定しましょう。「javascript_mission_6_2_1.js」ファイルを作成して解答してください。
*/
const characterRankingList = [
  "1位：趙雲",
  "2位：関羽",
  "3位：諸葛亮",
  "4位：劉備",
  "5位：馬超",
  "6位：張飛",
  "7位：曹操",
  "8位：黄忠",
  "9位：姜維",
  "10位：周瑜",
  "11位：呂布",
  "12位：夏候惇",
  "13位：甘寧",
  "14位：司馬懿",
  "15位：張遼",
  "16位：孫策",
  "17位：孫堅",
  "18位：郭嘉",
  "19位：陸遜",
  "20位：孫権",
];
//解答をここから下に書く

const ranking = function (rank = 5, color = `red`) {
  if (rank > 0 && rank < 21) {
    const value = characterRankingList[rank - 1];
    let element = document.createElement("p");
    element.textContent = value;
    element.style.color = color;
    return element;
  } else {
    let element = document.createElement("p");
    element.textContent = "0以上20以下で入力して下さい" + ` 入力値= ` + rank;
    element.style.color = `red`;
    return element;
  }
};

const chararank = ranking(21, "blue");

document.body.appendChild(chararank);
