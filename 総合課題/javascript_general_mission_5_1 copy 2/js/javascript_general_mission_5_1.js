/*
ポーカーゲームを作ろう！
ジョーカー無しのトランプ52枚で、交換無しのポーカーゲームを作りましょう。
「親」と「子」に5枚ずつカードを配布して、役があるなら「役名」と「親」と「子」の勝ち負けを決め”勝ち”、”負け”、”引分”を表示。
※ハイカード以外の役の場合は同じ役なら”引分”にする。
※トランプは無料素材の画像を使ってください。
ルール：
カードの強さ：A>K>Q>J>10>9>8>7>6>5>4>3>2
カードの組み合わせによる役と強さ：
各スート（ハート、ダイヤ、スペード、クラブ）はそれぞれ13枚ずつで構成されています
*/
/*
1~13のobj
ハート=1、ダイヤ=2、スペード=3、クラブ=4
これらをランダムに引いて組み合わせてドローを定義
set にれて.size,lengthで配列の長さで重複しないようにする
*/
/**
 * ランダムなカード番号を生成します。
 * 1（エース）は14に変換して返します（Aを最強として扱うため）。
 * @param {number} maxValue - カードの最大番号（通常13）
 * @returns {number} - 生成されたカード番号（1は14に変換）
 */
const randomDrawingNumber = (maxValue) => {
  const randam = Math.floor(Math.random() * maxValue + 1);
  if (randam === 1) return 14;
  else return randam;
};

/**
 * @typedef {object} Card
 * @property {number} number - カードの数字（2〜14、14はエース）
 * @property {number} suit - カードのスート（1=ハート、2=ダイヤ、3=スペード、4=クラブ）
 */

/**
 * 重複しない10枚のカードをランダムに生成します。
 * @returns {Card[]} - 10枚のユニークなカードの配列
 */
const CordsDrawing10 = () => {
  const drawnCardStrings = new Set();
  const cards = [];

  while (drawnCardStrings.size < 10) {
    const randomNumber = randomDrawingNumber(13);
    const randomSuit = randomDrawingNumber(4);
    const cardKey = `${randomNumber}-${randomSuit}`;

    if (!drawnCardStrings.has(cardKey)) {
      // 重複がなければセットに追加し、カード配列に格納
      drawnCardStrings.add(cardKey);
      cards.push({ number: randomNumber, suit: randomSuit });
    }
  }
  return cards;
};

/**
 * ポーカーの役の強さを表す定数オブジェクト
 * キーは役の強さの数値、値は役名の文字列
 */
const HAND_RANKS = {
  9: "ROYAL_FLUSH", // ロイヤルフラッシュ
  8: "STRAIGHT_FLUSH", // ストレートフラッシュ
  7: "FOUR_OF_A_KIND", // フォーカード
  6: "FULL_HOUSE", // フルハウス
  5: "FLUSH", // フラッシュ
  4: "STRAIGHT", // ストレート
  3: "THREE_OF_A_KIND", // スリーカード
  2: "TWO_PAIR", // ツーペア
  1: "ONE_PAIR", // ワンペア
  0: "HIGH_CARD", // ハイカード（役なし）
};

/**
 * ポーカーゲームの結果を判定し、親と子の手札と役、勝敗をコンソールに表示します。
 */
const PokerResult = () => {
  const cords10 = CordsDrawing10();

  // 親と子に5枚ずつカードを分割
  const parent = cords10.slice(0, 5);
  const child = cords10.slice(5, 10);

  // 各手札のカード番号ごとの枚数をカウント
  const parentCountNumber = countNumbers(parent);
  const childCountNumber = countNumbers(child);

  // キッカー

  // 役の強さを判定
  const parentResult = getPairHand(parentCountNumber, parent);
  const childResult = getPairHand(childCountNumber, child);

  // 結果をコンソールに出力
  console.log("親の手札:", parent);
  console.log("子の手札:", child);
  console.log("親のカード枚数カウント:", parentCountNumber);
  console.log("子のカード枚数カウント:", childCountNumber);
  console.log("親の役結果:", parentResult);
  console.log("子の役結果:", childResult);

  // 勝敗判定
  if (parentResult > childResult) {
    console.log(`親の勝ち`);
  } else if (parentResult < childResult) {
    console.log(`子の勝ち`);
  } else {
    // 役が同じ場合はキッカーで勝負
    const kickerResult = compareKickers(
      parentCountNumber,
      childCountNumber,
      parentResult
    );
    if (kickerResult === 1) {
      console.log(`親の勝ち`);
    } else if (kickerResult === 2) {
      console.log(`子の勝ち`);
    } else {
      console.log(`引き分け`);
    }
  }

  // 役名を表示
  console.log(`親: ${HAND_RANKS[parentResult]}`);
  console.log(`子: ${HAND_RANKS[childResult]}`);
};

/**
 * 手札のカード番号ごとの枚数をカウントします。
 * @param {Card[]} hand - 手札のカード配列
 * @returns {number[]} - 各カード番号の枚数の配列
 */
function countNumbers(hand) {
  const counts = new Map();
  for (const card of hand) {
    const number = card.number;
    const currentCount = counts.get(number) || 0;
    counts.set(number, currentCount + 1);
  }
  return counts;
}
//キッカー
function compareKickers(cardCountsParent, cardCountsChild, ranksParent) {
  // Mapを[キー, 値]の配列に変換し、値（枚数）で降順、次にキー（数字）で降順にソート
  const cardCountsSortParent = [...cardCountsParent.entries()].sort((a, b) => {
    const countDifference = b[1] - a[1];
    if (countDifference !== 0) return countDifference;
    return b[0] - a[0];
  });
  const cardCountsSortChild = [...cardCountsChild.entries()].sort((a, b) => {
    const countDifference = b[1] - a[1];
    if (countDifference !== 0) return countDifference;
    return b[0] - a[0];
  });

  // 役ごとのキッカー比較
  // ストレートフラッシュ、ストレート、フラッシュ、ロイヤルストレートフラッシュ
  if (
    ranksParent === 9 ||
    ranksParent === 8 ||
    ranksParent === 5 ||
    ranksParent === 4
  ) {
    const parentMax = Math.max(...[...cardCountsParent.keys()]);
    const childMax = Math.max(...[...cardCountsChild.keys()]);
    if (parentMax > childMax) return 1; // 親の勝ち
    if (parentMax < childMax) return 2; // 子の勝ち
    return 0; // 引き分け
  }

  // フォーカード
  if (ranksParent === 7) {
    const parentFourCardNum = cardCountsSortParent[0][0];
    const childFourCardNum = cardCountsSortChild[0][0];
    if (parentFourCardNum > childFourCardNum) return 1;
    if (parentFourCardNum < childFourCardNum) return 2;

    // フォーカードの数字が同じ場合、キッカーを比較
    const parentKicker = cardCountsSortParent[1][0];
    const childKicker = cardCountsSortChild[1][0];
    if (parentKicker > childKicker) return 1;
    if (parentKicker < childKicker) return 2;
    return 0;
  }

  // フルハウス
  if (ranksParent === 6) {
    const parentThreeCardNum = cardCountsSortParent[0][0];
    const childThreeCardNum = cardCountsSortChild[0][0];
    if (parentThreeCardNum > childThreeCardNum) return 1;
    if (parentThreeCardNum < childThreeCardNum) return 2;

    // 3枚組の数字が同じ場合、ペアの数字を比較
    const parentPairNum = cardCountsSortParent[1][0];
    const childPairNum = cardCountsSortChild[1][0];
    if (parentPairNum > childPairNum) return 1;
    if (parentPairNum < childPairNum) return 2;
    return 0;
  }

  // スリーカード
  if (ranksParent === 3) {
    const parentThreeCardNum = cardCountsSortParent[0][0];
    const childThreeCardNum = cardCountsSortChild[0][0];
    if (parentThreeCardNum > childThreeCardNum) return 1;
    if (parentThreeCardNum < childThreeCardNum) return 2;

    // 3枚組の数字が同じ場合、キッカーを比較
    const parentKickers = cardCountsSortParent.slice(1).map((card) => card[0]);
    const childKickers = cardCountsSortChild.slice(1).map((card) => card[0]);
    for (let i = 0; i < parentKickers.length; i++) {
      if (parentKickers[i] > childKickers[i]) return 1;
      if (parentKickers[i] < childKickers[i]) return 2;
    }
    return 0;
  }

  // ツーペア
  if (ranksParent === 2) {
    const parentHighPair = cardCountsSortParent[0][0];
    const childHighPair = cardCountsSortChild[0][0];
    if (parentHighPair > childHighPair) return 1;
    if (parentHighPair < childHighPair) return 2;

    const parentLowPair = cardCountsSortParent[1][0];
    const childLowPair = cardCountsSortChild[1][0];
    if (parentLowPair > childLowPair) return 1;
    if (parentLowPair < childLowPair) return 2;

    const parentKicker = cardCountsSortParent[2][0];
    const childKicker = cardCountsSortChild[2][0];
    if (parentKicker > childKicker) return 1;
    if (parentKicker < childKicker) return 2;
    return 0;
  }

  // ワンペア
  if (ranksParent === 1) {
    const parentPairNum = cardCountsSortParent[0][0];
    const childPairNum = cardCountsSortChild[0][0];
    if (parentPairNum > childPairNum) return 1;
    if (parentPairNum < childPairNum) return 2;

    const parentKickers = cardCountsSortParent.slice(1).map((card) => card[0]);
    const childKickers = cardCountsSortChild.slice(1).map((card) => card[0]);
    for (let i = 0; i < parentKickers.length; i++) {
      if (parentKickers[i] > childKickers[i]) return 1;
      if (parentKickers[i] < childKickers[i]) return 2;
    }
    return 0;
  }

  // ハイカード
  if (ranksParent === 0) {
    const parentKickers = cardCountsSortParent.map((card) => card[0]);
    const childKickers = cardCountsSortChild.map((card) => card[0]);
    for (let i = 0; i < parentKickers.length; i++) {
      if (parentKickers[i] > childKickers[i]) return 1;
      if (parentKickers[i] < childKickers[i]) return 2;
    }
    return 0;
  }
}
/**
 * カードの枚数情報と手札から役の強さを判定します。
 * @param {number} cardCounts - カード番号ごとの枚数オブジェクト
 * @param {Card[]} cards - 手札のカード配列
 * @returns {number} - 役の強さを表す数値（0〜9）
 */
function getPairHand(cardCounts, cards) {
  const cardCountsValue = [...cardCounts.values()];
  if (isStraight(cards) === 2 && isFlush(cards)) {
    return 9; // ロイヤルフラッシュ
  }
  if (isStraight(cards) === 1 && isFlush(cards)) {
    return 8; // ストレートフラッシュ
  }
  if (cardCountsValue.includes(4)) {
    return 7; // フォーカード
  }
  if (cardCountsValue.includes(3) && cardCountsValue.includes(2)) {
    return 6; // フルハウス
  }
  if (isFlush(cards)) {
    return 5; // フラッシュ
  }
  if (isStraight(cards) === 1 || isStraight(cards) === 2) {
    return 4; // ストレート
  }
  if (cardCountsValue.includes(3)) {
    return 3; // スリーカード
  }
  if (cardCountsValue.filter((count) => count === 2).length === 2) {
    return 2; // ツーペア
  }
  if (cardCountsValue.includes(2)) {
    return 1; // ワンペア
  }
  return 0; // ハイカード
}

/**
 * 手札がストレートかどうか判定します。
 * 0 = ストレートなし
 * 1 = 通常のストレート
 * 2 = ロイヤルストレート（10,J,Q,K,A）
 * @param {Card[]} hand - 手札のカード配列
 * @returns {number} - ストレートの種類を表す数値
 */
function isStraight(hand) {
  const numbers = hand.map((card) => card.number);
  const uniqueSortedNumbers = [...new Set(numbers)].sort((a, b) => a - b);

  if (uniqueSortedNumbers.length < 5) {
    return 0;
  }
  if (uniqueSortedNumbers.join(",") === "10,11,12,13,14") {
    return 2; // ロイヤルストレート
  }
  if (uniqueSortedNumbers.join(",") === "2,3,4,5,14") {
    return 1; // A2345のストレート
  }
  if (uniqueSortedNumbers[4] - uniqueSortedNumbers[0] === 4) {
    return 1; // 通常のストレート
  }
  return 0;
}

/**
 * 手札がフラッシュかどうか判定します。
 * @param {Card[]} hand - 手札のカード配列
 * @returns {boolean} - フラッシュならtrue、そうでなければfalse
 */
function isFlush(hand) {
  const suits = hand.map((card) => card.suit);
  const uniqueSortedSuits = [...new Set(suits)];
  return uniqueSortedSuits.length === 1;
}

//キッカー関数

// 関数実行
PokerResult();
