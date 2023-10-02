function solution(n, wires) {
  let minDiff = n;
  const graph = Array.from({ length: n + 1 });

  // graph
  for (const w of wires) {
    const [src, dst] = w;
    if (graph[src]) graph[src].push(dst);
    else graph[src] = [dst];

    if (graph[dst]) graph[dst].push(src);
    else graph[dst] = [src];
  }

  // bruteforce

  const bf = () => {
    // cut src - dst and count the difference
    // chunk_cnt count from 1
    let cnt = 0;

    const queue = [1];
    const ch = Array.from({ length: n + 1 }, () => false);

    while (queue.length) {
      const w = queue.shift();

      graph[w]?.forEach((w, idx) => {
        if (w && !ch[w]) queue.push(w);
      });
      if (!ch[w]) {
        cnt++;
        ch[w] = true;
      }
    }

    // return diff

    // console.log(cnt)
    return Math.abs(n - cnt - cnt);
  };

  for (let i = 1; i <= n; i++) {
    if (!graph[i]) continue;
    graph[i].forEach((w, idx) => {
      // console.log('src dst', i, w)
      graph[i][idx] = undefined;
      // count
      const diff = bf(i, w);
      // console.log('diff', diff)
      graph[i][idx] = w;

      minDiff = Math.min(diff, minDiff);
    });
  }

  return minDiff;
}
