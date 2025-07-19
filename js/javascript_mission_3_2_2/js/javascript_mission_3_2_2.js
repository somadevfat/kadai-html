/*
『 山田「今日○○円しかないや」、佐藤「俺は○○円あるよ」、山田「二人で○○円かあ」 』
上記文中の名前の部分と○○の部分をすぐ書き換えられるようにして『算術演算子』と『文字列連結演算子』を使って結果の文章を『Console(コンソール)』に出力しましょう。
「javascript_mission_3_2_2.js」ファイルを作成して解答してください。
*/
const YMADA_BALANCE = 10;
const SATO_BALANCE = 20;

console.log(
  "『 山田「今日" +
    YMADA_BALANCE +
    "円しかないや」、佐藤「俺は" +
    SATO_BALANCE +
    "円あるよ」、山田「二人で" +
    (YMADA_BALANCE + SATO_BALANCE) +
    "円かあ」 』"
);
