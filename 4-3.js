function solution (knight) {
  const [knight_x, knight_y] = knight.split('')
  let x = knight_x.charCodeAt(0) -96
  let y = knight_y
  const steps = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]]
  let result = 0
  for (let step of steps){
    let index_x = x + step[0]
    let index_y = y + step[1]
    if (index_x < 1 || index_x > 8 || index_y < 1 || index_y > 8) continue ;
    result++
  }
  return result
}
console.log(solution('a1'))