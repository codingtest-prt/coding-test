function solution (n, m, x, y, dir, map){
  let visited = Array.from(Array(n), ()=>Array(m).fill(0)) // 방문 정보 저장할 0으로 채운 n x m 의 배열 지정
  const dx = [-1, 0, 1, 0] // 북동남서 방향 지정
  const dy = [0, 1, 0, -1]
  visited[x][y] = 1; // 현재 위치 방문처리 
  let count = 1; // 방문한 칸의 횟수
  let turn_time = 0;
  const turn_left = () => {
    dir -= 1
    if (dir < 0) dir = 3;
  }
  while (true){
    turn_left()
    let nx = x + dx[dir]
    let ny = y + dy[dir]
    if (visited[nx][ny] === 0 && map[nx][ny] === 0){ //현재방향으로 한칸전진했을때 방문 X 맵상갈수있을때
      visited[nx][ny] = 1; // 현재 위치 방문처리
      x = nx; // 현재위치 업데이트
      y = ny;
      count += 1 //방문한 자리 횟수
      turn_time = 0;// 턴 횟수 초기화
      continue;
    }
    else 
      turn_time++ // 턴하기
      if( turn_time === 4){ // 만약 4방향 전부 턴했을경우
        nx = x - dx[dir] // 한칸 빠꾸
        ny = y - dy[dir]
        if (map[nx][ny] === 0){ //빠꾸햇는데 갈수있는곳이면
          x = nx; // ㄱㄱ
          y = ny;
        }
        else break; //아니면 ㅈㅈ
        turn_time = 0
      }
  }
  return count
}






let n = 4
let m = 4
let [a, b] = [1, 1]
let d = 0
let map = [[1, 1, 1, 1], [1, 0, 0, 1], [1, 1, 0, 1], [1, 1, 1, 1]]
console.log(solution(n, m, a, b, d, map))