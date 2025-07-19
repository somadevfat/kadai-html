/*
下記の問題を『for文』を使って作成しよう。
下記の参考画像の「項目」を『HTML』に表示して、
項目部分のテーブルがクリックされたら100人分の表を作成し、行を分かりするために白色とグレーを交互に背景色に施すプログラムを書きなさい。
※注意としてクリックを何回押しても100人分だけ表示すること。
*/
document.body.innerHTML += `
  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-family: Arial, sans-serif;" id="table">
    <thead>
      <tr>
        <th id = "topNam" style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: darkmagenta; color: white; font-weight: bold; white-space: nowrap;">番号</th>
        <th id = "topUser" style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: darkmagenta; color: white; font-weight: bold; white-space: nowrap;">ユーザー名</th>
        <th id = "topId" style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: darkmagenta; color: white; font-weight: bold; white-space: nowrap;">ログインID</th>
        <th id = "topPs" style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: darkmagenta; color: white; font-weight: bold; white-space: nowrap;">パスワード</th>
      </tr>
    </thead>

  </table>`;
let table = document.getElementById(`table`);

function ans() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      table.innerHTML += `
    <tbody>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #888888;">${i}</td>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #888888;">ユーザー名${i}</td>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #888888;">ログインID${i}</td>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #888888;">パスワード${i}</td>
      </tr>
    </tbody>`;
    } else {
      table.innerHTML += `
    <tbody>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #ffffff;">${i}</td>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #ffffff;">ユーザー名${i}</td>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #ffffff;">ログインID${i}</td>
        <td style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: #ffffff;">パスワード${i}</td>
      </tr>
    </tbody>`;
    }
  }
}
let stats = false;
let topBtn = [];
topBtn[0] = document.getElementById("topNam");
topBtn[1] = document.getElementById("topUser");
topBtn[2] = document.getElementById("topId");
topBtn[3] = document.getElementById("topPs");
//クリックイベント

for (let i = 0; i < topBtn.length; i++) {
  topBtn[i].addEventListener("click", function () {
    console.log("クリックされました");
    if (!stats) ans();
    stats = true;
  });
}
/*
    <th id = "topNam"
        <th id = "topUser" 
        <th id = "topId" style="border: 1px solid #ddd; padding: 10px; text-align: left; background-color: darkmagenta; color: white; font-weight: bold; white-space: nowrap;">ログインID</th>
        <th id = "topPs"
        */
