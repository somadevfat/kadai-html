/*
下記のオブジェクトデータを没年が221以上のデータをまとめて、新しくcharactersというオブジェクトを作成する処理を作りましょう！
データの構成はそのまま、属国,名,よみ,字,あざなよみ,生年,没年で作成。
「javascript_mission_10_1_2.js」ファイルを作成して解答してください。
*/
const shoku = [
  {
    属国: "蜀",
    名: "劉備",
    よみ: "りゅう び",
    字: "玄徳",
    あざなよみ: "げんとく",
    生年: 161,
    没年: 223,
  },
  {
    属国: "蜀",
    名: "諸葛亮",
    よみ: "しょかつ りょう",
    字: "孔明",
    あざなよみ: "こうめい",
    生年: 181,
    没年: 234,
  },
  {
    属国: "蜀",
    名: "関羽",
    よみ: "かん う",
    字: "雲長",
    あざなよみ: "うんちょう",
    生年: 0,
    没年: 220,
  },
  {
    属国: "蜀",
    名: "張飛",
    よみ: "ちょう ひ",
    字: "益徳",
    あざなよみ: "えきとく",
    生年: 0,
    没年: 221,
  },
  {
    属国: "蜀",
    名: "趙雲",
    よみ: "ちょう うん",
    字: "子龍",
    あざなよみ: "しりゅう",
    生年: 161,
    没年: 229,
  },
  {
    属国: "蜀",
    名: "黄忠",
    よみ: "こう ちゅう",
    字: "漢升",
    あざなよみ: "かんしょう",
    生年: 0,
    没年: 220,
  },
  {
    属国: "蜀",
    名: "馬超",
    よみ: "ば ちょう",
    字: "孟起",
    あざなよみ: "もうき",
    生年: 176,
    没年: 222,
  },
];

const gi = [
  {
    属国: "魏",
    名: "曹操",
    よみ: "そう そう",
    字: "孟徳",
    あざなよみ: "もうとく",
    生年: 155,
    没年: 220,
  },
  {
    属国: "魏",
    名: "郭嘉",
    よみ: "かく か",
    字: "奉孝",
    あざなよみ: "ほうこう",
    生年: 170,
    没年: 207,
  },
  {
    属国: "魏",
    名: "徐庶",
    よみ: "じょ しょ",
    字: "元直",
    あざなよみ: "げんちょく",
    生年: 0,
    没年: 234,
  },
  {
    属国: "魏",
    名: "夏侯淳",
    よみ: "かこう とん",
    字: "元譲",
    あざなよみ: "げんじょう",
    生年: 0,
    没年: 220,
  },
  {
    属国: "魏",
    名: "夏侯淵",
    よみ: "かこう えん",
    字: "妙才",
    あざなよみ: "みょうさい",
    生年: 0,
    没年: 219,
  },
  {
    属国: "魏",
    名: "司馬懿",
    よみ: "しば い",
    字: "仲達",
    あざなよみ: "ちゅうたつ",
    生年: 179,
    没年: 251,
  },
  {
    属国: "魏",
    名: "張遼",
    よみ: "ちょう りょう",
    字: "文遠",
    あざなよみ: "ぶんえん",
    生年: 165,
    没年: 222,
  },
  {
    属国: "魏",
    名: "荀彧",
    よみ: "じゅん いく",
    字: "文若",
    あざなよみ: "ぶんじゃく",
    生年: 163,
    没年: 212,
  },
];

const go = [
  {
    属国: "呉",
    名: "孫策",
    よみ: "そん さく",
    字: "伯符",
    あざなよみ: "はくふ",
    生年: 175,
    没年: 200,
  },
  {
    属国: "呉",
    名: "孫権",
    よみ: "そん けん",
    字: "仲謀",
    あざなよみ: "ちゅうぼう",
    生年: 182,
    没年: 252,
  },
  {
    属国: "呉",
    名: "周瑜",
    よみ: "しゅう ゆ",
    字: "公瑾",
    あざなよみ: "こうきん",
    生年: 175,
    没年: 211,
  },
  {
    属国: "呉",
    名: "太史慈",
    よみ: "たいし じ",
    字: "子義",
    あざなよみ: "しぎ",
    生年: 166,
    没年: 206,
  },
  {
    属国: "呉",
    名: "黄蓋",
    よみ: "こう がい",
    字: "公覆",
    あざなよみ: "こうふく",
    生年: 0,
    没年: 215,
  },
  {
    属国: "呉",
    名: "甘寧",
    よみ: "かん ねい",
    字: "興覇",
    あざなよみ: "こうは",
    生年: 0,
    没年: 215,
  },
  {
    属国: "呉",
    名: "呂蒙",
    よみ: "りょ もう",
    字: "子明",
    あざなよみ: "しめい",
    生年: 178,
    没年: 219,
  },
  {
    属国: "呉",
    名: "魯粛",
    よみ: "ろ しゅく",
    字: "子敬",
    あざなよみ: "しけい",
    生年: 172,
    没年: 217,
  },
  {
    属国: "呉",
    名: "陸遜",
    よみ: "りく そん",
    字: "伯言",
    あざなよみ: "はくげん",
    生年: 183,
    没年: 245,
  },
];

//マージ
const all = [...shoku, ...gi, ...go];
//フィルター
const characters = all.filter((num) => num.没年 >= 221);

console.log(characters);
