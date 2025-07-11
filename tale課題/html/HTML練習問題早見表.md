# HTML 練習問題早見表

## 練習問題 1：ページジャンプ（リンク）

### 外部サイトへのリンク

```html
<a href="https://example.com">リンクテキスト</a>
```

### 同一サービス内のページへのリンク

```html
<a href="./contact.html">お問い合わせ</a>
<a href="../index.html">トップページ</a>
```

### 同一ページ内のジャンプ

```html
<!-- リンク部分 -->
<a href="#section1">セクション1へ</a>

<!-- ジャンプ先 -->
<h2 id="section1">セクション1</h2>
```

## 練習問題 2：画像表示

### 基本的な画像表示

```html
<img src="images/sheep.jpg" alt="羊の画像" />
```

### 画像のサイズ指定

```html
<img src="images/sheep.jpg" alt="羊の画像" width="300" height="200" />
```

### 代替テキストの表示（画像がない場合）

```html
<img src="images/notfound.jpg" alt="存在しない画像" />
```

## 練習問題 3：表組（テーブル）

### 基本的な表組

```html
<table>
  <tr>
    <th>見出し1</th>
    <th>見出し2</th>
  </tr>
  <tr>
    <td>データ1</td>
    <td>データ2</td>
  </tr>
</table>
```

### セル結合

```html
<table>
  <tr>
    <th colspan="2">結合された見出し</th>
  </tr>
  <tr>
    <td rowspan="2">縦結合</td>
    <td>データ</td>
  </tr>
  <tr>
    <td>データ</td>
  </tr>
</table>
```

## 練習問題 4：箇条書き（リスト）

### 番号なしリスト

```html
<ul>
  <li>項目1</li>
  <li>項目2</li>
  <li>項目3</li>
</ul>
```

### 番号ありリスト

```html
<ol>
  <li>項目1</li>
  <li>項目2</li>
  <li>項目3</li>
</ol>
```

### 階層リスト

```html
<ul>
  <li>
    項目1
    <ul>
      <li>サブ項目1</li>
      <li>サブ項目2</li>
    </ul>
  </li>
  <li>項目2</li>
</ul>
```

## 練習問題 5：入力欄（フォーム）

### テキスト入力

```html
<form>
  <label for="name">名前:</label>
  <input type="text" id="name" name="name" />
</form>
```

### 日付入力

```html
<label for="birth">生年月日:</label>
<input type="date" id="birth" name="birth" />
```

### ラジオボタン（一意選択）

```html
<input type="radio" id="choice1" name="answer" value="1" />
<label for="choice1">選択肢1</label>
<input type="radio" id="choice2" name="answer" value="2" />
<label for="choice2">選択肢2</label>
```

### チェックボックス（複数選択）

```html
<input type="checkbox" id="option1" name="options" value="1" />
<label for="option1">選択肢1</label>
<input type="checkbox" id="option2" name="options" value="2" />
<label for="option2">選択肢2</label>
```

### 隠しフィールド

```html
<input type="hidden" name="user_id" value="123" />
```

### 選択ボックス

```html
<select name="prefecture">
  <option value="tokyo">東京都</option>
  <option value="osaka">大阪府</option>
  <option value="kyoto">京都府</option>
</select>
```

### 複数選択ボックス

```html
<select name="hobbies" multiple>
  <option value="reading">読書</option>
  <option value="sports">スポーツ</option>
  <option value="music">音楽</option>
</select>
```

### 複数行テキスト入力

```html
<textarea name="comment" rows="4" cols="50">
初期テキスト
</textarea>
```

### ファイルアップロード

```html
<input type="file" name="upload" accept="image/*" />
```

## 練習問題 6：プログラムコード表示

### インラインコード

```html
<code>console.log("Hello World");</code>
```

### コードブロック

```html
<pre>
<code>
function example() {
    console.log("Hello World");
    return true;
}
</code>
</pre>
```

### 整形済みテキスト

```html
<pre>
    スペース    や改行
    がそのまま表示されます
</pre>
```

## 練習問題 7：時間・日にち表示

### 時間要素

```html
<time datetime="2024-01-15">2024年1月15日</time>
```

### 時刻付き

```html
<time datetime="2024-01-15T14:30">2024年1月15日 14:30</time>
```

### 相対時間

```html
<time datetime="P3D">3日前</time>
```

## 練習問題 8：文章強調

### 太字（重要性）

```html
<strong>重要なテキスト</strong>
```

### 太字（見た目）

```html
<b>太字のテキスト</b>
```

### 斜体（強調）

```html
<em>強調されたテキスト</em>
```

### 斜体（見た目）

```html
<i>斜体のテキスト</i>
```

### 高い重要性

```html
<mark>ハイライトされたテキスト</mark>
```

## 練習問題 9：引用文章

### 短い引用

```html
<q>短い引用文です</q>
```

### ブロック引用

```html
<blockquote>
  <p>長い引用文や複数行の引用文です。</p>
</blockquote>
```

### 引用元付き

```html
<blockquote cite="https://example.com">
  <p>引用文です。</p>
</blockquote>
<cite>引用元：Example Site</cite>
```

## 練習問題 10：音声・動画埋め込み

### 動画埋め込み

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  お使いのブラウザでは動画を再生できません。
</video>
```

### 属性付き動画

```html
<video width="320" height="240" controls autoplay muted loop>
  <source src="movie.mp4" type="video/mp4" />
</video>
```

### 音声埋め込み

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  お使いのブラウザでは音声を再生できません。
</audio>
```

## 練習問題 11：ページ内にページ読み込み

### iframe 基本

```html
<iframe src="https://example.com" width="600" height="400">
  お使いのブラウザではiframeを表示できません。
</iframe>
```

### YouTube 動画埋め込み

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/動画ID"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>
```

### セキュリティ設定付き

```html
<iframe
  src="https://example.com"
  width="600"
  height="400"
  sandbox="allow-scripts allow-same-origin"
>
</iframe>
```

## 基本的な HTML 構造

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ページタイトル</title>
  </head>
  <body>
    <!-- コンテンツをここに書く -->
  </body>
</html>
```

## よく使う属性

| 属性     | 説明               | 例                    |
| -------- | ------------------ | --------------------- |
| `id`     | 一意の識別子       | `id="unique-id"`      |
| `class`  | クラス名（CSS 用） | `class="button"`      |
| `style`  | インラインスタイル | `style="color: red;"` |
| `title`  | ツールチップ       | `title="詳細情報"`    |
| `lang`   | 言語               | `lang="ja"`           |
| `alt`    | 代替テキスト       | `alt="画像の説明"`    |
| `src`    | ソース URL         | `src="image.jpg"`     |
| `href`   | リンク先 URL       | `href="page.html"`    |
| `target` | リンクの開き方     | `target="_blank"`     |

---

**使い方のポイント：**

- この早見表のコードをベースに、必要な部分を変更して使用してください
- 実際の課題では、文字列や属性値を問題に応じて適切に変更する必要があります
- 複数の要素を組み合わせて使用することも多いです
