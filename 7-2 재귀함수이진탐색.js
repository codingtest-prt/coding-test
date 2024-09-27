function binary_search (arr, target, start, end){
  if (start > end) return null;
  let mid = ~~(start + end) 
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target){
    return binary_search (arr, target, start, mid - 1)
  }
  else {
    return binary_search (arr, target, mid + 1, end)
  }
}
const n = 10;
const target = 7;
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const start = 0,
  end = n - 1;
console.log(binary_search(arr, target, start, end) + 1);