/*
任意の苗字と名前を『 引数(ひきすう) 』として渡すと苗字と名前を繋げてくれる『関数(かんすう)』を「function 関数名 (引数){}」の形で作り、結果の 『返り値(戻り値)』を受け取って『Console(コンソール)』に出力、あるいは『HTML』に出力しましょう。
「javascript_mission_6_1_1.js」ファイルを作成して解答してください。
*/
function names(firstName, lastName) {
  const oname = firstName + lastName;
  console.log(oname);
  return oname;
}
names("岸田", "文雄");
