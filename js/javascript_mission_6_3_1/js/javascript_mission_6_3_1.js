/*
引数に渡した 配列「characterList」 から、指定した個数分だけランダムな要素を抽出 して、新しい 「配列（変数の集合体）」 として返す『関数(かんすう)』を
「const 関数名 = ( 引数 ) => { }」の形で作り、結果の 『 返り値(戻り値)』を受け取って 『Console(コンソール)』に出力、あるいは『HTML』に出力しましょう。
「javascript_mission_6_3_1.js」ファイルを作成して解答してください。
*/
const characterList = [
  "趙雲",
  "関羽",
  "諸葛亮",
  "劉備",
  "馬超",
  "張飛",
  "曹操",
  "黄忠",
  "姜維",
  "周瑜",
  "呂布",
  "夏候惇",
  "甘寧",
  "司馬懿",
  "張遼",
  "孫策",
  "孫堅",
  "郭嘉",
  "陸遜",
  "孫権",
];
//解答をここから下に書く

//ランダム値取得関数0~1 *配列の長さでランダムに取得
function getRandomInt() {
  const randam = Math.floor(Math.random() * characterList.length);
  return randam;
}
/*
const multiplyArrayBy = (arr, n) => {
  return arr.map((element) => element * n);
  };
*/
//指定した　回数　ランダムな数値　で　配列から取り出して　新しい配列に入れる
const randamCharacterList = (max) => {
  const result = [];
  for (let i = 0; i < max; i++) {
    result[i] = characterList[getRandomInt()];
  }
  return result;
};
const charas = randamCharacterList(10);

console.log(charas);
