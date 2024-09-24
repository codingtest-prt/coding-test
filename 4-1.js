function solution (n, plan){
  //기본 위치 지정
  let position = [1,1]
  let dx = [0, 0, -1, 1]
  let dy = [-1, 1, 0, 0]
  const move_type = ['L', 'R', 'U', 'D']
  for (let move of plan){
    for (let j = 0; j < move_type.length; j++){
      if (move === move_type[j]){
        let index_x = position[0]+dx[j]
        let index_y = position[1]+dy[j]
      if (index_x < 1 || index_y < 1 || index_x > n || index_y > n) continue ;
      position[0] = index_x
      position[1] = index_y
      }
    }
  }
  return position
}
console.log(solution(5, ['R', 'R', 'R', 'U', 'D', 'D']))