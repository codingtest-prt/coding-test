function solution (n, arr1, m, arr2){
  // 변수 count에 arr1의 최고값만큼 0으로 채운 배열생성
  const count = Array(Math.max(...arr1) + 1).fill(0);
  // arr1의 숫자에 해당하는 count인덱스 +1
  for (let i of arr1) {
    count[i] += 1;
  }
    //arr2 에 해당하는값이 count 배열에 있으면 yes 없으면 no 반환
  for (let j of arr2) {
    count[j] === 0 ? console.log("no") : console.log("yes");
  }
};
  
  solution(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]);