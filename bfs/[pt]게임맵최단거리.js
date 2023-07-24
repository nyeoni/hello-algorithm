function solution(maps) {
  let answer = -1;
  const n = maps.length;
  const m = maps[0].length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const visited = Array.from(Array(n), () => Array(m).fill(false));

  const queue = [];
  visited[0][0] = true;
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [x, y, dist] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      return dist;
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < m &&
          visited[nx][ny] === false &&
          maps[nx][ny] === 1
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
  }

  return answer;
}
