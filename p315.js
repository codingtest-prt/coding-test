function solution1 (arr) {
  let count = 0;
  for (let i = 0; i < arr.length-1; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] === arr[j]) continue;
      else count ++
    }
  }
  console.log(count)
}

solution1([1, 5, 4, 3, 2, 4, 5, 2])


//다른놈

const solution2 = (n, m, arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) result.push([i + 1, j + 1]);
    }
  }

  console.log(result.length);
};

solution2(5, 3, [1, 3, 2, 3, 2]);