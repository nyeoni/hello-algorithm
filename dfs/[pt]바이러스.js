const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let edge_cnt = 0;
const graph = [];

let i = 0;
rl.on('line', line => {
  if (i === 0) n = Number(line);
  else if (i === 1) edge_cnt = Number(line);
  else {
    graph.push(line.split(' '));
    if (i === edge_cnt + 1) rl.close();
  }
  i++;
});

rl.on('close', () => {
  // console.log(n, edge_cnt);
  // console.log(graph);

  // console.log('==========solution=========');

  const answer = solution(n, graph);
  console.log(answer);
  process.exit();
});

function solution(n, nodes) {
  let answer = 0;
  const ch = Array.from({ length: n + 1 }, () => 0);
  const graph = Array.from({ length: n + 1 }, () => Array());

  nodes.forEach(([node1, node2]) => {
    graph[Number(node1)].push(node2);
    graph[Number(node2)].push(node1);
  });

  const dfs = num => {
    const targets = graph[num];

    if (targets.length === 0) return;
    for (const target of targets) {
      const idx = Number(target);
      if (ch[idx] === 0) {
        ch[idx] = 1;
        answer++;
        dfs(idx);
      }
    }
  };

  ch[1] = 1;
  dfs(1);
  return answer;
}
