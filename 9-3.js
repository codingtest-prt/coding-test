const fs = require('fs');
let input = fs.readFileSync('./tx.txt').toString().trim().split('\n');

let [n, m, ...rest] = input;
(n = +n), (m = +m);
const arr = rest.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
	//최단 거리 테이블 초기화
	let d = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity)); // n+1 * n+1 표 생성
  for (let i = 1; i <= n; i++) d[i][i] = 0; // i 부터 i 까지의 거리 0 저장
  for (const value of arr) {
    const [start, end, cost] = value; // 시작점, 끝점, 거리 분할
    d[start][end] = cost; // start 에서 end까지의 거리 표에 저장
  }

	//모든 노드에 대해 반복
	for (let k = 1; k <= n; k++) {
		//최단 거리 갱신
    for (let from = 1; from <= n; from++) {  //출발점
      for (let to = 1; to <= n; to++) { // 도착점
        if (k === from || from === to) continue; //생략 가능 출발점이 경유지 혹은 도착점과 같을 때 생략
        d[from][to] = Math.min(d[from][to], d[from][k] + d[k][to]); //표에 현재값과 k를 경유햇을때의 값중 최솟값을 [from][to]에 저장
      }
    }
  }

  let ans = '';
  for (let from = 1; from <= n; from++) {
    for (let to = 1; to <= n; to++) {
      if (d[from][to] === Infinity) ans += 'INFINITY'; //해당값이 인피티티일경우 인피니티 출력
      else ans += `${d[from][to]} `; // 아닐경우 from값 고정 한칸빈칸씩 to값만 반복문으로 실행
    }
    ans += '\n'; // 다음 from값 넘어가기전 줄바꿈
  }

  return ans;
}

console.log(solution(n, m, arr));