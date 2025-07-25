/*
お届け先登録フォームに入力された各値をチェックして、結果を表示してください。
『HTML』で下記の入力フォームを作り結果を表示しましょう。
———————————
・お名前
姓：[]名：[]←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
ここにエラー表示←入力チェックにエラーがある場合はここに表示

・お名前（ヨミガナ）
姓（セイ）：[]名（メイ）：[]←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
ここにエラー表示←入力チェックにエラーがある場合はここに表示

・お住まい
郵便番号：[]-[]←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
ここにエラー表示←入力チェックにエラーがある場合はここに表示
都道府県：[]▼※セレクトボックス←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
ここにエラー表示←入力チェックにエラーがある場合はここに表示
市区町村：[]←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
ここにエラー表示←入力チェックにエラーがある場合はここに表示
番地：[]←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
ここにエラー表示←入力チェックにエラーがある場合はここに表示
ビル、マンション名：[]←入力部、フォーカスが外れたら入力チェック（バリデーション）を行ってください
ここにエラー表示←入力チェックにエラーがある場合はここに表示

・電話番号：
[]-[]-[]←入力チェックにエラーがある場合はここに表示
ここにエラー表示←入力チェックにエラーがある場合はここに表示

[送信]←ボタンをクリックしたら答えを表示する(※ボタンは、エラーなど入力がきちんとされていない場合は押せないようにして下さい)

「送信準備完了」をアラートで表示してください
———————————

「javascript_general_mission_2_2.js」ファイルを作成して解答してください。
*/

const lastNameInput = document.getElementById("lastName");
const firstNameInput = document.getElementById("firstName");
const nameResult = document.getElementById("nameResult");

const zipCode1Input = document.getElementById("zipCode1");
const zipCode2Input = document.getElementById("zipCode2");
const postNummberResult = document.getElementById("postNummberResult");

const prefectureInput = document.getElementById("prefecture");
const prefectureResult = document.getElementById("prefectureResult");

const cityInput = document.getElementById("city");
const cityResult = document.getElementById("cityResult");

const addressInput = document.getElementById("address");
const addressResult = document.getElementById("addressResult");

const buildingInput = document.getElementById("building");
const buildingResult = document.getElementById("buildingResult");

const tel1Input = document.getElementById("tel1");
const tel2Input = document.getElementById("tel2");
const tel3Input = document.getElementById("tel3");
const telResult = document.getElementById("telResult");

const submitButton = document.getElementById("submitButton");

//文字バリ
class Validator {
  validate(text) {
    text = text.trim();
    if (!text) return "文字を入力してください";
    if (text.length > 50) return "50文字以内で入力してください";
    return "";
  }
}

//カナ入力処理
class KanaValidator extends Validator {
  validate(text) {
    const baseError = super.validate(text);
    if (baseError) return baseError;

    const regex = /^[\u30A0-\u30FF\s]+$/; // カタカナとスペースのみを許可
    if (!regex.test(text)) return "カタカナで入力してください";
    return "";
  }
}

//郵便番号バリデーション処理
class ZipCodeValidator extends Validator {
  validate(zip1, zip2) {
    const zip1Error = super.validate(zip1);
    const zip2Error = super.validate(zip2);

    if (zip1Error || zip2Error) {
      return "郵便番号を入力してください";
    }

    const numRegex = /^\d+$/; // 数字のみを許可

    if (!numRegex.test(zip1) || zip1.length !== 3) {
      return "郵便番号（前半3桁）は半角数字3桁で入力してください";
    }
    if (!numRegex.test(zip2) || zip2.length !== 4) {
      return "郵便番号（後半4桁）は半角数字4桁で入力してください";
    }
    return "";
  }
}
//都道府県バリデーション処理
class PrefectureValidator extends Validator {
  validate(prefecture) {
    const error = super.validate(prefecture);
    if (error) return `選択してください`;
    return "";
  }
}
//市区町村
class CityValidator extends Validator {
  validate(city) {
    const error = super.validate(city);
    if (error) return `市区町村を入力してください`;
    return "";
  }
}
//番地
class AddressValidator extends Validator {
  validate(address) {
    const error = super.validate(address);
    if (error) return `番地を入力してください`;
    return "";
  }
}
//建物名
class BuildingValidator extends Validator {
  validate(building) {
    // 建物名は任意入力なので、入力があった場合のみバリデーションする
    if (building && building.length > 50) {
      return "50文字以内で入力してください";
    }
    return "";
  }
}
class TelValidator extends Validator {
  validate(tel1, tel2, tel3) {
    const fields = [tel1, tel2, tel3];
    if (fields.some((field) => !field.trim())) {
      return "電話番号をすべて入力してください";
    }

    const numRegex = /^\d+$/;
    if (fields.some((field) => !numRegex.test(field))) {
      return "電話番号は半角数字で入力してください";
    }

    return "";
  }
}

//インスタンス
const kanaValidator = new KanaValidator();
const zipCodeValidator = new ZipCodeValidator();
const prefectureValidator = new PrefectureValidator();
const cityValidator = new CityValidator();
const addressValidator = new AddressValidator();
const buildingValidator = new BuildingValidator();
const telValidator = new TelValidator();

const updateSubmitButtonState = () => {
  // エラーメッセージが表示されている要素を配列にまとめる
  const errorElements = [
    nameResult,
    postNummberResult,
    prefectureResult,
    cityResult,
    addressResult,
    buildingResult,
    telResult,
  ];
  // 必須項目（建物名以外）の入力要素を配列にまとめる
  const requiredInputs = [
    lastNameInput,
    firstNameInput,
    zipCode1Input,
    zipCode2Input,
    prefectureInput,
    cityInput,
    addressInput,
    tel1Input,
    tel2Input,
    tel3Input,
  ];

  // someでerrorElementsにテキストが一つも含まれていないかチェック
  const hasError = errorElements.some((element) => element.textContent !== "");

  // someを使い、必須項目が1つでも空かチェック trim()でfirstNameInput.value等の値があるかチェックしてからか判定 一つでも空ならtrue
  const isRequiredEmpty = requiredInputs.some((input) => !input.value.trim());

  // エラーがある、または必須項目が空の場合にボタンを無効化する
  submitButton.disabled = hasError || isRequiredEmpty;
};

//名前
firstNameInput.addEventListener("blur", () => {
  const firstNameValue = firstNameInput.value;
  nameResult.textContent = kanaValidator.validate(firstNameValue);
  updateSubmitButtonState();
});
lastNameInput.addEventListener("blur", () => {
  const lastNameValue = lastNameInput.value;
  nameResult.textContent = kanaValidator.validate(lastNameValue);
  updateSubmitButtonState();
});

//郵便
const validateZip = () => {
  postNummberResult.textContent = zipCodeValidator.validate(
    zipCode1Input.value,
    zipCode2Input.value
  );
  updateSubmitButtonState();
};
zipCode1Input.addEventListener("blur", validateZip);
zipCode2Input.addEventListener("blur", validateZip);

//都道府県
prefectureInput.addEventListener("change", () => {
  prefectureResult.textContent = prefectureValidator.validate(
    prefectureInput.value
  );
  updateSubmitButtonState();
});

//市区町村
cityInput.addEventListener("blur", () => {
  cityResult.textContent = cityValidator.validate(cityInput.value);
  updateSubmitButtonState();
});

//番地
addressInput.addEventListener("blur", () => {
  addressResult.textContent = addressValidator.validate(addressInput.value);
  updateSubmitButtonState();
});

//建物名
buildingInput.addEventListener("blur", () => {
  buildingResult.textContent = buildingValidator.validate(buildingInput.value);
  updateSubmitButtonState();
});

//電話番号
const validateTel = () => {
  telResult.textContent = telValidator.validate(
    tel1Input.value,
    tel2Input.value,
    tel3Input.value
  );
  updateSubmitButtonState();
};
tel1Input.addEventListener("blur", validateTel);
tel2Input.addEventListener("blur", validateTel);
tel3Input.addEventListener("blur", validateTel);

submitButton.addEventListener("click", () => {
  alert("送信準備完了");
});

// 初期状態のボタンを無効化
updateSubmitButtonState();
