const fs = require('fs');
let input = fs.readFileSync('./tx.txt').toString().trim().split('\n');

class Queue {  //이 코드에서 Queue는 큐(선입선출, FIFO) 자료구조를 구현한 클래스입니다. const q = new Queue();는 
                    //그 클래스의 인스턴스를 생성하여 q라는 변수에 저장하는 것입니다.

  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }
}

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

let indegree = [...Array(n + 1).fill(0)]; //모든 노드의 진입차수를 0 으로 초기화

function solution(n, m, arr) {
  let graph = Array.from(Array(n + 1), () => []); // 각노드의 연결간선정보를 담기위한 그래프 초기화
  
  for (const value of arr) {
    const [u, v] = value;
    graph[u].push(v); // arr의 값을 순차적으로 입력하여 연결간선정보 담음
    indegree[v]++; // v의 진입차수 ++
  }

  const q = new Queue(); // 생성자 함수 호출
  //console.log(q) // Queue { items: [] }
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) q.enqueue(i); // 처음시작시 진입차수가 0 인값 push
  }

  let sorted = []; // 알고리즘 수행 결과를 담을 list
  while (!q.isEmpty()) { //q 가 빌 때 까지 사용
    const cur = q.dequeue(); // q에서 원소꺼내기
    sorted.push(cur); // sorted에 push

    for (const node of graph[cur]) { // 해당원소와 인접한 노드들의 진입차수 -1 하기
      indegree[node]--;
      if (indegree[node] === 0) q.enqueue(node); // 진입차수가 0 인 노드 q 에 push
    }
  }

  return sorted;
}

console.log(solution(n, m, arr));