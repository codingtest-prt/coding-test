let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
let n = array.length
function quickSort (array, start, end) {
  if (start >= end) return;
  let pivot = start;
  let left = start + 1
  let right = end;

  while (right >= left) {
    //피벗보다 큰 데이터 찾기
    while (left <= end && array[left] <= array[pivot]){
      left++
    }
    //피벗보다 작은 데이터 찾기
    while (right > start && array[right] >= array[pivot]){
      right--
    }
    // 엇갈렷다면 작은데이터와 피벗을 교체
    if (left > right){
      [array[pivot], array[right]] = [array[right], array[pivot]]
    }
    else {// 아니면 작은데이터와 큰데이터를 교체
      [array[left],array[right]] = [array[right],array[left]]
    }
  }
  //정렬된 피벗기준 왼쪽과 오른쪽으로 나뉜 배열에 대해 quickSort함수 실행
  quickSort(array, start, right - 1);
  quickSort(array, right + 1, end);
}

quickSort(array, 0, n-1)
let q = array.sort((a, b) => a + b, 0)
console.log(q)