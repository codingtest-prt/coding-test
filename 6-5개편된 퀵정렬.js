let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
let n =array.length
function quickSort (arr){
  if (arr.length <= 1) return arr;

  const pivot = arr[0]
  let tail = arr.slice(1);

  let leftArr = tail.filter((v) => v <= pivot)
  let rightArr = tail.filter((v) => v > pivot)

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort(array, 0, n - 1));