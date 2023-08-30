// 틀린 답안!!!! 왓 더 퍽
function solution(n, m, x, y, r, c, k) {
  let answer = '';
  // bfs
  // n * m 격자
  // x * y 출발
  // r * c 도착
  // 이동거리 k
  const dir = {
    d: [1, 0],
    l: [0, -1],
    r: [0, 1],
    u: [-1, 0],
  };
  const dir_keys = Object.keys(dir);

  const sp = Math.abs(x - r) + Math.abs(y - c);
  if (sp === k - 1 || sp > k) {
    return 'impossible';
  }

  const queue = [];
  const ch = Array.from(Array(n + 1), () => Array(m + 1).fill(false));
  queue.push([[x, y], 0, '']);
  ch[x - 1][y - 1] = true;

  const sort_path = p => {
    const path_arr = p.split('').sort((a, b) => a.localeCompare(b));
    const ch = Array(p.length).fill(false);
    let res = '';

    const dfs = (px, py, dist) => {
      if (px === r && py === c && dist === k) {
        return true;
      } else {
        for (let i = 0; i < p.length; i++) {
          if (ch[i] === true) continue;
          const dk = path_arr[i];
          const [dx, dy] = dir[dk];
          const nx = px + dx;
          const ny = py + dy;

          if (nx > 0 && ny > 0 && nx <= n && ny <= m) {
            const tmp = res;
            ch[i] = true;
            res += dk;
            const r = dfs(nx, ny, dist + 1);
            if (r) return r;
            ch[i] = false;
            res = tmp;
          }
        }
      }
    };

    dfs(x, y, 0);

    return res;
  };

  while (queue.length) {
    const [pos, dist, path] = queue.shift();
    const [px, py] = pos;

    if (px === r && py === c) {
      answer = path;
      break;
    } else {
      for (const d of dir_keys) {
        const [dx, dy] = dir[d];
        const nx = px + dx;
        const ny = py + dy;

        if (
          nx > 0 &&
          ny > 0 &&
          nx <= n &&
          ny <= m &&
          ch[nx - 1][ny - 1] === false
        ) {
          ch[nx - 1][ny - 1] = true;
          queue.push([[nx, ny], dist + 1, path + d]);
        }
      }
    }
  }

  if (answer.length !== k) {
    const rest = k - answer.length;
    if (rest % 2 !== 0) return 'impossible';

    if (r === n) {
      if (c > 1) answer += 'l'.repeat(rest / 2) + 'r'.repeat(rest / 2);
      else answer += 'r'.repeat(rest / 2) + 'l'.repeat(rest / 2);
    } else {
      answer += 'd'.repeat(rest / 2) + 'u'.repeat(rest / 2);
    }
  }

  answer = sort_path(answer);
  return answer;
}

// 6, 6, 2, 6, 6, 5, k = 11 일 때, "ddddl+lllrrr"
const res = solution(6, 6, 2, 6, 6, 5, 11);
console.log(res);

// function solution(n, m, x, y, r, c, k) {
//     // n * m 격자
//     // x * y 출발
//     // r * c 도착
//     // 이동거리 k
//     var answer = '';
//     const dir = {
//         'd': [-1, 0],
//         'l': [0, -1],
//         'r': [0, 1],
//         'u': [1, 0]
//     }
//     const dir_keys = Object.keys(dir)

//     const dfs = (px, py, dist) => {
//         if (px === r && py === c && dist === k) {
//             return true;
//         } else if (px === r && py === c && dist === k - 1) {
//             answer = 'impossible'
//             return true;
//         } else {
//             for (const d of dir_keys) {
//                 const [dx, dy] = dir[d];
//                 const nx = px + dx;
//                 const ny = py + dy;

//                 if (nx > 0 && ny > 0 && nx <= n && ny <= m) {
//                     const tmp = answer;
//                     answer += d;
//                     const res = dfs(nx, ny, dist + 1);
//                     if (res) return res;
//                     answer = tmp;
//                 }
//             }
//         }
//     }

//     dfs(x, y, 0);

//     return answer;
// }
