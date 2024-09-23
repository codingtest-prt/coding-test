function solution (n, m, k, array){
  let answer = 0;
  let arr = array.sort((a,b)=> b - a)
  for (let i = 1; i <= m; i++ ){
    i % (k+1) === 0 ? answer += arr[1] : answer += arr[0]
  }
  return answer
}
console.log(solution(5, 8, 3, [2, 4, 5, 4, 6]))