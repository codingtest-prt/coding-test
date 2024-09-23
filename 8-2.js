let d = [...Array(100).fill(0)]; //한번 계산된 결과를 기억하기위한 리스트

const fibo = (x) => {
  if (x === 1 || x === 2) return 1; // 종료조건 1 or 2일때 1을 반환

  if (d[x] != 0) return d[x]; // 이미 계산한전 있는 문제라면 그대로 반환
  return (d[x] = fibo(x - 1) + fibo(x - 2)); // 계산한적없는문제라면 피보나치 결과 반환
};

console.log(fibo(4));