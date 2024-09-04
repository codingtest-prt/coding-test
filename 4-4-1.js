const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [nm, abd, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
let [x, y, d] = abd.split(' ').map((v) => +v);
const map = arr.map((v) => v.split(' ').map((v) => +v));


function solution(n, m, x, y, dir, map) {
  let d = Array.from(Array(n), () => Array(m).fill(0)); // n x m 의 이차원 배열 만들고 전부 0으로 채우기
  // 현재 위치
  d[x][y] = 1;
//            북 동  남 서 
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
// turnLeft 함수 방향을 -1 왼쪽으로 돌리고 0일시 3으로 바꿈
  const turnLeft = () => {
    dir -= 1;
    if (dir < 0) dir = 3;
  };

  let count = 1; //방문한 칸의 횟수
  let turnTime = 0; // 현재 칸에서 회전한 횟수

  while (true) {
    //왼쪽으로 회전
    turnLeft();
    //현재 방향으로 한칸 전진
    let nx = x + dx[dir];
    let ny = y + dy[dir];
    //민액 현재 방향으로 한칸 전진한값이 맵상 갈수있고 방문한적 없을때 
    
    if (d[nx][ny] === 0 && map[nx][ny] === 0) {
      //현재 위치에 방문했다는 표시를 한후
      d[nx][ny] = 1;
      // 갈수있는 방향으로 전진후 턴타임 초기화와 count +=1 한뒤 반복문 continue
      x = nx;
      y = ny;
      count += 1;
      turnTime = 0;
      continue;
    }//만약 방문한적있거나 맵상 갈수없을때 d[nx][ny] && map[nx][ny] === 1 
    else turnTime += 1;
    // 만약 4번 돌았는데도 갈수있는 방향이 d[nx][ny] && map[nx][ny] === 1  일때
    if (turnTime === 4) {
      // 현재 위치에서 한칸뒤로 빠짐
      nx = x - dx[dir];
      ny = y - dy[dir];
      // 뒤로 한칸빠진값이 주어진 맵상으로 갈수있는곳일경우 현재 위치를 업데이트
      if (map[nx][ny] === 0) {
        x = nx;
        y = ny;
        // 갈수없는경우 break
      } else break;

      turnTime = 0;
    }
  }

  console.log(count);
}
solution(n, m, x, y, d, map)