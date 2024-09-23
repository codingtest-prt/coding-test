let n = 1260;
let count = 0;
let coin_types = [500, 100, 50, 10]
for (let coin of coin_types){
  count += ~~(n / coin)
  n = n % coin
}
console.log(count)
