const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) { 
  const findParent = (parent, x) => { //특정 원소가 속한 집합 찾기 (루트 찾기)
    if (parent[x] === x) return parent[x];
    else return (parent[x] = findParent(parent, parent[x]));
  };
  //두 원소가 속한 집합을 합치기 (루트 갱신)
  const unionParent = (parent, a, b) => { // a 와 b의 부모테이블을 찾고 a b중 더작은수를 큰수의 부모테이블로 한다
    a = findParent(parent, a);
    b = findParent(parent, b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
  };
    //parent 초기화
  let parent = [...Array(n + 1).fill(0)];
  for (let i = 1; i <= n; i++) {
    parent[i] = i;
  }
  //모든 간선을 담을 리스트생성
  let edges = [];
  for (const value of arr) {
    const [u, v, cost] = value;
    edges.push([cost, u, v]);
  }
    //코스트 비용 순서대로 정렬
  edges.sort((a, b) => a[0] - b[0]);

  let total = 0;
  let last = 0;
  for (const edge of edges) { // 코스트가 낮은순서대로 순차적으로 반복문실행
    const [cost, u, v] = edge;
    if (findParent(parent, u) !== findParent(parent, v)) { // u 와 v 의 부모요소가 같지않으면 
      unionParent(parent, u, v); // u 와 v 의 부모요소를 갖게 하고 
      total += cost; // 코스트값 더하기
      last = cost; // 코스트값이 제일큰값 저장
    }
  }

  return total - last; // 전체 코스트에서 코스트값이 제일큰 루트 하나를 제거하면 두개의 마을 생성
}

console.log(solution(n, m, arr));