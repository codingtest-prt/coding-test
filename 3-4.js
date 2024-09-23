function solution (n, k) {
  let count = 0;
  while (true) {
    if (n % k === 0){
      n = n / k
      count++
    } else {
      n = n - 1
      count++
    }
    if(n === 1) break;
  }
  return count
}
console.log(solution(26, 5))