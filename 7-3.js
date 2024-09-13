function binarySearch (arr, target, start, end){
  while (start <= end){ //원소가 존재하지 않는 경우 while 실행불가, 원소가 존재할경우 반복문 실행
    mid = Math.floor((start+end)/2) // 중간점 인덱스 반환
    if (arr[mid] === target) return mid; // arr의 중간값이 target의 값과 같을경우 mid값(arr배열안의 target의 인덱스값) 반환
    else if (arr[mid] > target){ // 중간값이 target값보다 클경우 end값을 중간인덱스(mid) -1로하고 반복문 재실행
      end = mid -1
    } else start = mid + 1; // 중간값이 target값보다 작을경우 start값을 중간인덱스(mid)+1로하고 반복문 재실행
  }
  return null;  //target 원소가 존재하지 않는 경우 null 반환
}

const n = 10;
const target = 7;
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const start = 0,
end = n - 1;
console.log(binarySearch(arr, target, start, end) + 1);