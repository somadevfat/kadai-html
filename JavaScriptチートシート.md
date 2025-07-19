以下は、JavaScript で DOM 操作を行う際によく使うメソッドやプロパティをまとめたチートシートです。必要に応じてコピー＆ペーストしてご活用ください。

---

## 1. 要素の取得・選択

```js
// 単一要素取得
const elemById = document.getElementById("id名");
const elemByQuery = document.querySelector(".class名"); // CSSセレクタ
// 複数要素取得
const elemsByClass = document.getElementsByClassName("class名");
const elemsByTag = document.getElementsByTagName("タグ名");
const elemsByQuery = document.querySelectorAll("ul > li"); // NodeList
```

---

## 2. 要素の生成・挿入

```js
// 要素の作成
const p = document.createElement("p");
p.textContent = "こんにちは！";

// 追加挿入
parentElement.appendChild(p); // 親の末尾に追加
parentElement.insertBefore(newElem, refElem); // refElemの前に挿入
parentElement.prepend(newElem); // 先頭に挿入
referenceElem.after(newElem); // referenceElemの後に挿入
```

---

## 3. 要素の削除・置換

```js
// 削除
elem.remove(); // 自身を削除
parent.removeChild(childElem); // 親から子要素を削除

// 置換
parent.replaceChild(newElem, oldElem); // oldElemをnewElemで置き換え
```

---

## 4. 属性・プロパティ操作

```js
// 属性操作
elem.getAttribute("属性名"); // 取得
elem.setAttribute("属性名", "値"); // 設定
elem.hasAttribute("属性名"); // 存在確認
elem.removeAttribute("属性名"); // 削除

// プロパティ操作
elem.id = "newId";
elem.className = "classA classB";
elem.value = "入力値"; // input, textarea など
elem.textContent = "テキスト内容";
```

---

## 5. クラス操作

```js
elem.classList.add("active");
elem.classList.remove("hidden");
elem.classList.toggle("open"); // 存在なければ追加、あれば削除
elem.classList.contains("selected"); // 存在チェック
```

---

## 6. スタイル操作

```js
elem.style.color = "red";
elem.style.background = "#eee";
elem.style.cssText = "margin:10px; padding:5px;";
```

---

## 7. イベントリスナー

```js
// イベント追加
elem.addEventListener("click", function (event) {
  console.log("クリックされました");
});

// オプション付き
elem.addEventListener("scroll", handler, { passive: true });

// 削除
elem.removeEventListener("click", handler);
```

---

## 8. DOM ツリーのナビゲーション

```js
elem.parentNode; // 親ノード
elem.children; // 子要素のHTMLCollection
elem.firstElementChild; // 最初の子要素
elem.lastElementChild; // 最後の子要素
elem.nextElementSibling; // 次の兄弟要素
elem.previousElementSibling; // 前の兄弟要素
```

---

## 9. その他便利メソッド

```js
// innerHTML操作（注意：XSSリスクあり）
elem.innerHTML = "<span>HTMLを挿入</span>";

// テキストノードの作成
const text = document.createTextNode("テキストノード");

// ドキュメントフラグメント
const frag = document.createDocumentFragment();
frag.appendChild(item1);
frag.appendChild(item2);
parent.appendChild(frag);

// 少し待ってから処理
setTimeout(() => {
  /* ... */
}, 1000);
requestAnimationFrame(() => {
  /* ... */
});
```

---

### 備考

- `querySelector`系は最初にマッチした要素のみ取得。複数要素を扱う場合は`querySelectorAll`を使う。
- `innerHTML`は便利ですが、外部入力を直接流し込むと XSS のリスクがあるため注意。
- パフォーマンスを考える場合、大量の要素操作はドキュメントフラグメントを活用すると良い。

以上が基本的によく使う DOM 操作のまとめです。状況に応じて組み合わせてお使いください！
