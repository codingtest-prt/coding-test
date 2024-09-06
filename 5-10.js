const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const graph = arr.map((v1) => v1.split(''));
// 위, 아래, 오른쪽, 왼쪽 위치 설정
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
console.log(graph)

// 전부 false로 채운 n x m 크기의 2차 배열 생성 --방문정보 저장--
const visited = Array.from(Array(n), ()=>Array(m).fill(false));

const dfs = (x, y, graph) => {
// 현재 위치 방문처리  
  visited[x][y] = true;
  // dir의 각 방향마다 한번씩 진출
  for (let i = 0; i < dir.length; i++){
    let nx = x + dir[i][0];
    let ny = y + dir[i][1];
//   만약 진출한 위치의 graph[nx][ny]가 n x m 맵을 벗어났다면 continue
      if (nx < 0 || ny < 0 || nx >= n || ny >= m ) continue ;
//   만약 벗어나지않고 방문하지않았던곳 && 맵상 '0'인 곳이면 [nx][ny]의 위치에서 dfs불러오기
      if (!visited[nx][ny] && graph[nx][ny] === '0'){
          dfs(nx, ny, graph) ;
    }
  }
};

const solution = (n, m, graph) => {
  // count 변수 지정
  let count = 0;
  //[x][y]를 표현할 for 문 2번실행
  for (let i = 0; i < n; i++){
    for (let j = 0; j < m; j++){
      // [i][j]의 위치에서 방문하지않았고 && 맵상 '0'인곳 이면 
      if(!visited[i][j] && graph[i][j] === '0' ){
        // [i][j]와 연결되어있는 모든 [nx][ny]를 전부 방문처리하기 위해 dfs 함수 호출
        dfs(i, j, graph);
        // count += 1
        count++
      }
    }
  }
    return count
}

console.log(solution(n, m, graph));
