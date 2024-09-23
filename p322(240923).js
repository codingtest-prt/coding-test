function solution (num) {
  let str = num.replace(/[0-9]/g, '')
  let int = num.match(/[0-9]/g)
  let sum = int.reduce((a, b) => +a + +b, 0)
  let line = str.split('').sort().join('')
  return line + sum
}

console.log(solution("K1KA5CB7"))

//남의 풀이 코드는 내가만든 코드가 훨씬 깔끔해 보이긴한다
// 풀수는 있는데 어떻게 풀어야 더 나은 풀이인지는 잘모르겠다
// const fs = require('fs');
// let input = fs.readFileSync('../tc.txt').toString().trim();

// let str = input;

// function solution(str) {
//   let result = [];
//   let sum = 0;
//   for (const s of str) {
//     if (isNaN(s)) {
//       result.push(s);
//     } else {
//       sum += +s;
//     }
//   }

//   result.sort();
//   if (sum) result.push(sum);

//   return result.join('');
// }

// console.log(solution(str));