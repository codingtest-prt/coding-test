const user = [
  { name: '홍길동', age: 40 },
  { name: '임꺽정', age: 12 },
  { name: '주몽', age: 23 },
  { name: '척준경', age: 88 },
];

// 나이순 오름차순
const result1 = user.sort((a, b) => a.age - b.age); 
console.log('result1: ', result1);
/*
  { name: '임꺽정', age: 12 },
  { name: '주몽', age: 23 },
  { name: '홍길동', age: 40 },
  { name: '척준경', age: 88 }
*/

// 나이순 내림차순
const result2 = user.sort((a, b) => b.age - a.age); 
console.log('result2: ', result2);
/*
  { name: '척준경', age: 88 },
  { name: '홍길동', age: 40 },
  { name: '주몽', age: 23 },
  { name: '임꺽정', age: 12 }
*/

// 이름순 오름차순
const answer1 = user.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
console.log('result1: ', answer1);
/*
  { name: '임꺽정', age: 12 },
  { name: '주몽', age: 23 },
  { name: '척준경', age: 88 },
  { name: '홍길동', age: 40 }
*/

// 이름순 내림차순
const answer2 = user.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1);
console.log('result2: ', answer2);
/*
  { name: '홍길동', age: 40 },
  { name: '척준경', age: 88 },
  { name: '주몽', age: 23 },
  { name: '임꺽정', age: 12 }
*/