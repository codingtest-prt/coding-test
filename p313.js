// 내가 푼것
function solution1 (Number) {
  // 주어진 숫자를 각각 0과 1을 기준으로 split
  let arr0 = Number.split(0).filter(Boolean);
  let arr1 = Number.split(1).filter(Boolean);
  // 각 0과 1을 기준으로 자른 배열의 길이 비교후 길이가 작은 배열의 길이를 출력
  const answer = arr0.length > arr1.length ? arr1.length : arr0.length
  console.log(arr0)
}

solution1('0001100')


//남이푼것 22 뭐이렇게 어렵게 품;;

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim();
//주어진수를 숫자형태로 split함
let s = input.split('').map(Number);

function solution3(s) {
  let group = [0, 0];
  // s[0]의 그룹 카운트 증가
  group[s[0]]++;
  //현재 문자가 다음 문자의 값과 다른 경우 다음 문자의 그룹 카운트를 1 증가
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      group[s[i + 1]]++;
    }
  }
    // 0 과 1 그룹의 숫자중 더적은값을 출력
  return Math.min(...group);
}

console.log(solution3(s));
