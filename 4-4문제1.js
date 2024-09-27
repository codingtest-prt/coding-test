function solution(n, m, x, y, dir, map) {
  let visited = Array.from(Array(n), () => Array(m).fill(0))
  visited[x][y] = 1; //현재위치 방문처리
  let count = 1 // 방문횟수
  let turn_time = 0 // 회전한 횟수
  const dx = [-1, 0, 1, 0] // 방향 지정
  const dy = [0, 1, 0, -1]
  function turn_left () { // 왼쪽으로 돌기 함수로 표현
      dir -= 1
      if(dir < 0) dir = 3
    }
    while(true){
      turn_left()
      let nx = x + dx[dir]
      let ny = y + dy[dir]
      if (visited[nx][ny] === 0 && map[nx][ny] === 0) {
        visited[nx][ny] = 1
        x = nx
        y = ny
        count += 1
        turn_time = 0
        continue;
      }
      else 
        turn_time++
      if (turn_time === 4){
        nx = x - dx[dir]
        ny = y - dy[dir]
        if (map[nx][ny] === 0){
          x = nx
          y = ny
          turn_time = 0;
        }
        else break;
        
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