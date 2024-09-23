const solution = (n, m, arr) => {
  let start = 0; //시작점
  let end = Math.max(...arr); // 떡의 최대길이
  let result = 0;

  while (start <= end) {
    let total = 0; // 자르고 남은떡의 길이

    const mid = Math.floor((start + end) / 2); //절단기의 높이의중간 => 현재 절단기의 높이

    for (let i of arr) {
      if (i > mid) { // 떡의높이가 절단기 현재높이가보다 크면 total에 절단기가 자르고 남은떡 +
        total += i - mid;
      }
    }

    if (total < m) end = mid - 1; //자르고 남은떡의길이가 손님이 원하는 길이보다 작으면 end값을 mid-1로 바꿈
    else { //자르고 남은떡의길이가 손님이 원하는길이보다 길거나 같으면
      result = mid; //result 값을 현재 절단기의 높이값으로하고
      start = mid + 1; // 시작점을 mid값 +1값으로 바꿈
    }
  }

  console.log(result);
};

solution(4, 6, [19, 15, 10, 17]);