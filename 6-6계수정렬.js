const solution = () => {
  const array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
// 0이있으므로 최대값 + 1 을 0으로 채운 배열생성 
  const count = Array(Math.max(...array) + 1).fill(0);
  // array에 해당하는 숫자를 하나씩 count 배열에 +1
  for (let i in array) {
    count[array[i]] += 1;
  }
    // count 저장된 숫자 하나씩 console.log로 추출
  for (let i in count) {
    for (let j = 0; j < count[i]; j++) {
      console.log(i);
    }
  }
};

solution();