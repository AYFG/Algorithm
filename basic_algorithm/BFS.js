const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E", "F"],
  D: ["B"],
  E: ["C", "F"],
  F: ["C", "E"],
};
console.log(graph.length());

function BFS(graph, startNode) {
  let queue = [];
  let current = [];

  queue.push(startNode);
  current.push(queue);
}
