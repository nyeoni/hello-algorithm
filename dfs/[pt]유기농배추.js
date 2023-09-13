const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t = 0;
let n = 0,
  m = 0,
  k = 0;
let pos = [];

let i = 0;
rl.on('line', line => {
  const str = line.split(' ');

  if (str.length === 1) {
    t = Number(str[0]);
  } else if (str.length === 3) {
    m = Number(str[0]);
    n = Number(str[1]);
    k = Number(str[2]);
  } else if (i < k) {
    pos.push(str);
    i++;
    if (i === k) {
      solution(n, m, k, pos);
      i = 0;
      t--;
      pos = [];
      if (t === 0) rl.close();
    }
  }
}).on('close', () => {
  process.exit();
});

function solution(n, m, k, pos) {
  let answer = 0;
  const graph = Array.from({ length: n }, () => Array(m).fill(0));

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const dfs = (y, x) => {
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (nx >= 0 && ny >= 0 && nx < m && ny < n && graph[ny][nx] === 1) {
        graph[ny][nx] = 0;
        dfs(ny, nx);
      }
    }
  };

  pos.forEach(([x, y]) => {
    graph[y][x] = 1;
  });

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1) {
        graph[i][j] = 0;
        answer++;
        dfs(i, j);
      }
    }
  }

  console.log(answer);
  return answer;
}
