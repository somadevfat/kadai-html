/*
ロト6の確率を出す！
「総合課題4-3」で作成した課題を利用して、フォームに入力した数値を10000回連続でコンピュータが抽選した場合の、各等数の確率を小数点以下2桁まで表示してください。
『HTML』で下記の入力フォームを作り結果を表示しましょう。
--------------------
[1～43の数値] [1～43の数値] [1～43の数値] [1～43の数値] [1～43の数値] [1～43の数値] ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください

ここにエラー表示 ←入力チェックにエラーがある場合はここに表示

[確率を見る] ←ボタンをクリックしたら下記を表示する(※ボタンは、エラーなど入力がきちんとされていない場合は押せないようにして下さい)

当選結果：
1等：○○.○○% ←ここに結果を表示してください
2等：○○.○○% ←ここに結果を表示してください
3等：○○.○○% ←ここに結果を表示してください
4等：○○.○○% ←ここに結果を表示してください
5等：○○.○○% ←ここに結果を表示してください
ハズレ：○○.○○% ←ここに結果を表示してください
--------------------

「javascript_general_mission_4_5.js」ファイルを作成して解答してください。
*/

const userNumber1 = document.getElementById("user_number_1");
const userNumber2 = document.getElementById("user_number_2");
const userNumber3 = document.getElementById("user_number_3");
const userNumber4 = document.getElementById("user_number_4");
const userNumber5 = document.getElementById("user_number_5");
const userNumber6 = document.getElementById("user_number_6");
const numberInputs = document.querySelectorAll(".number-input");

const errorMessage = document.getElementById("error_message");
const checkButton = document.getElementById("check_button");

const resultDisplay1 = document.getElementById("result_display1");
const resultDisplay2 = document.getElementById("result_display2");
const resultDisplay3 = document.getElementById("result_display3");
const resultDisplay4 = document.getElementById("result_display4");
const resultDisplay5 = document.getElementById("result_display5");
const resultDisplay6 = document.getElementById("result_display6");

const userInput = [
  userNumber1,
  userNumber2,
  userNumber3,
  userNumber4,
  userNumber5,
  userNumber6,
];

//ランダム最大
const maxValue = 43;

// ==================================================
// 関数定義
// ==================================================

/**
 * 0から指定された最大値未満のランダムな整数を生成します。
 * test でラッキーナンバーを1にできる
 */
function randomDrowing(maxValue, test) {
  const random = test
    ? Number(1)
    : Number(Math.floor(Math.random() * maxValue + 1));
  return random;
}

/**
 * コンピュータの抽選番号データ（オブジェクト）にランダムな値を設定します。
//ここはテスト上記関係ない
 */
function conDataAddRandam(comData, keys) {
  const drawnNumbers = new Set(); // 生成した数値を記録するSet（Setは重複を許さない）

  // Setのサイズがkeysの長さになるまでループを続ける
  while (drawnNumbers.size < keys.length) {
    const randomNumber = randomDrowing(maxValue, false);
    drawnNumbers.add(randomNumber); // Setなので重複は無視させる
  }

  // Setを配列に変換して、comDataに格納する
  const uniqueNumbersArray = Array.from(drawnNumbers);
  keys.forEach((key, index) => {
    comData[key]["value"] = uniqueNumbersArray[index];
  });
}

/**
 * 入力フィールドの値が指定された条件を満たしているか検証（バリデーション）します。
 */
function validation() {
  // 上限の数字を変数として定義 今回は9

  // RegExpコンストラクタとテンプレートリテラルで正規表現を動的に作成
  // 0からmaxDigitまでの数字のみを許可する正規表現
  const regex = new RegExp(`^([1-3]?[0-9]|4[0-3])$`);

  // 全ての入力がバリデーションを通過するかチェック
  const valiCheck = userInput.map((inp) => {
    return regex.test(inp.value);
  });
  //console.log("バリ判定各所:", valiCheck);

  // every() を使って、全ての入力が条件を満たしているか最終確認
  const everyCheck = valiCheck.every((value) => value);
  //console.log("バリ判定every:", everyCheck);
  const validateInputs = () => {
    // 入力された値（空でないもの）を配列に格納
    const values = [];
    numberInputs.forEach((input) => {
      if (input.value !== "") {
        values.push(input.value);
      }
    });
    // Setオブジェクトを使って重複をチェック
    // Setは重複する値を持てないため、元の配列の長さとSetのサイズを比較すれば重複がわかる
    return new Set(values).size === values.length;
  };
  // バリデーション結果に応じてボタンの活性/非活性とエラーメッセージを制御
  if (everyCheck && validateInputs()) {
    checkButton.disabled = false;
    errorMessage.textContent = ``;
  } else {
    checkButton.disabled = true;
    errorMessage.textContent = `入力が 空 または 0~43 の 重複 しない 数字 を入力してください`;
  }
}

/*
 * 抽選処理を実行し、当選結果を画面に表示します。
 */

const thousandDrowing = Number(10000);
let number1 = Number(0);
let number2 = Number(0);
let number3 = Number(0);
let number4 = Number(0);
let number5 = Number(0);
let number6 = Number(0);
function drowing() {
  //-------- ユーザーデータ作成 -----------
  // ユーザーの入力値を { '1': { value: 1 }, '2': { value: 2 } ... } という形式のオブジェクトに変換
  const userDataObject = userInput.reduce((acc, inp, index) => {
    const id = index + 1;
    // 入力値は文字列なので、比較のために数値に変換
    acc[id] = { value: Number(inp.value) };
    return acc;
  }, {});
  //console.log("ユーザーデータ:", userDataObject);

  // ユーザーデータのキー（'1', '2', '3'）を取得
  const userKey = Object.keys(userDataObject);

  //-------- COMデータ作成 -----------
  // ユーザーデータと同じ構造でCOMデータを作成し、valueを0で初期化
  const comNumbersData = userKey.reduce((acc, key) => {
    acc[key] = { value: Number(0) };
    return acc;
  }, {});

  // COMデータにランダムな値を設定
  conDataAddRandam(comNumbersData, userKey);
  //console.log("COMデータ:", comNumbersData);

  //----------テスト用の関数群（通常は使用しない）------------
  function testUserInput() {
    userKey.forEach((key, index) => {
      userDataObject[key][`value`] = index;
    }, {});
  }
  function testUserReverse() {
    const keyCount = userKey.length;
    userKey.forEach((key, index) => {
      userDataObject[key]["value"] = keyCount - 1 - index;
    });
  }
  function testComInput() {
    userKey.forEach((key, index) => {
      comNumbersData[key][`value`] = index;
    }, {});
  }
  function testComReverse() {
    const keyCount = userKey.length;
    userKey.forEach((key, index) => {
      comNumbersData[key]["value"] = keyCount - 1 - index;
    });
  }
  // テストを実行する場合は以下のコメントアウトを外す
  //testUserInput();
  //testComInput();
  //testUserReverse();
  //testComReverse();

  //-------- ボックス判定 -----------
  // ユーザーとCOMの数値をそれぞれ配列に変換
  const conArray = userKey.map((key) => {
    return Number(comNumbersData[key][`value`]);
  });
  const userArray = userKey.map((key) => {
    return Number(userDataObject[key][`value`]);
  });
  //console.log(`conArray (before sort) = ${conArray}`);
  //console.log(`userArray (before sort) = ${userArray}`);

  //console.log(`conArray (after sort) = ${conArray}`);
  //console.log(`userArray (after sort) = ${userArray}`);
  // ラッキーナンバー randomDrowing(maxValue,true=確実に1外代入 false=maxValueの乱数);
  const luckyComNumver = randomDrowing(maxValue, false);

  //console.log(`ラッキーナンバー= ${luckyComNumver}`);
  const luckyCheck = userKey.map((key) => {
    return luckyComNumver === userArray[key - 1];
  });
  //console.log(`ラッキーチェック = ${luckyCheck}`);
  // ラッキー配列で一つでもtrueならtrueをevery
  const lackyMarge = luckyCheck.some((value) => value);

  // 要素が一致数
  const boxCheckArray = userArray.filter((userNumber) =>
    conArray.includes(userNumber)
  );
  const resultCount = boxCheckArray.length;

  //console.log("ボックス判定（各桁）:", boxCheckArray);

  const boxResult = Number(resultCount) === Number(conArray.length);
  //console.log("ボックス判定（every）:", boxResult);

  //-------- 結果表示 -----------
  /*
  let userDisplay = "";
  let comDisplay = "";
  // ユーザーとCOMの番号を画面に表示

  userKey.forEach((key) => {
    userDisplay += `[${userDataObject[key][`value`]}]`;
  });
  userNumbersDisplay.textContent = `${userDisplay}`;
  userKey.forEach((key) => {
    comDisplay += `[${comNumbersData[key][`value`]}]`;
  });
  comNumbersDisplay.textContent = `${comDisplay} `;
  */
  // 判定結果に応じて当選内容を表示

  if (boxResult) {
    number1++;
  } else if (resultCount === 5 && lackyMarge) {
    number2++;
  } else if (resultCount === 5) {
    number3++;
  } else if (resultCount === 4) {
    number4++;
  } else if (resultCount === 3) {
    number5++;
  } else {
    number6++;
  }
}
function thousand() {
  number1 = 0;
  number2 = 0;
  number3 = 0;
  number4 = 0;
  number5 = 0;
  number6 = 0;
  for (let i = 0; i < thousandDrowing; i++) {
    drowing();
  }
  resultDisplay1.textContent = ((number1 / thousandDrowing) * 100).toFixed(2);
  resultDisplay2.textContent = ((number2 / thousandDrowing) * 100).toFixed(2);
  resultDisplay3.textContent = ((number3 / thousandDrowing) * 100).toFixed(2);
  resultDisplay4.textContent = ((number4 / thousandDrowing) * 100).toFixed(2);
  resultDisplay5.textContent = ((number5 / thousandDrowing) * 100).toFixed(2);
  resultDisplay6.textContent = ((number6 / thousandDrowing) * 100).toFixed(2);
}
// ==================================================
// イベントリスナーの設定
// ==================================================

// 各入力フィールドでフォーカスが外れた時（blur）にバリデーションを実行
userInput.forEach((inp) => {
  inp.addEventListener(`blur`, validation);
});

// ボタンがクリックされた時に抽選処理を実行
checkButton.addEventListener(`click`, thousand);

// ==================================================
// 初期化処理
// ==================================================

// ページ読み込み時には、入力が不完全なためボタンを非活性化しておく
checkButton.disabled = true;
