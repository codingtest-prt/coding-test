
function solution(n, arr) {
  return arr.sort((a, b) => b - a).join(' ');
}

console.log(solution(3, [15, 27, 12]));