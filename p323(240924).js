function solution(str) {
  const n = str.length; // 
  let ans = n;

  //i는 압축 단위 0부터 늘려가면서 확인
  for (let i = 1; i <= ~~(n / 2); i++) { // 반복되는 최대길이는 str길이 / 2
    const result = []; 
    for (let j = 0; j < n; j += i) {
      const sub = str.slice(j, i + j); // 인덱스 0 부터 i 만큼 자른 배열 생성후
      result.push(sub); // 빈배열에 push
    }

    let compressed = '';// 빈문자열 변수지정
    let cnt = 1;// 반복되는 숫자 변수지정

    for (let j = 0; j < result.length; j++) {
      if (result[j] === result[j + 1]) { // 현재 인덱스와 다음인덱스가 겹칠시 cnt++
        cnt++;
      } else { // 현재인덱스와 다음인덱스가 다르면 빈문자열에 현재까지 반복된횟수와 함께 추가
        compressed += `${cnt === 1 ? '' : cnt}${result[j]}`;
        cnt = 1;
      }
    }

    ans = Math.min(ans, compressed.length); // ans값에 i만큼 자른 문자열의 길이를 비교하여
  }                                         // 저장후 다음 반복문 시작

  return ans; //ans값의 최솟값 리턴
}

//다른 풀이 앞선풀이는 i만큼 자른후 배열에 저장한뒤 다음순서로 넘어갔지만
//이번풀이는 자른다음 바로 다음 순서로 넘어감
function solution(str) {
  const n = str.length;
  let min = n;

  for (let i = 1; i <= n; i++) {
    let prev = 0;
    let cnt = 1;
    let ans = '';

    while (prev <= n) {
      const cur = str.slice(prev, prev + i);

      if (cur === str.slice(prev + i, prev + i * 2)) {
        cnt++;
      } else {
        ans += `${cnt > 1 ? cnt : ''}${cur}`;
        cnt = 1;
      }
      prev += i;
    }

    min = Math.min(min, ans.length);
  }

  return min;
}