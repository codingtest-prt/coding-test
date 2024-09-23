//특정 원소가 속한 집합 찾기 (루트 찾기)
const findParent = (parent, x) => { // parent배열의 x인덱스의 값이 x와 같을때까지 부모테이블을 찾음
  if (parent[x] === x) return x;
  return findParent(parent, parent[x]);
};

//두 원소가 속한 집합을 합치기 (루트 갱신)
const unionParent = (parent, a, b) => {
  a = findParent(parent, a); // a 와 b의 부모테이블을 찾고 a b중 더작은수를 큰수의 부모테이블로 한다
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
  let parent = [...Array(n + 1).fill(0)]; // 최댓값의 수 + 1 의 배열 생셩
  for (let i = 1; i <= n; i++) { // 배열의 인덱스와 숫자를 일치시킴
    parent[i] = i;
  }

  //union 연산 수행
  for (const edge of edges) {
    const [a, b] = edge;            // edges에 해당하는 집합을 하나씩 뽑아 union 함수에 입력
    unionParent(parent, a, b);
  }

  //각 원소가 속한 집합 출력
  let sets = ''; // 빈문자열 생성
  for (let i = 1; i <= n; i++) {
    sets += findParent(parent, i); // 빈문자열에 각숫자가 가르키는 최고 부모테이블 추가
  }

  console.log(`각 원소가 속한 집합: ${sets.split('').join(' ')}`);
  console.log(`부모 테이블: ${parent.slice(1, n).join(' ')}`);
}

solution(n, m, edges);