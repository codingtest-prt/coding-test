const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();
// 변수 s를 주어진 숫자를 숫자형태로 split한 배열로 지정
let s = input.split('').map(Number);

function solution(s) {
  //총합 변수 지정
  let result = 0;
// result가 0이거나 i가 0일때 result += i 그이후에 i === 0 이아니면 result *= i
  for(let i of s){
    if (i === 0 || result === 0){
      result += i
    } else result *= i
  }
  return result;
}

console.log(solution(s));