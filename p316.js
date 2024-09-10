function solution(food_times, k) {
  const n = food_times.length;
  
  // 음식과 원래 인덱스를 포함한 배열 생성
  let foodWithIndex = food_times.map((time, index) => [time, index + 1]);
  
  // 음식 시간을 기준으로 오름차순 정렬
  foodWithIndex.sort((a, b) => a[0] - b[0]);
  
  let prevTime = 0; // 이전 음식의 소모 시간
  let totalTime = 0; // 전체 소모 시간

  for (let i = 0; i < n; i++) {
      const [currentTime, index] = foodWithIndex[i];
      const timeToEat = (currentTime - prevTime) * (n - i); // 현재 음식까지의 소모 시간 계산 (한바퀴기준)
      
      if (k >= timeToEat) {
          k -= timeToEat; // 소모한 시간 차감
          prevTime = currentTime; // 이전 소모 시간 업데이트
      } else {
          // 남은 음식에서 인덱스 찾기
          foodWithIndex = foodWithIndex.slice(i); // 현재 음식부터 남은 음식 배열 생성
          foodWithIndex.sort((a, b) => a[1] - b[1]); // 인덱스 기준으로 정렬
          return foodWithIndex[k % foodWithIndex.length][1]; // k번째 인덱스 반환
      }
  }
  
  return -1; // 모든 음식을 소진한 경우
}
