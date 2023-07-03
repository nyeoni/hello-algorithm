// 2. 인접리스트
function solution(n, m, edges) {
  let answer = 0
  const graph = Array.from(Array(n + 1), () => Array())
  const ch = Array.from({length: n + 1}, () => 0) // 정점을 지났는지 확인하는 배열

  // tree 자료구조 표현
  for (const edge of edges) {
    const [src, dst] = edge
    graph[src].push(dst);
  }

  // dfs function
  function dfs(v) {
    if (v === n) {
      answer++
    } else {
      for (const nv of graph[v]) {
        // 그래프 연결이 되어있고 노드를 지나지 않았을 경우
        if (ch[nv] === 0) {
          ch[nv] = 1
          dfs(nv)
          ch[nv] = 0 // 백트래킹
        }
      }
    }
  }

  ch[1] = 1
  dfs(1)

  return answer
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, 9, arr));