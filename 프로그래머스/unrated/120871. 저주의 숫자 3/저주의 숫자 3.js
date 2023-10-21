function solution(n) {
    var answer =Array(1000)
  .fill(0)
  .map((_, i) => i)
  .filter((v) => v % 3 != 0)
  .filter((v) => !v.toString().includes("3"))[n-1];
    return answer;
}