function solution(arr) {
  let answer = 0;
  // 7 * 7
  // 1 wall 0 path
  const len = arr.length;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const ch = Array.from(Array(len), () => Array(len).fill(false));

  // [0, 0] -> [6, 6]
  function dfs(posX, posY, check) {
    // stop condition
    if (posX === len - 1 && posY === len - 1) {
      answer++;
    } else {
      for (let i = 0; i < 4; i++) {
        const newX = posX + dx[i];
        const newY = posY + dy[i];
        if (
          newX < len &&
          newY < len &&
          newX >= 0 &&
          newY >= 0 &&
          arr[newX][newY] === 0 &&
          check[newX][newY] === false
        ) {
          // on & off
          check[newX][newY] = true;
          dfs(newX, newY, check);
          check[newX][newY] = false;
        }
      }
    }
  }
  ch[0][0] = true;
  dfs(0, 0, ch);
  console.log(answer);

  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
