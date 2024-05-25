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
// 연산의 개수를 센다. 컴퓨터의 사양이 달라도 연산해야할 개수는 같으니까
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
  // 1개의 곱셈 ,1개의 덧셈, 1개의 나눗셈
  // 총 연산 3번
}

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i; // 1개의 덧셈 그러나 for 루프 안에 있기 때문에 n이 5라면 연산은 5번이 된다. = 도 연산이다
  }
  return total;
}

//  n의 값이 변경되도 연산이 늘어나지 않는 함수와 n의 값에 따라 연산이 늘어나는 함수

// Big O
// addUpTo2 함수는 n에 관계 없이 언제나 연산이 3개이므로 O(1)
// addUpTo 함수는 n이 커질수록 연산이 많아진다 O(n)

function countUpAndDown(n) {
  console.log("숫자가 올라간다");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("최대치로 올라왔고 이제 내려간다");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("다 내려왔고 함수를 끝낸다.");
}
// countUpAndDown 함수는 n이 커질수록 연산이 많아지는 루프가 2개가 있다.
// 그렇지만 2n이라고 하지않고 큰 그림만 보기 때문에 O(n)이라고 한다.

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
// printAllPairs는 루프 안의 루프가 있어 n이 커질수록 훨씬 커진다 제곱으로 커지므로 O(n²)

// Big O 단순화 하기
// 상수는 신경쓰지 않는다 O(2n) => O(n) , O(500) => O(1) , O(13n²) => O(n²)
// 작은 연산도 없앤다 O(n+10) => O(n) , O(n² + 5n + 8) => O(n²)

// Big O 쉬운 규칙
// 1.산수는 상수다
// 2.변수 배정도 상수다
// 3.배열의 요소를 인덱스로 접근하거나 객체의 요소를 키로 접근하는 것은 상수 시간이 걸린다
// 4.루프 내에서 일어나는 작업의 복잡도를 계산할 때, 루프의 길이와 루프 안에서 수행되는 작업의 복잡도를 곱해야 한다
function logAtLeast5(n) {
  // O(n)
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
function logAtMost5(n) {
  // O(1);
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// 공간복잡도
// auxiliary space complexity : input size를 포함하지 않고 알고리즘 자체가 필요로 하는 공간
// 1. 기본 자료형(primitive data types)인 불리언(boolean), 숫자(number), undefined, null 등의 값은 상수 공간을 차지한다는 의미입니다. 상수 공간(constant space)은 데이터의 크기에 상관없이 일정한 양의 메모리 공간을 차지한다
// 2. 문자열은 O(n)만큼의 공간이 필요하다
// 3. 참조 자료형(reference types)인 배열(array)이나 객체(object)와 같은 데이터 구조의 경우 데이터 구조가 차지하는 메모리 공간이 해당 데이터 구조에 저장된 요소의 수에 비례하여 증가한다

// Example
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
// 공간을 차지하는 것들은?
// total 변수의 number, for 루프의 i 변수 number
// total 변수에 더 하는 것 뿐 새로운 변수를 만들지는 않는다.(상수 공간이 있다.)

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
// 차지하는 공간이 입력되는 배열의 크기와 비례해서 커진다
// n number는 O(n)공간을 차지한다
