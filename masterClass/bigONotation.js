function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(6));

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo2(6));

// 더 나은 것이 무엇을 의미하는가?
// 속도? 더 낮은 메모리 사용? 가독성이 좋은지?

// 속도
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds`);
console.log(addUpTo(6));
// Time Elapsed : 0.752699999988079 seconds Add1_Timing:11
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo2(6));
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds`);
console.log(addUpTo(6));
// Time Elapsed : 0.7523999999910593 seconds Add2_Timing:8

// 기기마다 다른 방식으로 시간을 기록하여 완전히 믿을 수 없다. 기기의 사양에 따라 다를 수 있고 무엇이 실행 되고 있는지에 따라 다를 것이다

// 시간을 측정하지 않고 어느 코드가 더 좋은지 어떻게 평가할 수 있을까?
