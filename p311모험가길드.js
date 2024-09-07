const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let [n, arr] = input;
n = +n;
arr = arr.split(' ').map(Number);

function solution(n, arr) {
  //group변수 0지정
  let group = 0;
// 배열을 작은숫자부터 정렬
  arr.sort((a, b) => a - b);

  let count = 0; //현재 그룹에 포함되는 모험가 수
  for (const fear of arr) {
    count++; //일단 현재 그룹에 포함
    // 모험가 그룹에 포함된 사람의수가 현재 포함된 사람의 공포지수를 넘으면 group ++ 후 count 초기화
    if (count >= fear) {
      group++;
      count = 0;
    }
  }

  return group;
}

console.log(solution(n, arr));