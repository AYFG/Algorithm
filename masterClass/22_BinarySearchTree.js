// Binary Search Tree 이진탐색트리
// 이진탐색트리는 이진트리의 일종으로, 각 노드가 최대 두 개의 자식 노드를 가지며, 왼쪽 서브트리의 모든 노드는 부모 노드보다 작고, 오른쪽 서브트리의 모든 노드는 부모 노드보다 크다.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);
console.log(tree.root.value); // 10
