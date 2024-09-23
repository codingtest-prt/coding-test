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
const edges = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, edges) {
  //부모 테이블 초기화
  let parent = [...Array(n + 1).fill(0)];
  for (let i = 1; i <= n; i++) {
    parent[i] = i; // 부모테이블의인덱스와 부모테이블 일치
  }

  let isCycle = false; // 기본 사이클값 false 설정
  for (const edge of edges) {
    const [a, b] = edge;
    if (findParent(parent, a) !== findParent(parent, b)) //a의 부모테이블과 b의 부모테이블이 갖지않다면
      unionParent(parent, a, b);// 두원소의 부모테이블 합치기
    else {
      isCycle = true; // 배열을 전부 출력하기전 사이클이 돌았을경우 기본 사이클값 true변환후 break
      break;
    }
  }

  console.log(
    isCycle ? '사이클이 발생했습니다.' : '사이클이 발생하지 않았습니다.'
  );
}

solution(n, m, edges);