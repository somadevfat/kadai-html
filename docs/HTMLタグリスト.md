# HTMLタグリスト - やりたいことで探すHTMLタグ

## 📄 文書の基本構造

| タグ | やりたいこと | 使い方 |
|------|------------|--------|
| `<!DOCTYPE html>` | HTML5文書であることを宣言する | `<!DOCTYPE html>` |
| `<html>` | HTML文書全体を囲む | `<html lang="ja">...</html>` |
| `<head>` | ページの設定・メタ情報を定義する | `<head>...</head>` |
| `<body>` | ページの実際のコンテンツを書く | `<body>...</body>` |
| `<title>` | ブラウザのタブに表示するタイトルを設定する | `<title>ページタイトル</title>` |

## 🔗 ハイパーリンク

| タグ | やりたいこと | 使い方 |
|------|------------|--------|
| `<a href="">` | 他のページにリンクする | `<a href="https://example.com">リンクテキスト</a>` |
| `<a href="#id">` | 同じページ内の特定の場所にジャンプする | `<a href="#section1">セクション1へ</a>` |
| `<a href="mailto:">` | メールアプリを起動する | `<a href="mailto:someone@example.com">メール送信</a>` |
| `<a href="tel:">` | 電話アプリを起動する | `<a href="tel:+81901234567">電話をかける</a>` |

## 📝 テキストの装飾・強調

| タグ | やりたいこと | 使い方 |
|------|------------|--------|
| `<h1>～<h6>` | 見出しを作る（数字が小さいほど大きい見出し） | `<h1>大見出し</h1>` |
| `<p>` | 段落を作る | `<p>これは段落です。</p>` |
| `<strong>` | 重要な文字を太字にする | `<strong>重要</strong>` |
| `<em>` | 文字を斜体にして強調する | `<em>強調</em>` |
| `<br>` | 改行する | `一行目<br>二行目` |
| `<span>` | 文字の一部だけスタイルを変える | `<span style="color:red">赤い文字</span>` |

## 📜 リスト作成

| タグ | やりたいこと | 使い方 |
|------|------------|--------|
| `<ul>` | 順序のないリスト（箇条書き）を作る | `<ul><li>項目1</li><li>項目2</li></ul>` |
| `<ol>` | 順序のあるリスト（番号付き）を作る | `<ol><li>第一</li><li>第二</li></ol>` |
| `<li>` | リストの各項目を作る | `<li>リスト項目</li>` |

## 🖼️ 画像・メディア

| タグ | やりたいこと | 使い方 |
|------|------------|--------|
| `<img>` | 画像を表示する | `<img src="image.jpg" alt="画像の説明">` |
| `<video>` | 動画を埋め込む | `<video src="movie.mp4" controls></video>` |
| `<audio>` | 音声を埋め込む | `<audio src="sound.mp3" controls></audio>` |

## 📊 表（テーブル）

| タグ | やりたいこと | 使い方 |
|------|------------|--------|
| `<table>` | 表全体を作る | `<table>...</table>` |
| `<tr>` | 表の行を作る | `<tr>...</tr>` |
| `<th>` | 表の見出しセルを作る | `<th>見出し</th>` |
| `<td>` | 表のデータセルを作る | `<td>データ</td>` |

## 📝 フォーム（入力欄）

| タグ | やりたいこと | 使い方 |
|------|------------|--------|
| `<form>` | フォーム全体を作る | `<form action="/submit" method="post">...</form>` |
| `<input type="text">` | 一行の文字入力欄を作る | `<input type="text" name="username">` |
| `<input type="password">` | パスワード入力欄を作る | `<input type="password" name="password">` |
| `<input type="email">` | メールアドレス入力欄を作る | `<input type="email" name="email">` |
| `<input type="submit">` | 送信ボタンを作る | `<input type="submit" value="送信">` |
| `<textarea>` | 複数行の文字入力欄を作る | `<textarea name="message"></textarea>` |
| `<select>` | 選択肢（ドロップダウン）を作る | `<select><option>選択肢1</option></select>` |
| `<button>` | ボタンを作る | `<button>クリック</button>` |

## 🎨 レイアウト・構造

| タグ | やりたいこと | 使い方 |
|------|------------|--------|
| `<div>` | ブロック要素のコンテナを作る | `<div>...</div>` |
| `<header>` | ページのヘッダー部分を作る | `<header>...</header>` |
| `<nav>` | ナビゲーションメニューを作る | `<nav>...</nav>` |
| `<main>` | メインコンテンツ部分を作る | `<main>...</main>` |
| `<section>` | セクション（章・節）を作る | `<section>...</section>` |
| `<article>` | 記事のコンテンツを作る | `<article>...</article>` |
| `<aside>` | サイドバーや補足情報を作る | `<aside>...</aside>` |
| `<footer>` | ページのフッター部分を作る | `<footer>...</footer>` |

## 🎯 メタ情報・設定

| タグ | やりたいこと | 使い方 |
|------|------------|--------|
| `<meta charset="">` | 文字エンコーディングを設定する | `<meta charset="UTF-8">` |
| `<meta name="viewport">` | スマホ対応の表示設定をする | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| `<meta name="description">` | 検索結果に表示される説明文を設定する | `<meta name="description" content="ページの説明">` |
| `<link rel="stylesheet">` | CSSファイルを読み込む | `<link rel="stylesheet" href="style.css">` |
| `<script>` | JavaScriptを読み込む・書く | `<script src="script.js"></script>` |

## 💡 使用上のポイント

### よく使う組み合わせ
- **基本的なページ構造**: `html` → `head` + `body` → `header` + `main` + `footer`
- **リンク付きナビゲーション**: `nav` → `ul` → `li` → `a`
- **記事コンテンツ**: `article` → `h1` + `p` + `img`
- **お問い合わせフォーム**: `form` → `input` + `textarea` + `button`

### 覚えておくべき属性
- `id`: 要素に一意の名前をつける（CSSやJavaScriptで使用）
- `class`: 要素にクラス名をつける（CSSでスタイル適用）
- `style`: 要素に直接CSSを適用する
- `src`: 画像や動画のファイルパスを指定
- `alt`: 画像の代替テキストを指定（アクセシビリティ重要）
- `href`: リンク先のURLを指定

---

作成日: 2025年 7月 10日 21:56:34 JST 