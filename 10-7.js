const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
  const findParent = (parent, x) => { //특정 원소가 속한 집합 찾기 (루트 찾기)
    if (parent[x] === x) return parent[x];
    return (parent[x] = findParent(parent, parent[x]));
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
  for (let i = 0; i <= n; i++) { // 부모요소와 i를 값을 똑같이함
    parent[i] = i;
  }

  let result = ''; // 결과값 빈 문자열 
  for (const value of arr) {
    const [type, u, v] = value;
    if (type === 0) { // 타입이 0 일때 u와 v 의 부모요소 합치기
      unionParent(parent, u, v);
    } else { // 타입이 1일때 현재까지의 부모요소에서 u 와 v의 부모요소가 동일한지보고 결과값 배출하기
      result += parent[u] === parent[v] ? 'YES\n' : 'NO\n';
    }
  }
  return result;
}

console.log(solution(n, m, arr));