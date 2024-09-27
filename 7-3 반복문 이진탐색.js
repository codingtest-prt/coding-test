function binary_search (arr, target, start, end){
  while (start <= end){
    let mid = ~~((start + end) / 2)
    if (arr[mid] === target) return mid;
    else if(arr[mid] > target){
      end = mid -1 
    }
    else {
      start = mid + 1
    }
  }
  return null
}







const n = 10;
const target = 7;
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const start = 0,
  end = n - 1;
console.log(binary_search(arr, target, start, end) + 1);