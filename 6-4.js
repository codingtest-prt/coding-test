arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8]
let n = arr.length;
function quickSort (arr, start, end) {
    if (start >= end) return; // 배열의 크기가 1일경우 종료
    const p = start; 
    let left = start + 1;
    let right = end;
    // left 인덱스값이 right 인덱스값을 넘어가면 종료
    while (left <= right) {
      // 피벗보다 큰 데이터를 찾을때 까지 반복 left 인덱스값이 배열의 마지막 인덱스값을 넘어가거나 arr[left] > arr[p] 이 될때까지 반복
      while (left <= end && arr[p] >= arr[left]){
        left++;
      }// 피벗보다 작은 데이터 찾을때 까지 반복 right 인덱스 값이 시작인덱스값을 넘어가거나 arr[right] < arr[p]이 될때까지 반복
      while (right > start && arr[p] <= arr[right]){
        right--;
      }
  // 만약 left인덱스값이 right인덱스값을 넘어갔을때 
    if (left > right){
      [arr[p],arr[right]] = [arr[right],arr[p]]
    } else {
      [arr[left],arr[right]] = [arr[right],arr[left]]
    }
  }
  //정렬된 피벗기준 왼쪽과 오른쪽으로 나뉜 배열에 대해 quickSort함수 실행
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
}

quickSort(arr, 0, n-1)
console.log(arr)