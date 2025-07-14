# 📘 CSS総合チートシート

CSSの主要なプロパティと概念を網羅したリファレンスです。

---

## 1. CSSの基本

### 適用方法

```html
<!-- 1. 外部CSSファイル（推奨） -->
<link rel="stylesheet" href="styles.css">

<!-- 2. <style> タグ -->
<head>
  <style>
    body { background-color: #f0f0f0; }
  </style>
</head>

<!-- 3. インラインstyle属性 -->
<p style="color: blue;">青いテキスト</p>
```

### コメント

```css
/* これはCSSのコメントです */
```

### CSSリセット

```css
/* シンプルなリセット例 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

## 2. セレクタ

### 基本セレクタ

| セレクタ | 説明 | 例 |
| :--- | :--- | :--- |
| `*` | ユニバーサルセレクタ（すべての要素） | `* { color: black; }` |
| `p` | 要素セレクタ | `p { line-height: 1.6; }` |
| `.class` | クラスセレクタ | `.note { font-style: italic; }` |
| `#id` | IDセレクタ | `#header { background: #fff; }` |

### 属性セレクタ

| セレクタ | 説明 |
| :--- | :--- |
| `[attr]` | `attr`属性を持つ要素 |
| `[attr=val]` | `attr`属性の値が`val`と完全一致 |
| `[attr~=val]` | `attr`属性の値に`val`が単語として含まれる |
| `[attr|=val]` | `attr`属性の値が`val`または`val-`で始まる |
| `[attr^=val]` | `attr`属性の値が`val`で始まる |
| `[attr$=val]` | `attr`属性の値が`val`で終わる |
| `[attr*=val]` | `attr`属性の値に`val`が部分文字列として含まれる |

### 結合子

| セレクタ | 説明 | 例 |
| :--- | :--- | :--- |
| `A B` | 子孫セレクタ（Aの中にあるB） | `div p { color: gray; }` |
| `A > B` | 子セレクタ（Aの直下にあるB） | `ul > li { list-style: none; }` |
| `A + B` | 隣接兄弟セレクタ（Aの直後にあるB） | `h2 + p { margin-top: 0; }` |
| `A ~ B` | 一般兄弟セレクタ（Aの後にあるすべての兄弟B）| `h2 ~ p { color: #555; }` |

### 疑似クラス

| セレクタ | 説明 |
| :--- | :--- |
| `:hover` | マウスカーソルが乗っている |
| `:focus` | フォーカスが当たっている |
| `:active` | クリックされている最中 |
| `:link`, `:visited` | 未訪問・訪問済みリンク |
| `:first-child`, `:last-child` | 最初の/最後の子要素 |
| `:nth-child(n)` | n番目の子要素（`2n`, `odd`, `even`なども可） |
| `:not(selector)` | `selector`に一致しない要素 |

### 疑似要素

| セレクタ | 説明 |
| :--- | :--- |
| `::before` | 要素の直前にコンテンツを挿入 |
| `::after` | 要素の直後にコンテンツを挿入 |
| `::first-letter` | 最初の文字 |
| `::first-line` | 最初の行 |
| `::selection` | ユーザーが選択した部分 |

---

## 3. ボックスモデル

![ボックスモデル](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model-standard-small.png)

```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px; /* 内側の余白 */
  border: 5px solid black; /* 境界線 */
  margin: 15px; /* 外側の余白 */
  box-sizing: border-box; /* width/heightにpaddingとborderを含む */
}
```

---

## 4. レイアウト

### display

| 値 | 説明 |
| :--- | :--- |
| `block` | ブロックレベル要素。幅と高さを持ち、前後に改行が入る。 |
| `inline` | インライン要素。コンテンツ分の幅しか持たず、改行されない。 |
| `inline-block` | `inline`のように振る舞うが、`block`のように幅と高さを持てる。 |
| `none` | 要素を非表示にする。 |
| `flex` | フレックスボックスレイアウトを有効にする。 |
| `grid` | グリッドレイアウトを有効にする。 |

### position

| 値 | 説明 |
| :--- | :--- |
| `static` | デフォルト値。通常のフローに従う。 |
| `relative` | 通常の位置を基準に相対的に配置 (`top`, `right`, `bottom`, `left`)。 |
| `absolute` | 最も近い `position: relative` の親要素を基準に絶対的に配置。 |
| `fixed` | ビューポートを基準に固定配置。スクロールしても動かない。 |
| `sticky` | 通常は `relative` だが、スクロールして特定の位置に来ると `fixed` になる。 |

### Flexbox

コンテナに指定:
`display: flex;`
`flex-direction: row | column;`
`justify-content: flex-start | center | space-between;`
`align-items: stretch | center | flex-start;`
`flex-wrap: nowrap | wrap;`
`gap: <value>;`

アイテムに指定:
`flex-grow: <number>;`
`flex-shrink: <number>;`
`flex-basis: <length> | auto;`
`flex: <grow> <shrink> <basis>;`
`align-self: auto | flex-start | center;`

### Grid

コンテナに指定:
`display: grid;`
`grid-template-columns: <track-size> ...;` (e.g., `1fr 1fr 200px`)
`grid-template-rows: <track-size> ...;`
`gap: <value>;`

アイテムに指定:
`grid-column-start: <line>;`
`grid-column-end: <line>;`
`grid-row-start: <line>;`
`grid-row-end: <line>;`
`grid-column: <start> / <end>;`
`grid-row: <start> / <end>;`

---

## 5. タイポグラフィ

```css
.text-style {
  font-family: "Helvetica", sans-serif;
  font-size: 16px; /* or 1rem, 1.2em */
  font-weight: normal; /* bold, 400, 700 */
  font-style: normal; /* italic */
  line-height: 1.5;
  text-align: left; /* right, center, justify */
  text-decoration: none; /* underline, line-through */
  text-transform: none; /* capitalize, uppercase, lowercase */
  letter-spacing: 0.5px;
  word-spacing: 2px;
}
```

---

## 6. 色と背景

```css
.element {
  color: #333333; /* 文字色 (HEX) */
  background-color: rgba(0, 123, 255, 0.1); /* 背景色 (RGBA) */

  background-image: url('path/to/image.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; /* contain, 100% auto */

  opacity: 0.9; /* 要素全体の透明度 */
}
```

---

## 7. 変形、トランジション、アニメーション

### transform

```css
.transformed {
  transform: translateX(50px) rotate(10deg) scale(1.1);
}
```

### transition

```css
.button {
  transition: background-color 0.3s ease-in-out, transform 0.3s ease;
}
.button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
```

### animation

```css
@keyframes slide-in {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated-element {
  animation: slide-in 0.5s forwards;
}
```

---

## 8. レスポンシブデザイン

### メディアクエリ

```css
/* モバイル向けスタイルを基本とする */
.container {
  width: 100%;
}

/* 768px以上の画面幅で適用 */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}
```

### ビューポート単位

| 単位 | 説明 |
| :--- | :--- |
| `vw` | ビューポートの幅に対する割合 (1vw = 1%) |
| `vh` | ビューポートの高さに対する割合 (1vh = 1%) |
| `vmin` | `vw`と`vh`の小さい方の値 |
| `vmax` | `vw`と`vh`の大きい方の値 |

---

## 9. その他

### CSS変数 (Custom Properties)

```css
:root {
  --primary-color: #007bff;
  --font-size-base: 16px;
}

body {
  font-size: var(--font-size-base);
}

a {
  color: var(--primary-color);
}
```

### シャドウ

```css
.box {
  box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
}
.text {
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}
```

### フィルター

```css
.image {
  filter: grayscale(50%) blur(2px);
}
```
