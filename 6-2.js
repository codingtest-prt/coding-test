//arr   1~9까지 배열 생성
let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
// 배열 array 를 array[0] 부터 채우기 위한 반복문 사용
for (var i = 0; i < array.length; i++) {
  // 현재 인덱스에 있는값을 최솟값이 있는 인덱스로 지정
  let min_index = i;
  //arr[i]와 비교할 현재 인덱스 다음부터 끝까지 반복문 실행
  for (var j = i + 1; j < array.length; j++) {
    // 현재 인덱스와 현재 인덱스 그이후에 있는 값들과 비교
    if (array[j] < array[min_index]) {
      // array[min_index]보다 작은수가 있다면 그위치를 최솟값의 인덱스로 재지정
      min_index = j;
    }
  }
  // 현재 인덱스와 최솟값이 있는 인덱스의 위치변경
  [array[i], array[min_index]] = [array[min_index], array[i]];
}
// 정렬된 array 반환
console.log(array);