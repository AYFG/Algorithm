const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
function solution(maps) {
  // x : 행 , y: 열
  // N : 행 , M: 열
  const check = (x, y) => {
    if (y < 0 || y > M || x < 0 || x > N) {
      return false;
    }
    if (maps[x][y] === "0") {
      return false;
    } else {
      return true;
    }
  };
  const N = maps.length - 1;
  const M = maps[0].length - 1;
  let queue = [];
  queue.push([0, 0]);
  let visited = new Set();
  let answer = maps[0][0];
  let count = 0;
  let goal = false;

  while (queue.length > 0) {
    count += 1;
    if (count == (N * M) ** 2) {
      if (goal) {
        return answer;
      }
      return -1;
    }
    let [x, y] = queue.shift();
    visited.add([x, y]);
    console.log(visited);
    if (x == N && y == M) {
      answer += maps[x][y];
      goal = true;
    }
    // 상
    if (check(x - 1, y)) {
      queue.push([x - 1, y]);
      answer += maps[x - 1][y];
      maps[x - 1][y] = 0;
    }
    // 하
    if (check(x + 1, y)) {
      queue.push([x + 1, y]);
      answer += maps[x + 1][y];
      maps[x + 1][y] = 0;
    }
    // 좌
    if (check(x, y - 1)) {
      queue.push([x, y - 1]);
      answer += maps[x][y - 1];
      maps[x][y - 1] = 0;
    }
    // 우
    if (check(x, y + 1)) {
      queue.push([x, y + 1]);
      answer += maps[x][y + 1];
      maps[x][y + 1] = 0;
    }
  }
  return answer;
}
solution(maps);
