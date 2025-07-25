/*
ロト6を作る！
フォームに入力した数値とコンピュータが抽選した数値から当選結果を表示する。
当選ルール：
ロト6は、コンピュータが抽選した6個の「本数字」と1個の「ボーナス数字」が、フォームに入力した数値といくつ一致しているかで、1等～5等までの当せんが決まります。
『HTML』で下記の入力フォームを作り結果を表示しましょう。
--------------------
入力フォームには1～43の43個の数字の中から異なる6個の数字を入力できる
[1～43の数値] [1～43の数値] [1～43の数値] [1～43の数値] [1～43の数値] [1～43の数値] ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください

ここにエラー表示 ←入力チェックにエラーがある場合はここに表示

[当たっているかな] ←ボタンをクリックしたら下記を表示する(※ボタンは、エラーなど入力がきちんとされていない場合は押せないようにして下さい)

USER：[数値][数値][数値][数値][数値][数値] ←ユーザーが入力した数値を表示してください
COM：[数値][数値][数値][数値][数値][数値]ボーナス[数値] ←コンピューターの抽選した数値を表示してください

当選結果：○等当選しましたorハズレ ←ここに結果を表示してください
--------------------

「javascript_general_mission_4_3.js」ファイルを作成して解答してください。
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
const userNumbersDisplay = document.getElementById("user_numbers_display");
const comNumbersDisplay = document.getElementById("com_numbers_display");
const resultDisplay = document.getElementById("result_display");

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
  console.log("バリ判定各所:", valiCheck);

  // every() を使って、全ての入力が条件を満たしているか最終確認
  const everyCheck = valiCheck.every((value) => value);
  console.log("バリ判定every:", everyCheck);
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

/**
 * 抽選処理を実行し、当選結果を画面に表示します。
 */
function drowing() {
  //-------- ユーザーデータ作成 -----------
  // ユーザーの入力値を { '1': { value: 1 }, '2': { value: 2 } ... } という形式のオブジェクトに変換
  const userDataObject = userInput.reduce((acc, inp, index) => {
    const id = index + 1;
    // 入力値は文字列なので、比較のために数値に変換
    acc[id] = { value: Number(inp.value) };
    return acc;
  }, {});
  console.log("ユーザーデータ:", userDataObject);

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
  console.log("COMデータ:", comNumbersData);

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
  console.log(`conArray (before sort) = ${conArray}`);
  console.log(`userArray (before sort) = ${userArray}`);

  //(降順）でソートする
  // これにより、数字の並び順が違っても、含まれる数字が同じであれば配列の内容が一致する
  conArray.sort((a, b) => b - a);
  userArray.sort((a, b) => b - a);
  console.log(`conArray (after sort) = ${conArray}`);
  console.log(`userArray (after sort) = ${userArray}`);
  // ラッキーナンバー randomDrowing(maxValue,true=確実に1外代入 false=maxValueの乱数);
  const luckyComNumver = randomDrowing(maxValue, false);

  console.log(`ラッキーナンバー= ${luckyComNumver}`);
  const luckyCheck = userKey.map((key) => {
    return luckyComNumver === userArray[key - 1];
  });
  console.log(`ラッキーチェック = ${luckyCheck}`);
  // ラッキー配列で一つでもtrueならtrueをevery
  const lackyMarge = luckyCheck.some((value) => value);

  // ソート後の配列を比較し、要素が一致数
  const boxCheckArray = userKey.map((key) => {
    return conArray[key - 1] === userArray[key - 1];
  });
  console.log("ボックス判定（各桁）:", boxCheckArray);

  // true5個判定 trueは1falseは0
  const resultCount = boxCheckArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const boxResult = boxCheckArray.every((value) => value);
  console.log("ボックス判定（every）:", boxResult);

  //-------- 結果表示 -----------
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
  // 判定結果に応じて当選内容を表示

  if (boxResult) {
    resultDisplay.textContent = `1等 に当選しました`;
  } else if (resultCount === 5 && lackyMarge) {
    resultDisplay.textContent = `2等 に当選しました`;
  } else if (resultCount === 5) {
    resultDisplay.textContent = `3等 に当選しました`;
  } else if (resultCount === 4) {
    resultDisplay.textContent = `4等 に当選しました`;
  } else if (resultCount === 3) {
    resultDisplay.textContent = `5等 に当選しました`;
  } else {
    resultDisplay.textContent = `ハズレ`;
  }
}

// ==================================================
// イベントリスナーの設定
// ==================================================

// 各入力フィールドでフォーカスが外れた時（blur）にバリデーションを実行
userInput.forEach((inp) => {
  inp.addEventListener(`blur`, validation);
});

// [当たっているかな]ボタンがクリックされた時に抽選処理を実行
checkButton.addEventListener(`click`, drowing);

// ==================================================
// 初期化処理
// ==================================================

// ページ読み込み時には、入力が不完全なためボタンを非活性化しておく
checkButton.disabled = true;
