const fs = require('fs');
let input = fs.readFileSync('./tx.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
let [x, k] = arr[m].split(' ').map((v) => +v);
arr.pop();
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, x, k, arr) { // k번째 회사를 들려서 x회사로 가는 최단거리 구하기
  const d = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity)); //n + 1 * n + 1 표만들고 전체 인피값으로 채우기
  for (let i = 1; i <= n; i++) d[i][i] = 0; //출발지와 도착지가 같을경우 0
  for (const value of arr) {
    const [u, v] = value; // 양방향 이동이 가능하므로 u출발 v도착, v출발 u도착값을 (시간은 모두 1로 동일) 표 d에 채우기
    d[u][v] = 1;
    d[v][u] = 1;
  }

  for (let i = 1; i <= n; i++) { // 모든 노드방문
    for (let from = 1; from <= n; from++) { 
      for (let to = 1; to <= n; to++) {
        if (i === from || from === to) continue;
        d[from][to] = Math.min(d[from][to], d[from][i] + d[i][to]);
      }
    }
  }

  const dist = d[1][k] + d[k][x]; //1번회사에서 출발하여 k 회사에 도착후 k회사에서 x회사로 가는 경로 구하기
  return dist >= Infinity ? -1 : dist; //값이 없을경우 -1 반환 있으면 최단시간 반환
}

console.log(solution(n, m, x, k, arr));