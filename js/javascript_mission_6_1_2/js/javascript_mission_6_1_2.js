/*
任意の半径（radius）cmと任意の高さ（height）cmを、『 引数(ひきすう) 』として渡すと「円柱の体積」を計算してくれる『関数(かんすう)』を「function 関数名 (引数){}」の形で作り、計算結果の 『返り値(戻り値)』を受け取って『Console(コンソール)』に出力する、あるいは『HTML』に出力しましょう。※『 引数(ひきすう) 』を渡さない場合の『 デフォルト引数(ディフォルト値) 』も設定しましょう。
「javascript_mission_6_1_2.js」ファイルを作成して解答してください。
*/
function cylinder(radius = 10, height = 10) {
  const value = radius * radius * Math.PI * height;
  console.log(value);
  return value;
}
cylinder();
