function solution (n, arr1, m, arr2){
  function binarySearch (arr1, target, start, end){
    while (start <= end){ //원소가 존재하지 않는 경우 null반환, 존재시 반복문 실행
      let mid = Math.floor((start + end) / 2) // 중간인덱스 변수지정
      if (arr1[mid] === target) return mid; //arr1의 중간값이 타겟값과 같으면 해당인덱스반환
      else if (target > arr1[mid]) start = mid + 1; // 중간값이 target값보다 작을경우 start값을 중간인덱스(mid)+1로하고 반복문 재실행
      else end = mid -1; // 중간값이 target값보다 클경우 end값을 중간인덱스(mid) -1로하고 반복문 재실행
      }
      return null; //타겟값이 없으면 null 반환
    }
    const array =  arr1.sort( (a,b) => a-b ) // 정렬되어 있지않은 arr1 배열을 크기가 작은 순서대로 정렬
    for (let i of arr2){
      const answer = binarySearch (array, i, 0, n-1); // 타겟넘버를 하나씩 binarySearch 실행
      answer == null ?  console.log("no") : console.log("yes") //타겟넘버가 있을시 yes 없을시 no 실행
    }
  }
  solution(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]);