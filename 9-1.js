const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let [nm, s, ...rest] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const start = +s;
const arr = rest.map((str) => str.split(' ').map((v) => +v));

let visited = [...Array(n + 1).fill(false)]; //방문정보 저장
let d = [...Array(n + 1).fill(Infinity)]; // 각노드의최단거리 저장 기본값 무한


function solution(n, m, start, arr) {
  const graph = Array.from(Array(n+1), () => []); // 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트 생성
for (const v of arr) {
  const [from, to, dist] = v;
  graph[from].push([to, dist]);
}
// 방문하지않은 노드에서 최단거리가 가장짧은 인덱스 반환
const smallNode = () => {
  let min = Infinity // 무한대값 저장
  let index = 0; // 가장 최단거리가 짧은 노드(인덱스)
  for (const i in d){ //  해당 배열의 인덱스값 반환
    if (!visited[i] && min > d[i]){ // 방문한적없고 && d[i] 의거리가 실수라면
      min = d[i]; // d[i]의 최단거리 저장
      index = i; // 최단거리의 인덱스값
    }
  }
  return index;
}
const dijkstra = (start) => {
  d[start] = 0; // 시작노드 초기화
  visited[start] = true; // 시작노드 방문처리
  for (const i of graph[start]){// 시작인덱스의 근접노드 반복문실행
    const [node, cost] = i; // ex) 1번인덱스의 근접인덱스 와 거리 저장 [2,2],[3,5],[4,1]
    d[node] = cost; // ex) 1에서 2까지 거리 2 , 1에서 3까지거리 5, 1에서 4까지 거리 1
  }
// 시작 노드를 제외한 전체 노드에 대해 반복
for (let i = 0; i < n; i++){
  const cur = +smallNode(); // smallNode의값을 숫자형으로 변환한값
  visited[cur] = true; // 경로중 가장짧은거리 방문처리

  for (let j of graph[cur]){ // cur인덱스의 근접노드 반복문실행
    const node = j[0]; // cur인덱스의 근접인덱스값 저장
    const cost = d[cur] + j[1]; //  cur인덱스까지의 거리 + cur에서 근접인덱스 까지의 거리
    if (cost < d[node]){ // 현재배열d에 저장되어있는 cur노드의 근접노드까지의 거리 > cur인덱스까지의 거리 + cur에서 근접인덱스 까지의 거리
      d[node] = cost; // 배열d에 더 적은거리의 cost값 저장
      }
    }
  }
};
dijkstra(start);

for (let i = 1; i <= n; i++) {
  if (d[i] === Infinity) { // 만약 갈수없는경우 인피니티 출력
    console.log('INFINITY');
  } else {
    console.log(d[i]); // 갈수있다면 해당거리값 출력
  }
}

return d;
}
console.log(solution(n, m, start, arr));