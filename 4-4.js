const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [nm, abd, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
let [x, y, d] = abd.split(' ').map((v) => +v);
const map = arr.map((v) => v.split(' ').map((v) => +v));

function solution(n, m, x, y, d, map) {
  const DIR = [[0,-1],[1,0],[0,1],[-1,0]];
//               북    동     남     서
/*  Array.from
// 화살표 함수를 map 함수로 사용하여 요소 조작
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// 숫자 시퀀스 생성하기
// 배열의 각 위치가 `undefined`로 초기화되므로
// 아래 'v'의 값은 `undefined`가 됩니다.
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4] */
/*
이 코드는 n x m 크기의 2D 배열을 생성하여 모든 요소를 false로 초기화합니다. 
visited 배열은 일반적으로 2D 공간에서의 방문 여부를 추적하는 데 사용됩니다.
n과 m은 배열의 행과 열의 개수를 의미합니다.
*/
let visited = Array.from(Array(n), () => Array(m).fill(false));
/*
visited[x][y] = true;는 visited 배열에서 좌표 (x, y)에 해당하는 위치를 true로 설정합니다. 이는 해당 위치가 방문되었음을 나타내는 데 사용됩니다.
 */
visited[x][y] = true;

let count = 1; //방문한 칸의 수
let turnTime = 0; //현재 칸에서 탐색한 방향의 수

while (true) {
  //왼쪽으로 회전
  /*이 코드는 무한 루프를 실행하면서 방향을 왼쪽으로 회전시키고 새로운 좌표를 계산합니다. 
  d는 현재 방향을 나타내며, d가 0이면 3으로 설정하여 왼쪽으로 회전하고, 그렇지 않으면 d를 1 감소시킵니다. 
  nx와 ny는 새로운 좌표를 계산하는데, DIR[d][0]과 DIR[d][1]은 현재 방향 d에 따른 좌표 변화량을 나타냅니다. */
  d = d === 0 ? 3 : d - 1;
  let nx = x + DIR[d][0];
  let ny = y + DIR[d][1];

  //정면에 가보지 않은 칸이 존재하는 경우 전진
  /* 이 코드는 현재 위치 (x, y)에서 새로운 좌표 (nx, ny)로 이동할 수 있는지를 확인하고, 그에 따라 이동을 처리하는 로직입니다. 
  각 조건과 작업을 살펴보면 다음과 같습니다:
  map[nx][ny]가 false인 경우: 일반적으로 map 배열에서 false는 이동 가능한 공간을 의미합니다.
visited[nx][ny]가 false인 경우: 해당 위치 (nx, ny)가 아직 방문되지 않은 경우를 의미합니다.
즉, map[nx][ny]가 false이고 visited[nx][ny]가 false이면, 이동할 수 있는 공간이면서 방문하지 않은 곳이라는 의미입니다. */
  if (!map[nx][ny] && !visited[nx][ny]) {
    /*visited[nx][ny] = true;: (nx, ny) 위치를 방문한 것으로 표시합니다.
x = nx;: 현재 위치를 새로운 좌표 (nx, ny)로 업데이트합니다.
y = ny;: 현재 위치를 새로운 좌표 (nx, ny)로 업데이트합니다.
count++;: 이동 횟수를 증가시킵니다.
turnTime = 0;: turnTime 변수를 0으로 초기화합니다. 이 변수는 회전 시간을 추적하는데 사용될 수 있습니다.
continue;: 루프의 다음 반복으로 넘어갑니다. 현재의 위치에서 새로운 좌표로 이동한 후에는 현재 반복을 끝내고 루프의 다음 반복을 시작합니다.
  */  
    visited[nx][ny] = true;
    x = nx;
    y = ny;
    count++;
    turnTime = 0;
    continue;
  } else {
    //정면에 가보지 않은 칸이 없거나 바다인 경우
    turnTime++;
  }

  //네 방향 모두 갈 수 없는 경우
  /*이 코드는 turnTime이 4일 때 현재 방향 d에서 네 번 회전한 상태를 나타내며, 그 경우 현재 방향에서 한 칸 뒤로 이동한 좌표 (nx, ny)를 계산합니다.

turnTime === 4는 네 번의 회전이 완료되었음을 의미합니다.
nx = x - DIR[d][0];: 현재 방향 d의 반대 방향으로 x좌표를 업데이트합니다.
ny = y - DIR[d][1];: 현재 방향 d의 반대 방향으로 y좌표를 업데이트합니다.
즉, 네 번 회전한 후 원래 방향으로 한 칸 뒤로 가는 새로운 좌표를 계산합니다.*/
  if (turnTime === 4) {
    nx = x - DIR[d][0];
    ny = y - DIR[d][1];

    //뒤로 갈 수 있으면 이동  map[nx][ny] === false 이면 이동가능한 공간이 있다는 뜻
    // 뒤로 갈수 있으면 뒤로 간뒤 현재 위치를 [x,y]로 하고 진행
    if (!map[nx][ny]) {
      x = nx;
      y = ny;
      turnTime = 0;
    } else {
      //뒤가 바다로 막혀있는 경우
      break;
    }
  }
}

return count;
}



console.log(solution(n, m, x, y, d, map)); 



