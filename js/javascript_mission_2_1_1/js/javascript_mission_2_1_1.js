const characterList = [
  "劉備",
  "諸葛亮",
  "関羽",
  "張飛",
  "趙雲",
  "黄忠",
  "馬超",
  "曹操",
  "郭嘉",
  "徐庶",
  "夏侯淳",
  "夏侯淵",
  "司馬懿",
  "張遼",
  "荀彧",
  "孫策",
  "孫権",
  "周瑜",
  "太史慈",
  "黄蓋",
  "甘寧",
  "呂蒙",
  "魯粛",
  "陸遜",
];

/*
配列「characterList」の中の人数を数えて『Console(コンソール)』に出力し、最初から8番目のキャラクター名と最後から8番目のキャラクター名を『Console(コンソール)』に出力して下さい。
「javascript_mission_2_1_1.js」ファイルを作成して解答してください。
*/

//解答をここから下に書く
/*
入力: characterList
出力1: listの配列数
出力2: listの最初から8番目
出力3: listの最後から8番目
*/
let answer1 = characterList.length;
let answer2 = characterList[8 - 1];
let answer3 = characterList[answer1 - 8];
//間違えた回答後ろは0から始まらないため間違い　let answer3 = characterList[answer1 - 8 - 1];

console.log("配列の長さ = " + answer1);
console.log("配列の最初からの8番目の人は  " + answer2);
console.log("配列の最後からの8番目の人は  " + answer3);
