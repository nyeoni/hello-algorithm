const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map((e, i) => (i === 0 ? e : e.split('')));

const [n, m] = input[0].split(' ').map(e => Number(e));
let answer = '';
let cnt = 0;

for (let i = 0; i < m; i++) {
  const alpha = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
  };

  for (let j = 0; j < n; j++) {
    const key = input[j + 1][i];
    alpha[key] += 1;
  }
  // console.log(alpha);
  const res = Object.entries(alpha).sort(([key1, val1], [key2, val2]) => {
    if (val1 === val2) return key1.localeCompare(key2);
    else return val2 - val1;
  });

  answer += res[0][0];
  cnt += res.reduce((acc, cur, i) => {
    if (i === 0) return acc;
    return acc + cur[1];
  }, 0);
}

console.log(answer);
console.log(cnt);
