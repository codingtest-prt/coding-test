const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const graph = arr.map((v1) => v1.split('').map((v2) => +v2));
// 위, 아래, 오른쪽, 왼쪽 방향 지정
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];// 방문 정보 확인등록
const visited = Array.from(Array(n), () => Array(m).fill(false));
// 현재 위치 [x,y]와 주어진 맵
const bfs = (start_x, start_y, graph) => {
  // 대기열 배열 q 설정 
  const q = [];
  // 현재 위치 q에 push
  q.push([start_x,start_y])
  //현재 위치 방문 처리
  visited[start_x,start_y] = true;
  //현재 위치를 시작위치로부터의 거리 '1' 으로 지정 (시작 칸을 포함 하므로)
  graph[start_x][start_y] = 1;
  // q 의 대기열이 전부 소진될때 까지
  while (q.length !== 0) {
    // 대기열의 좌표를 [x,y]의 큐(들어온순서대로)순서대로 하나씩 shift
    [x, y] = q.shift();
  // 상 하 좌 우 방향으로 한칸씩 이동 해봄
    for (let i = 0; i < dir.length; i++){
      const nx = x + dir[i][0];
      const ny = y + dir[i][1];
    // 만약 이동한 위치 [nx,ny]가 주어진 맵을 벗어나면 continue
      if (nx < 0 || ny < 0 || nx >= n || ny >= m ) continue ;
    //만약 방문한적없고 && 괴물이없는 위치라면
      if (!visited[nx][ny] && graph[nx][ny]){
      // 현재 위치를 대기열에 push
        q.push([nx, ny]);
      //현재 위치 방문 처리
        visited[nx][ny] = true;
      // 현재 위치를 원점으로 부터의 거리로 표현 -- 시작위치 graph[start_x][start_y] = 0 
        graph[nx][ny] = graph[x][y] + 1;
      }
    }
  }
}
  function solution(n, m, graph) {
    bfs(0, 0, graph);
    return graph[n - 1][m - 1];
}
console.log(solution(n, m, graph))
