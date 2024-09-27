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
  const q = [];
  q.push([dx, dy])
  visited[dx][dy] = 1
  while (q.length != 0){
    let [x, y] = q.shift();
    
  for (let i = 0; i < 4; i++){
  
  let nx = x + dir[i][0];
  let ny = y + dir[i][1];

  if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
  
  if (visited[nx][ny] === 0 && graph[nx][ny]  == 0 ){
    visited[nx][ny] = 1
    q.push([nx, ny])
      }
    }
  }
}

function solution (n, m, graph){
  let count = 0;
    for(let i = 0; i < n; i++){
      for (let j = 0; j < m; j++){
        if (visited[i][j] === 0 && graph[i][j]  == 0){
            bfs(i, j, graph)
            count++
        }
      }
    }
    return count
}

console.log(solution(n, m, graph));