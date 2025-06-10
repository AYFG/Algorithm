// 재귀함수 조건
// 라인을 끝내는 종료 조건
// 다른 입력값

// simple Recursion Function 1
function countDown(num) {
  if (num <= 0) {
    console.log("카운트 다운 끝");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
// countDown(5);

// second recursive function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
// sumRange(4);

// for loop factorial
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
// console.log(factorial(5));

// recursive factorial
function recursiveFactorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(recursiveFactorial(5));
