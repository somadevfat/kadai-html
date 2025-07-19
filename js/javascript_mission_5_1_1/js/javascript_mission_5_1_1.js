/*
下記の「イベントハンドラ一覧」の各項目のイベントを『HTML』に要素を作成し、「addEventListener()関数でイベント登録」を書いて結果を『Console(コンソール)』に出力、あるいは『HTML』に出力しましょう。
「javascript_mission_5_1_1.js」ファイルを作成して解答してください。

blur	focus	要素が一度アクティブになり、フォーカスを失ったとき	input,select,textarea
change	event	要素の値が変更され、要素が入力フォーカスを失ったとき	input,select,textarea
click	mouse	マウスのボタンを１度押して離したとき	ほとんどのタグ
dblclick	mouse	マウスのボタンを押して離すを２度続けたとき	ほとんどのタグ
focus	focus	要素がフォーカスを得たとき	input,select,textarea
input	event	要素に値が入力されたとき	input,select,textarea
invalid	event	送信時に要素の値が制約を満たさないとき
(例)input typr=”url”でurl以外の場合など	input
select	uievent	テキストが選択されたとき	input,textarea
keydown	keyboard	いずれかのキーが押されたとき	a,area,button,
input,label,option,
select,textarea
keyup	keyboard	いずれかのキーが離されたとき	
keypress	keyboard	いずれかのキーが押されて離されたとき
*/

// フォーム要素を作成
const form = document.createElement("form");

// ラベル
const label = document.createElement("label");
label.textContent = "名前: ";

// 入力フィールド（テキスト）
const input = document.createElement("input");
input.type = "text";

// 入力フィールド（URL）
const inputUrl = document.createElement("input");
inputUrl.type = "url";

// セレクトボックス
const select = document.createElement("select");
const option1 = document.createElement("option");
option1.value = "選択肢1";
option1.textContent = "選択肢1";
const option2 = document.createElement("option");
option2.value = "選択肢2";
option2.textContent = "選択肢2";
select.appendChild(option1);
select.appendChild(option2);

// テキストエリア
const textarea = document.createElement("textarea");

// ボタン
const button = document.createElement("button");
button.textContent = "送信";

// イベントリスナー
input.addEventListener("blur", () => console.log("input: blur"));
input.addEventListener("focus", () => console.log("input: focus"));
input.addEventListener("change", () => console.log("input: change"));
input.addEventListener("input", () => console.log("input: input"));
input.addEventListener("keydown", () => console.log("input: keydown"));
input.addEventListener("keyup", () => console.log("input: keyup"));
input.addEventListener("keypress", () => console.log("input: keypress"));
input.addEventListener("select", () => console.log("input: select"));

inputUrl.addEventListener("invalid", () => console.log("inputUrl: invalid"));

select.addEventListener("change", () => console.log("select: change"));
select.addEventListener("blur", () => console.log("select: blur"));
select.addEventListener("focus", () => console.log("select: focus"));

textarea.addEventListener("select", () => console.log("textarea: select"));
textarea.addEventListener("blur", () => console.log("textarea: blur"));
textarea.addEventListener("focus", () => console.log("textarea: focus"));
textarea.addEventListener("change", () => console.log("textarea: change"));
textarea.addEventListener("input", () => console.log("textarea: input"));

button.addEventListener("click", () => console.log("button: click"));
button.addEventListener("dblclick", () => console.log("button: dblclick"));
button.addEventListener("keydown", () => console.log("button: keydown"));
button.addEventListener("keyup", () => console.log("button: keyup"));
button.addEventListener("keypress", () => console.log("button: keypress"));

// フォームに要素を追加
form.appendChild(label);
form.appendChild(input);
form.appendChild(inputUrl);
form.appendChild(select);
form.appendChild(textarea);
form.appendChild(button);

// フォームをbodyに追加
document.body.appendChild(form);
