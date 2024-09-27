function bfs (graph, start, visited) {
  visited[start] = 1;
  let queue = [start] // 대기열 생성
  while (queue.length > 0){ // 대기열이 다할때까지
    let coin = queue.shift() // 대기열에서 앞에서부터 하나씩 빼서
    console.log(coin) // 콘솔로그로 출력
    for (let i of graph[coin]){ // 인접노드 확인
      if (!visited[i]){ // 인접노드가 방문을 안햇으면
        queue.push(i); // 대기열에 넣기
        visited[i] = true;
      }
    }
  }
} 

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

let visited = Array(9).fill(false); // false가 9개인 배열 생성

bfs(graph, 1, visited);