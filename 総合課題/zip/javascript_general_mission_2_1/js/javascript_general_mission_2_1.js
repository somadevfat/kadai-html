/*
会員登録フォームに入力された各値のチェックをして結果を表示してください。
『HTML』で下記の入力フォームを作り結果を表示しましょう。
———————————
・メールアドレスを入力してください。
※国際基準RFC（Request For Comments）に準拠したメールアドレスのみ
[ ]@[ ] ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください。
ここにエラー表示 ←入力チェックにエラーがある場合はここに表示。

・パスワードを入力してください。
※半角英数のみ10文字以上
[ ] ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください。
ここにエラー表示 ←入力チェックにエラーがある場合はここに表示。

・パスワードを入力してください。（確認用）
※半角英数のみ10文字以上
[ ] ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください。
ここにエラー表示 ←入力チェックにエラーがある場合はここに表示。

・ユーザー名を入力して下さい。
※半角英数のみ6文字以上32文字以内
[ ] ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください。
ここにエラー表示 ←入力チェックにエラーがある場合はここに表示。

[送信] ←ボタンをクリックしたら結果を表示する。(※ボタンは、エラーなど入力がきちんとされていない場合は押せないようにして下さい)

結果 「送信準備完了」とメッセージをアラートで表示してください。
———————————

「javascript_general_mission_2_1.js」ファイルを作成して解答してください。
*/
//const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//const isValid = emailRegex.test(email.value);

// 各要素をidで取得
const mailInputs = document.getElementById("mail");
const mailEndInputs = document.getElementById("mailEnd");
const passwordInput = document.getElementById("password");
const rePasswordInput = document.getElementById("rePassword");
const usernameInput = document.getElementById("username");
const sendBtn = document.getElementById("sendBtn");
const mailResult = document.getElementById("mailResult");
const passwordResult = document.getElementById("passwordResult");
const rePasswordResult = document.getElementById("rePasswordResult");
const usernameResult = document.getElementById("usernameRsulet");
const sendResult = document.getElementById("sendResult");
let isButtonEnabled = { mail: false, pass: false, rePass: false, user: false };

//バリで関数
function validate(text, regex) {
  // 引数で受け取った正規表現でテストする
  return regex.test(text);
}
//メールバリデーション処理
mailInputs.addEventListener("blur", validateEmail);
mailEndInputs.addEventListener("blur", validateEmail);
function validateEmail() {
  const mailAddres = mailInputs.value + "@" + mailEndInputs.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (validate(mailAddres, emailRegex)) {
    mailResult.textContent = "有効なメールアドレスです";
    isButtonEnabled.mail = true;
  } else {
    mailResult.textContent = "無効なメールアドレスです";
    isButtonEnabled.mail = false;
  }
  isBtn();
}

//パスワードバリデ処理

passwordInput.addEventListener("blur", validatePassword);
rePasswordInput.addEventListener("blur", validateRePassword);
function validatePassword() {
  // 半角英数10文字の正規表現
  const passVlue = passwordInput.value;

  const passwordRegex = /^[a-zA-Z0-9]{10,}$/;
  if (validate(passVlue, passwordRegex)) {
    passwordResult.textContent = "";
    isButtonEnabled.pass = true;
  } else {
    passwordResult.textContent = "半角英数10文字で入力してください";
    isButtonEnabled.pass = false;
  }
  isBtn();
}

function validateRePassword() {
  const passVlue = passwordInput.value;
  const rePassVlue = rePasswordInput.value;

  if (passVlue === rePassVlue) {
    rePasswordResult.textContent = "";
    isButtonEnabled.rePass = true;
  } else {
    rePasswordResult.textContent = `パスワードが一致しません`;
    isButtonEnabled.rePass = false;
  }
  isBtn();
}

//ユーザーネーム
usernameInput.addEventListener("blur", validateUsername);
function validateUsername() {
  // 半角英数10文字の正規表現
  const username = usernameInput.value;

  const usenameRegex = /^[a-zA-Z0-9]{6,32}$/;
  if (validate(username, usenameRegex)) {
    usernameResult.textContent = "";
    isButtonEnabled.user = true;
  } else {
    usernameResult.textContent =
      "半角英数6文字以上32文字以内で入力してください";
    isButtonEnabled.user = false;
  }
  isBtn();
}
sendBtn.disabled = true; // 初期ロード時にボタンを無効にする
isBtn();
//ボタン処理
sendBtn.addEventListener(`click`, () => {
  sendResult.textContent = `結果: 送信完了`;
});

//ボタンの状態を制御
function isBtn() {
  if (
    isButtonEnabled.mail &&
    isButtonEnabled.pass &&
    isButtonEnabled.rePass &&
    isButtonEnabled.user
  ) {
    sendBtn.disabled = false;
    alert(`送信準備完了`);
  } else {
    sendBtn.disabled = true;
  }
}
