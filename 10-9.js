const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, ...arr] = input;
n = +n;
arr = arr.map((str) => str.split(' ').map((v) => +v));

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

function solution(n, arr) {
  let indegree = [...Array(n + 1).fill(0)]; // 진입차수 설정
  let graph = Array.from(Array(n + 1), () => []); // 각노드의 연결 간선정보 담을 배열 생성
  let times = [...Array(n + 1).fill(0)]; // 각 노드의 강의시간 초기화

  for (let i = 0; i < arr.length; i++) {
    const [time, ...rest] = arr[i]; // 강의시간과 연결 노드 객체분할
    for (let j = 0; j < rest.length - 1; j++) { //rest.length -1 로 각 줄 끝의 -1 버림
      graph[rest[j]].push(i + 1);  // 연결 간선 정보 저장
    }
    indegree[i + 1] = rest.length - 1; // i의 진입 차수 추가
    times[i + 1] = time; // 강의 시간 추가
  }

  let result = []; // 결과 값 담을 배열생성

  const q = new Queue();
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) {
      q.enqueue(i); // 진입 차수가 0 인 시작 값 q에 push
      result[i] = times[i]; // i의 인덱스에 시간 저장
    }
  }

  while (!q.isEmpty()) { // q가 빌때까지
    const cur = q.dequeue(); // q에서 원소꺼내기
    for (const node of graph[cur]) {
      result[node] = result[cur] + times[node]; // 현재 시간을 해당강의 시간과 후순위 강의시간을 더함

      indegree[node]--; // 근접 노드의 진입 차수 -1 하기
      if (indegree[node] === 0) q.enqueue(node); // 진입 차수가 0인 근접노드 q에 추가
    }
  }

  for (let i = 1; i <= n; i++) {
    console.log(result[i]);
  }
}

solution(n, arr);