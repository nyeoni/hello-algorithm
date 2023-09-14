const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const w = Number(input[0]);

console.log(solution(w));

function solution(w) {
  let answer = 0;

  // compare all cases
  let f = Math.floor(w / 5);
  for (f; f >= 0; f--) {
    const lw = w - 5 * f;

    if (lw % 3 === 0) {
      return (lw / 3) + f;
    }
  }
  return -1;
}
