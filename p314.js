/*
function solution1 (arr){
  // 빈배열 지정
  let sum = [];
  // 두번의 반복문으로 배열안의 숫자를 더하여 만들수있는 모든수를 sum 배열에 push
  for (let i = 0; i < arr.length-1; i++){
    let n = arr[i];
    sum.push(n);
    for (let j = i+1; j < arr.length; j++){
      n += arr[j]
      sum.push(n);
    }
  }
  // sum 배열을 정렬후 중복값 제거
  const set = new Set (sum);
  const result = [...set].sort((a, b) => a-b)
  let answer = 1;
  // 1부터 차례대로 만들수없는 숫자 찾기
  for (let i of result){
    if (answer < i) break;
    answer++
  }
  console.log(answer)
}

solution1([3, 2, 1, 1, 9])
*/
//남이 푼것 11 이런 시발 헛고생했네 뭐임이거;;

const solution2 = (n, arr) => {
  let result = 1;
  let sortedArr = arr.sort((a, b) => a - b);
//는 현재 result가 i보다 작으면 루프를 종료합니다. 
//이는 result를 만들 수 없다는 의미입니다. 이 지점에서 result가 찾고자 하는 최소 불가능한 합입니다.
  for (let i of sortedArr) {
    if (result < i) break;
    //result += i;는 현재 result에 i를 추가합니다. 이 과정은 result를 만들 수 있는 수로 업데이트하여 계속해서 가능한 합을 확장해 나가는 것입니다.
    result += i;
  }

  console.log(result);
};

solution2(5, [3, 2, 1, 1, 9]);
