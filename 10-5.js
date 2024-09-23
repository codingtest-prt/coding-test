//특정 원소가 속한 집합 찾기 (루트 찾기)
const findParent = (parent, x) => {
  if (parent[x] === x) return parent[x];
  return (parent[x] = findParent(parent, parent[x]));
};
//두 원소가 속한 집합을 합치기 (루트 갱신)
const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
};
const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
  let parent = [...Array(n + 1).fill(0)];
  for (let i = 1; i <= n; i++) {
    parent[i] = i;
  }
  let edges = [];
  for (const value of arr) {
    const [u, v, cost] = value;
    edges.push([cost, u, v]); 
  }
  edges.sort((a, b) => a[0] - b[0]); //cost 순서대로 정렬 

  let result = 0;
  for (const edge of edges) { // cost 순서대로 정렬된 arr 배열을 하나씩 출력
    const [cost, a, b] = edge; // 배열 분할
    if (findParent(parent, a) !== findParent(parent, b)) { // a 와 b 의 부모노드가 같지않다면 
      unionParent(parent, a, b); // 두원소의 부모노드를 합친후
      result += cost; //result에 cost값 추가
    }
  }

  return result;
}

console.log(solution(n, m, arr));