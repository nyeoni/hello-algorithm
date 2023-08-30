function solution(tickets) {
  let answer = [];

  tickets.sort((t1, t2) => {
    let res = 0;
    if ((res = t1[0].localeCompare(t2[0])) === 0)
      return t1[1].localeCompare(t2[1]);
    else return res;
  });
  const len = tickets.length;
  const ch = Array(len).fill(false);

  const dfs = path => {
    if (path.length === len + 1) {
      answer = path;
      return true;
    } else {
      const last = path.at(-1);

      for (let i = 0; i < len; i++) {
        if (ch[i] === false && tickets[i][0] === last) {
          ch[i] = true;
          path.push(tickets[i][1]);
          const res = dfs(path);
          if (res) return true;

          path.pop();
          ch[i] = false;
        }
      }
      return false;
    }
  };

  dfs(['ICN']);

  return answer;
}
