const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const graph = arr.map((v1) => v1.split('').map((v2) => +v2));

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const visited = Array.from(Array(n), () => Array(m).fill(0));

function bfs (dx, dy, graph){
  const q= [];
  q.push([dx, dy])
  visited[dx][dy] = 1;
  while(q.length != 0){
    let [x, y] = q.shift();
      for (let i = 0; i < 4; i++){
        let nx = x + dir[i][0];
        let ny = y + dir[i][1];

  if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

  if (visited[nx][ny] === 0 && graph[nx][ny] ){
    visited[nx][ny] = 1
    q.push([nx, ny])
    graph[nx][ny] = graph[x][y] + 1
      }
    }
  }
}

function solution (n, m, graph){
  bfs(0, 0, graph)
  return graph[n - 1][m - 1];
}

console.log(solution(n, m, graph));