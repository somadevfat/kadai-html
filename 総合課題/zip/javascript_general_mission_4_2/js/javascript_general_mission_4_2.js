/*
ナンバーズ10を作る！
フォームに入力した数値とコンピュータが抽選した数値から当選結果を表示してください。
当選ルール：
番号が全て一致し番号の並び順番も一緒の場合→ストレート当選
番号が全て一致→ボックス当選
その他→ハズレ
『HTML』で下記の入力フォームを作り結果を表示しましょう。
--------------------
[0から9の数値] [0から9の数値] [0から9の数値] [0から9の数値][0から9の数値] [0から9の数値] [0から9の数値][0から9の数値] [0から9の数値] [0から9の数値] ←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください

ここにエラー表示 ←入力チェックにエラーがある場合はここに表示

[当たっているかな] ←ボタンをクリックしたら下記を表示する(※ボタンは、エラーなど入力がきちんとされていない場合は押せないようにして下さい)

USER：[数値][数値][数値][数値][数値][数値][数値][数値][数値][数値] ←ユーザーが入力した数値を表示してください
COM：[数値][数値][数値][数値][数値][数値][数値][数値][数値][数値] ←コンピューターの抽選した数値を表示してください

当選結果：ストレートorボックスorハズレ ←ここに結果を表示してください
--------------------

「javascript_general_mission_4_2.js」ファイルを作成して解答してください。
*/

/*4-1から変えた場所
  ・id取得
  ・user,comの結果表示ロジック

/*変えればよかった場所
  ・id取得ロジックなんかmapを使ってできそう
*/
const userNumber1 = document.getElementById("user_number_1");
const userNumber2 = document.getElementById("user_number_2");
const userNumber3 = document.getElementById("user_number_3");
const userNumber4 = document.getElementById("user_number_4");
const userNumber5 = document.getElementById("user_number_5");
const userNumber6 = document.getElementById("user_number_6");
const userNumber7 = document.getElementById("user_number_7");
const userNumber8 = document.getElementById("user_number_8");
const userNumber9 = document.getElementById("user_number_9");
const userNumber10 = document.getElementById("user_number_10");
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
  userNumber7,
  userNumber8,
  userNumber9,
  userNumber10,
];

// ==================================================
// 関数定義
// ==================================================

/**
 * 0から指定された最大値未満のランダムな整数を生成します。
 * @param {number} maxValue - 生成する乱数の最大値（この値は含まない）
 * @returns {number} 0からmaxValue-1までのランダムな整数
 */
function randomDrowing(maxValue) {
  const random = Number(Math.floor(Math.random() * maxValue));
  return random;
}

/**
 * コンピュータの抽選番号データ（オブジェクト）にランダムな値を設定します。
 * @param {object} comData - コンピュータの抽選番号を格納するオブジェクト
 * @param {string[]} keys - オブジェクトのキーの配列
 */
function conDataAddRandam(comData, keys) {
  keys.forEach((key) => {
    comData[key][`value`] = randomDrowing(9);
  });
}

/**
 * 入力フィールドの値が指定された条件を満たしているか検証（バリデーション）します。
 */
function validation() {
  // 上限の数字を変数として定義 今回は9
  const maxDigit = 9;

  // RegExpコンストラクタとテンプレートリテラルで正規表現を動的に作成
  // 0からmaxDigitまでの数字のみを許可する正規表現
  const regex = new RegExp(`^[0-${maxDigit}]$`);

  // 全ての入力がバリデーションを通過するかチェック
  const valiCheck = userInput.map((inp) => {
    return regex.test(inp.value);
  });
  console.log("バリ判定各所:", valiCheck);

  // every() を使って、全ての入力が条件を満たしているか最終確認
  const everyCheck = valiCheck.every((value) => value);
  console.log("バリ判定every:", everyCheck);

  // バリデーション結果に応じてボタンの活性/非活性とエラーメッセージを制御
  if (everyCheck) {
    checkButton.disabled = false;
    errorMessage.textContent = ``;
  } else {
    checkButton.disabled = true;
    errorMessage.textContent = `入力が 空 または 0~9 の数字を入力してください`;
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

  //-------- ストレート判定 -----------
  // ユーザーとCOMの各桁の数値が、順番も含めて一致するかを判定
  const straightCheckArray = userKey.map((key) => {
    return comNumbersData[key][`value`] === userDataObject[key][`value`];
  });
  console.log("ストレート判定（各桁）:", straightCheckArray);

  // 全ての桁が一致する場合にtrueとなる
  const straightResult = straightCheckArray.every((value) => value);
  console.log("ストレート判定（every）:", straightResult);

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

  // ボックス判定のため、両方の配列を同じルール（降順）でソートする
  // これにより、数字の並び順が違っても、含まれる数字が同じであれば配列の内容が一致する
  conArray.sort((a, b) => b - a);
  userArray.sort((a, b) => b - a);
  console.log(`conArray (after sort) = ${conArray}`);
  console.log(`userArray (after sort) = ${userArray}`);

  // ソート後の配列を比較し、全ての要素が一致するか判定
  const boxCheckArray = userKey.map((key) => {
    // ソートされた配列のインデックスは0から始まるため、key-1でアクセス
    return conArray[key - 1] === userArray[key - 1];
  });
  console.log("ボックス判定（各桁）:", boxCheckArray);

  // 全ての要素が一致する場合にtrueとなる
  const boxResult = boxCheckArray.every((value) => value);
  console.log("ボックス判定（every）:", boxResult);

  //-------- 結果表示 -----------
  let userDisplay = "";
  let comDisplay = "";
  // ユーザーとCOMの番号を画面に表示
  userKey.forEach((key) => {
    userDisplay += `${userDataObject[key][`value`]}`;
  });
  userNumbersDisplay.textContent = `${userDisplay}`;
  userKey.forEach((key) => {
    comDisplay += `${comNumbersData[key][`value`]}`;
  });
  comNumbersDisplay.textContent = `${comDisplay} `;
  // 判定結果に応じて当選内容を表示
  if (straightResult) {
    resultDisplay.textContent = `ストレート当選`;
  } else if (boxResult) {
    resultDisplay.textContent = `ボックス当選`;
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
