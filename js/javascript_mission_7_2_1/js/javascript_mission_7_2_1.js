/*
下記の問題を『switch文』を使って作成しよう。
下記を『HTML』に表示して、
1～47の数値を入力出来るフォームを作成し、入力した数値によって該当する都道府県を『HTML』に表示するプログラムを書きなさい。
———————————
[数値]←入力フォーム

[何県？]←ボタン

解答：〇〇です。←ボタンが押されたら該当する都道府県を表示する
———————————

「javascript_mission_7_2_1.js」ファイルを作成して解答してください。
*/

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const prefecture = document.getElementById("prefecture");
  const output = document.getElementById("output");
  const prefectureValue = parseInt(prefecture.value); //intへ
  let message;
  switch (prefectureValue) {
    case 1:
      message = "北海道";
      break;
    case 2:
      message = "青森県";
      break;
    case 3:
      message = "岩手県";
      break;
    case 4:
      message = "宮城県";
      break;
    case 5:
      message = "秋田県";
      break;
    case 6:
      message = "山形県";
      break;
    case 7:
      message = "福島県";
      break;
    case 8:
      message = "茨城県";
      break;
    case 9:
      message = "栃木県";
      break;
    case 10:
      message = "群馬県";
      break;
    case 11:
      message = "埼玉県";
      break;
    case 12:
      message = "千葉県";
      break;
    case 13:
      message = "東京都";
      break;
    case 14:
      message = "神奈川県";
      break;
    case 15:
      message = "新潟県";
      break;
    case 16:
      message = "富山県";
      break;
    case 17:
      message = "石川県";
      break;
    case 18:
      message = "福井県";
      break;
    case 19:
      message = "山梨県";
      break;
    case 20:
      message = "長野県";
      break;
    case 21:
      message = "岐阜県";
      break;
    case 22:
      message = "静岡県";
      break;
    case 23:
      message = "愛知県";
      break;
    case 24:
      message = "三重県";
      break;
    case 25:
      message = "滋賀県";
      break;
    case 26:
      message = "京都府";
      break;
    case 27:
      message = "大阪府";
      break;
    case 28:
      message = "兵庫県";
      break;
    case 29:
      message = "奈良県";
      break;
    case 30:
      message = "和歌山県";
      break;
    case 31:
      message = "鳥取県";
      break;
    case 32:
      message = "島根県";
      break;
    case 33:
      message = "岡山県";
      break;
    case 34:
      message = "広島県";
      break;
    case 35:
      message = "山口県";
      break;
    case 36:
      message = "徳島県";
      break;
    case 37:
      message = "香川県";
      break;
    case 38:
      message = "愛媛県";
      break;
    case 39:
      message = "高知県";
      break;
    case 40:
      message = "福岡県";
      break;
    case 41:
      message = "佐賀県";
      break;
    case 42:
      message = "長崎県";
      break;
    case 43:
      message = "熊本県";
      break;
    case 44:
      message = "大分県";
      break;
    case 45:
      message = "宮崎県";
      break;
    case 46:
      message = "鹿児島県";
      break;
    case 47:
      message = "沖縄県";
      break;
    default:
      message = "無効な都道府県番号です。1から47までの数字を入力してください。";
  }
  console.log(prefecture.value);
  output.textContent = message;
});
