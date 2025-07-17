const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//解答をここから下に書く

//numを3より上の数にフィルター
const result = num.filter((value) => {
  return value > 3;
});
console.log(result);

//numの偶数のみにフィルター
const evenNumbers = num.filter(function (data) {
  return data % 2 === 0;
});
console.log(evenNumbers);

//奇数
const oddNumbers = num.filter((number) => number % 2 !== 0);

//普通の関数で記述
const oddNumbers2 = num.filter(function (number) {
  return number % 2 !== 0;
});

//\nで改行を使ってまとめて表示
console.log(
  "奇数関数をアローで書いた=" +
    oddNumbers +
    "\n" +
    "奇数関数を普通の関数= " +
    oddNumbers2
);
