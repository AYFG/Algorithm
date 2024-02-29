// 재귀함수
// 내가 나를 호출하는 함수
// 반복문 <-> 재귀함수
let s = 0;
for (var i = 1; i < 101; i++) {
  s += i;
}
console.log(s);
// O(n)

let m = 1;
for (var i = 1; i < 6; i++) {
  m *= i;
}
console.log(m);

let n = 100;
console.log((n * (n + 1)) / 2);
// O(1)
