const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//解答をここから下に書く

const doubled = num.map(function (n) {
  return n * 2;
});

for (let i = 0; i < doubled.length; i++) {
  console.log(doubled[i]);
}
console.log(doubled.length);
