const DFS = (graph, v, visited) => {
    // 현재 위치 방문 처리
    visited[v] = true;
    console.log(v)
// 탐색한 위치의 인접한 숫자 확인
for (let i of graph[v]){
  // 만약 방문하지 않았다면 DFS함수를 불러내고 i의 위치에서 함수 불러오기
  // 첫번째 [2,3,8] 에서 2의 위치로 DFS 불러오고 후에 남은[3,8]에서 !visited[i] 의조건을 충족하는 숫자를 다시 i에 할당 
  if(!visited[i]){
    DFS(graph, i, visited);
    }
  }
};
// 각 번호가 연결된 정보를 배열로 정리  ex) 1과 인접한 숫자 -> 2, 3, 8
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

let visited = Array(9).fill(false); // false가 9개인 배열 생성 방문시에 true로 바뀜

DFS(graph, 1, visited);