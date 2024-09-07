// array 배열 선언
const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
// 첫번째 데이터는 정렬 되어있다는 판단하에 두번째 데이터부터 반복문 시작
for (var i = 1; i < array.length; i++) {
  // j번째 데이터(array[j])를 j-1번째 데이터(array[j-1])와 비교
  for (var j = i; j > 0; j--) {
    // j-1번째 데이터(array[j-1])가 j번째 데이터(array[j])보다 클 경우, swap
    if (array[j - 1] > array[j]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      // j-1번째 데이터(array[j-1])가 j번째 데이터(array[j])보다 작을 경우, swap하지 않고 j-1번째 데이터(array[j-1])의 위치는 변하지 않음
    } else break;
  }
}
console.log(array); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]