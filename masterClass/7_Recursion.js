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
countDown(5);
