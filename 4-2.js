function solution (n) {
  let count = 0;
  for (let i = 0; i <= n; i++){
    for (let j = 0; j <= 59; j++){
      for (let k = 0; k <= 59; k++){
        let time = i.toString()+j.toString()+k.toString()
        if (time.includes('3')) count++
      }
    }
  }
  return count
}

console.log(solution(5))