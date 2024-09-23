array1 = [[3, 1, 2], [4, 1, 4], [2, 2, 2]]
array2 = [[7, 3, 1,  8], [3, 3, 3, 4]]
function solution (n){
  let arr = n
  let answer = 0;
  for (let num of arr){
    answer = Math.max(answer, Math.min(...num))
  }
  return answer
}

console.log(solution(array1))