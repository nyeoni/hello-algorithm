// 1. 인접행렬
function solution(n, m, edges) {
  let answer = 0
  const graph = Array(n + 1).fill(null).map(() => Array(n + 1).fill(0))
  const ch = Array.from({length: n + 1}, () => 0) // 정점을 지났는지 확인하는 배열
  const path = [] // 확인용

  // tree 자료구조 표현
  for (const edge of edges) {
    const [src, dst] = edge
    graph[src][dst] = 1
  }

  // dfs function
  function dfs(v) {
    if (v === n) {
      answer++
      console.log(path)
    } else {
      for (let i = 1; i <= n; i++) {
        // 그래프 연결이 되어있고 노드를 지나지 않았을 경우
        if (graph[v][i] === 1 && ch[i] === 0) {
          ch[i] = 1
          path.push(i)
          dfs(i)
          ch[i] = 0 // 백트래킹
          path.pop()
        }
      }
    }
  }

  path.push(1)
  ch[1] = 1
  dfs(1)

  return answer
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, 9, arr));