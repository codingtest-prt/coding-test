const n = 4;
const arr = [1, 3, 1, 5];

const d = [...Array(n + 1).fill(0)];

const dp = (n) => {
  d[0] = arr[0];
  d[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < n; i++) {
    d[i] = Math.max(d[i - 2] + arr[i], d[i - 1]);
  }

  return d[n - 1];
};

function solution(n, arr) {
  return dp(n);
}

console.log(solution(n, arr));