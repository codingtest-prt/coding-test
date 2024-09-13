const solution = (n, arr, m, x) => {
  const arrSet = new Set(arr); //arr 배열을 Set으로 변환 Set은 중복을 허용하지 않는 데이터 구조로, 요소를 빠르게 검색 가능 {8, 3, 7, 9, 2}

  for (let i of x) {
    arrSet.has(i) ? console.log("yes") : console.log("no"); //Set의 has 메서드를 사용하여 arrSet에 현재 요소 i가 존재하는지 확인
  }
};

solution(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]);