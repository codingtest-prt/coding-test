//내가 직접 풀은 풀이
function solution(N) {
let arr = N.toString().split('')
let n = arr.length
let front = arr.slice(0, n/2)
let back = arr.slice(n/2 , n)
return front.reduce((a, b) => +a + +b, 0) === back.reduce((a, b)=> +a + +b, 0) ? "LUCKY" : "READY"
}

console.log(solution(123402))

// 남의 풀이 비슷하네이건
// const fs = require('fs');
// let input = fs.readFileSync('../tc.txt').toString().trim();

// let point = input.split('').map(Number);

// function solution(point) {
//   const n = point.length;
//   const left = point.slice(0, n / 2).reduce((a, b) => a + b);
//   const right = point.slice(n / 2).reduce((a, b) => a + b);
//   return left === right ? 'LUCKY' : 'READY';
// }

// console.log(solution(point));