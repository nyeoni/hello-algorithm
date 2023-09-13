const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let i = 0;
let T = Number(input[i++]);

while (T) {
  let N = Number(input[i++]);
  const arr = [];
  while (N) {
    arr.push(input[i++].split(' '));
    N--;
  }
  console.log(solution(arr));
  T--;
}

function solution(arr) {
  let answer = 0;
  const grade = arr
    .map(([a, b]) => [Number(a), Number(b)])
    .sort((a, b) => a[0] - b[0]);

  let pivot = grade[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (grade[i][1] < pivot) {
      answer++;
      pivot = grade[i][1];
    }
  }

  return answer + 1;
}
