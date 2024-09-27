function dfs (graph, v, visited){ //간단 하게
    visited[v] =true;
    console.log(v) //하나씩 출력하고
    for (let i of graph[v]){
      if (!visited[i]){
        dfs(graph, i, visited) //함수 재반복
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

dfs(graph, 1, visited);