const BFS = (graph, start, visited) => {
  // 시작 위치 방문 처리
  const q = [];
  q.push(start);
  visited[start] = true;

  while (q.length !== 0) {
    const v = q.shift();
    console.log(v);
//  graph에 저장된 인접한 숫자 확인
    for (let i of graph[v]) {
//  인접한 숫자에 방문한적 없는 숫자가 있으면 q에 push
      if (!visited[i]) {
        q.push(i);
        visited[i] = true;
      }
    }
  }
};
// 인덱스 번호에따라 인접한 숫자를 배열로 정리  ex) 1과 인접한 숫자 -> 2, 3, 8
let graph = [
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

let visited = [...Array(9).fill(false)]; // false가 9개인 배열 생성

BFS (graph, 1, visited)